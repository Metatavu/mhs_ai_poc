/* tslint:disable */
/* eslint-disable */
/**
 * DigiMHS REST API
 * This page is a interactive documentation for REST service fetching best practices for sustainable forest management published by [Tapio](https://tapio.fi/).
 *
 * The version of the OpenAPI document: 2.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime.js';
import { MediaIdGet200ResponseInnerFromJSON, } from '../models/index.js';
/**
 *
 */
export class MediaApi extends runtime.BaseAPI {
    /**
     * Fetch Media by given ID
     */
    async mediaIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling mediaIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/media/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MediaIdGet200ResponseInnerFromJSON));
    }
    /**
     * Fetch Media by given ID
     */
    async mediaIdGet(requestParameters, initOverrides) {
        const response = await this.mediaIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export const MediaIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
