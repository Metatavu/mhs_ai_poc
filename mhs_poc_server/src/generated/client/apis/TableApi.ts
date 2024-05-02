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
import type {
  ArticlesGet400Response,
  ArticlesGet404Response,
  ArticlesGet500Response,
  TablesIdGet200ResponseInner,
} from '../models/index.js';
import {
    ArticlesGet400ResponseFromJSON,
    ArticlesGet400ResponseToJSON,
    ArticlesGet404ResponseFromJSON,
    ArticlesGet404ResponseToJSON,
    ArticlesGet500ResponseFromJSON,
    ArticlesGet500ResponseToJSON,
    TablesIdGet200ResponseInnerFromJSON,
    TablesIdGet200ResponseInnerToJSON,
} from '../models/index.js';

export interface TablesIdGetRequest {
    id: Array<string>;
    langcode?: TablesIdGetLangcodeEnum;
}

/**
 * 
 */
export class TableApi extends runtime.BaseAPI {

    /**
     * Fetch Table by given ID
     */
    async tablesIdGetRaw(requestParameters: TablesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TablesIdGet200ResponseInner>>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling tablesIdGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TablesIdGet200ResponseInnerFromJSON));
    }

    /**
     * Fetch Table by given ID
     */
    async tablesIdGet(requestParameters: TablesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TablesIdGet200ResponseInner>> {
        const response = await this.tablesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const TablesIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
} as const;
export type TablesIdGetLangcodeEnum = typeof TablesIdGetLangcodeEnum[keyof typeof TablesIdGetLangcodeEnum];