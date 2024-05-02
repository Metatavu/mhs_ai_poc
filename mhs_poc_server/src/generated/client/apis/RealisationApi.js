import * as runtime from '../runtime';
export class RealisationApi extends runtime.BaseAPI {
    async realisationDescriptionsIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling realisationDescriptionsIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/realisation-descriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    async realisationDescriptionsIdGet(requestParameters, initOverrides) {
        const response = await this.realisationDescriptionsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async realisationDescriptionsSearchGetRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['forestInformationStandard'] != null) {
            queryParameters['forestInformationStandard'] = requestParameters['forestInformationStandard'];
        }
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/realisation-descriptions/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    async realisationDescriptionsSearchGet(requestParameters = {}, initOverrides) {
        const response = await this.realisationDescriptionsSearchGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const RealisationDescriptionsIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
export const RealisationDescriptionsSearchGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=RealisationApi.js.map