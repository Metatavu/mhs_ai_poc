export const BASE_PATH = "https://api.metsanhoidonsuositukset.fi/v2".replace(/\/+$/, "");
export class Configuration {
    constructor(configuration = {}) {
        this.configuration = configuration;
    }
    set config(configuration) {
        this.configuration = configuration;
    }
    get basePath() {
        return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
    }
    get fetchApi() {
        return this.configuration.fetchApi;
    }
    get middleware() {
        return this.configuration.middleware || [];
    }
    get queryParamsStringify() {
        return this.configuration.queryParamsStringify || querystring;
    }
    get username() {
        return this.configuration.username;
    }
    get password() {
        return this.configuration.password;
    }
    get apiKey() {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }
    get accessToken() {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : async () => accessToken;
        }
        return undefined;
    }
    get headers() {
        return this.configuration.headers;
    }
    get credentials() {
        return this.configuration.credentials;
    }
}
export const DefaultConfig = new Configuration();
export class BaseAPI {
    constructor(configuration = DefaultConfig) {
        this.configuration = configuration;
        this.fetchApi = async (url, init) => {
            let fetchParams = { url, init };
            for (const middleware of this.middleware) {
                if (middleware.pre) {
                    fetchParams = await middleware.pre({
                        fetch: this.fetchApi,
                        ...fetchParams,
                    }) || fetchParams;
                }
            }
            let response = undefined;
            try {
                response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
            }
            catch (e) {
                for (const middleware of this.middleware) {
                    if (middleware.onError) {
                        response = await middleware.onError({
                            fetch: this.fetchApi,
                            url: fetchParams.url,
                            init: fetchParams.init,
                            error: e,
                            response: response ? response.clone() : undefined,
                        }) || response;
                    }
                }
                if (response === undefined) {
                    if (e instanceof Error) {
                        throw new FetchError(e, 'The request failed and the interceptors did not return an alternative response');
                    }
                    else {
                        throw e;
                    }
                }
            }
            for (const middleware of this.middleware) {
                if (middleware.post) {
                    response = await middleware.post({
                        fetch: this.fetchApi,
                        url: fetchParams.url,
                        init: fetchParams.init,
                        response: response.clone(),
                    }) || response;
                }
            }
            return response;
        };
        this.middleware = configuration.middleware;
    }
    withMiddleware(...middlewares) {
        const next = this.clone();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }
    withPreMiddleware(...preMiddlewares) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware(...middlewares);
    }
    withPostMiddleware(...postMiddlewares) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware(...middlewares);
    }
    isJsonMime(mime) {
        if (!mime) {
            return false;
        }
        return BaseAPI.jsonRegex.test(mime);
    }
    async request(context, initOverrides) {
        const { url, init } = await this.createFetchParams(context, initOverrides);
        const response = await this.fetchApi(url, init);
        if (response && (response.status >= 200 && response.status < 300)) {
            return response;
        }
        throw new ResponseError(response, 'Response returned an error code');
    }
    async createFetchParams(context, initOverrides) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }
        const headers = Object.assign({}, this.configuration.headers, context.headers);
        Object.keys(headers).forEach(key => headers[key] === undefined ? delete headers[key] : {});
        const initOverrideFn = typeof initOverrides === "function"
            ? initOverrides
            : async () => initOverrides;
        const initParams = {
            method: context.method,
            headers,
            body: context.body,
            credentials: this.configuration.credentials,
        };
        const overriddenInit = {
            ...initParams,
            ...(await initOverrideFn({
                init: initParams,
                context,
            }))
        };
        let body;
        if (isFormData(overriddenInit.body)
            || (overriddenInit.body instanceof URLSearchParams)
            || isBlob(overriddenInit.body)) {
            body = overriddenInit.body;
        }
        else if (this.isJsonMime(headers['Content-Type'])) {
            body = JSON.stringify(overriddenInit.body);
        }
        else {
            body = overriddenInit.body;
        }
        const init = {
            ...overriddenInit,
            body
        };
        return { url, init };
    }
    clone() {
        const constructor = this.constructor;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
}
BaseAPI.jsonRegex = new RegExp('^(:?application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$', 'i');
;
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
function isFormData(value) {
    return typeof FormData !== "undefined" && value instanceof FormData;
}
export class ResponseError extends Error {
    constructor(response, msg) {
        super(msg);
        this.response = response;
        this.name = "ResponseError";
    }
}
export class FetchError extends Error {
    constructor(cause, msg) {
        super(msg);
        this.cause = cause;
        this.name = "FetchError";
    }
}
export class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
export function querystring(params, prefix = '') {
    return Object.keys(params)
        .map(key => querystringSingleKey(key, params[key], prefix))
        .filter(part => part.length > 0)
        .join('&');
}
function querystringSingleKey(key, value, keyPrefix = '') {
    const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
    if (value instanceof Array) {
        const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
            .join(`&${encodeURIComponent(fullKey)}=`);
        return `${encodeURIComponent(fullKey)}=${multiValue}`;
    }
    if (value instanceof Set) {
        const valueAsArray = Array.from(value);
        return querystringSingleKey(key, valueAsArray, keyPrefix);
    }
    if (value instanceof Date) {
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
    }
    if (value instanceof Object) {
        return querystring(value, fullKey);
    }
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}
export function mapValues(data, fn) {
    return Object.keys(data).reduce((acc, key) => ({ ...acc, [key]: fn(data[key]) }), {});
}
export function canConsumeForm(consumes) {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}
export class JSONApiResponse {
    constructor(raw, transformer = (jsonValue) => jsonValue) {
        this.raw = raw;
        this.transformer = transformer;
    }
    async value() {
        return this.transformer(await this.raw.json());
    }
}
export class VoidApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    async value() {
        return undefined;
    }
}
export class BlobApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    async value() {
        return await this.raw.blob();
    }
    ;
}
export class TextApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    async value() {
        return await this.raw.text();
    }
    ;
}
//# sourceMappingURL=runtime.js.map