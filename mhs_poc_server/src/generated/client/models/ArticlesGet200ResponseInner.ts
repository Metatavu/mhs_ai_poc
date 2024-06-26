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

import { mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface ArticlesGet200ResponseInner
 */
export interface ArticlesGet200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof ArticlesGet200ResponseInner
     */
    id?: string;
    /**
     * URL pointing to the web presentation of the content.
     * @type {string}
     * @memberof ArticlesGet200ResponseInner
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticlesGet200ResponseInner
     */
    title?: string;
}

/**
 * Check if a given object implements the ArticlesGet200ResponseInner interface.
 */
export function instanceOfArticlesGet200ResponseInner(value: object): boolean {
    return true;
}

export function ArticlesGet200ResponseInnerFromJSON(json: any): ArticlesGet200ResponseInner {
    return ArticlesGet200ResponseInnerFromJSONTyped(json, false);
}

export function ArticlesGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticlesGet200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'url': json['url'] == null ? undefined : json['url'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function ArticlesGet200ResponseInnerToJSON(value?: ArticlesGet200ResponseInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'url': value['url'],
        'title': value['title'],
    };
}

