import * as runtime from '../runtime';
import { ArticleFromJSON, ArticlesGet200ResponseInnerFromJSON, } from '../models/index';
export class ArticleApi extends runtime.BaseAPI {
    async articlesGetRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        if (requestParameters['from'] != null) {
            queryParameters['from'] = requestParameters['from'];
        }
        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/articles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ArticlesGet200ResponseInnerFromJSON));
    }
    async articlesGet(requestParameters = {}, initOverrides) {
        const response = await this.articlesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async articlesIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling articlesIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/articles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ArticleFromJSON));
    }
    async articlesIdGet(requestParameters, initOverrides) {
        const response = await this.articlesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const ArticlesGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
export const ArticlesIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=ArticleApi.js.map