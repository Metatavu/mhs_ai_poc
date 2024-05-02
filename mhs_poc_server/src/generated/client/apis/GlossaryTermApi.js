import * as runtime from '../runtime';
import { GlossaryGet200ResponseInnerFromJSON, GlossaryTermFromJSON, } from '../models/index';
export class GlossaryTermApi extends runtime.BaseAPI {
    async glossaryGetRaw(requestParameters, initOverrides) {
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
            path: `/glossary`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GlossaryGet200ResponseInnerFromJSON));
    }
    async glossaryGet(requestParameters = {}, initOverrides) {
        const response = await this.glossaryGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async glossaryIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling glossaryIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/glossary/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GlossaryTermFromJSON));
    }
    async glossaryIdGet(requestParameters, initOverrides) {
        const response = await this.glossaryIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const GlossaryGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
export const GlossaryIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=GlossaryTermApi.js.map