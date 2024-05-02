import * as runtime from '../runtime';
import { ReferenceFromJSON, } from '../models/index';
export class ReferenceApi extends runtime.BaseAPI {
    async referencesIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling referencesIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/references/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ReferenceFromJSON));
    }
    async referencesIdGet(requestParameters, initOverrides) {
        const response = await this.referencesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const ReferencesIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=ReferenceApi.js.map