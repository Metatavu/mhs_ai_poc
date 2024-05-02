import * as runtime from '../runtime';
import { OperationDescriptionFromJSON, OperationDescriptionsGet200ResponseInnerFromJSON, } from '../models/index';
export class DescriptionOfOperationApi extends runtime.BaseAPI {
    async operationDescriptionsGetRaw(requestParameters, initOverrides) {
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
            path: `/operation-descriptions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OperationDescriptionsGet200ResponseInnerFromJSON));
    }
    async operationDescriptionsGet(requestParameters = {}, initOverrides) {
        const response = await this.operationDescriptionsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async operationDescriptionsIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling operationDescriptionsIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/operation-descriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OperationDescriptionFromJSON));
    }
    async operationDescriptionsIdGet(requestParameters, initOverrides) {
        const response = await this.operationDescriptionsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async operationDescriptionsSearchGetRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['forestInformationStandard'] != null) {
            queryParameters['forestInformationStandard'] = requestParameters['forestInformationStandard'];
        }
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/operation-descriptions/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OperationDescriptionFromJSON));
    }
    async operationDescriptionsSearchGet(requestParameters = {}, initOverrides) {
        const response = await this.operationDescriptionsSearchGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const OperationDescriptionsGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
export const OperationDescriptionsIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
export const OperationDescriptionsSearchGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=DescriptionOfOperationApi.js.map