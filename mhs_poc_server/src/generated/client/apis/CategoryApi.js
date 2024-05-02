import * as runtime from '../runtime';
import { CategoriesGet200ResponseInnerFromJSON, CategoryFromJSON, } from '../models/index';
export class CategoryApi extends runtime.BaseAPI {
    async categoriesGetRaw(requestParameters, initOverrides) {
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
            path: `/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CategoriesGet200ResponseInnerFromJSON));
    }
    async categoriesGet(requestParameters = {}, initOverrides) {
        const response = await this.categoriesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async categoriesIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling categoriesIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CategoryFromJSON));
    }
    async categoriesIdGet(requestParameters, initOverrides) {
        const response = await this.categoriesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const CategoriesGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
export const CategoriesIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=CategoryApi.js.map