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
 * @interface ArticlesGet500Response
 */
export interface ArticlesGet500Response {
    /**
     * 
     * @type {string}
     * @memberof ArticlesGet500Response
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticlesGet500Response
     */
    message?: string;
}

/**
 * Check if a given object implements the ArticlesGet500Response interface.
 */
export function instanceOfArticlesGet500Response(value: object): boolean {
    return true;
}

export function ArticlesGet500ResponseFromJSON(json: any): ArticlesGet500Response {
    return ArticlesGet500ResponseFromJSONTyped(json, false);
}

export function ArticlesGet500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticlesGet500Response {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function ArticlesGet500ResponseToJSON(value?: ArticlesGet500Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': value['error'],
        'message': value['message'],
    };
}

