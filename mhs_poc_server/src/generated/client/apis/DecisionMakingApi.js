import * as runtime from '../runtime';
export class DecisionMakingApi extends runtime.BaseAPI {
    async decisionMakingDescriptionsIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling decisionMakingDescriptionsIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/decision-making-descriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    async decisionMakingDescriptionsIdGet(requestParameters, initOverrides) {
        const response = await this.decisionMakingDescriptionsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const DecisionMakingDescriptionsIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=DecisionMakingApi.js.map