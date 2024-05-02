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
 * @interface CategoriesGet200ResponseInner
 */
export interface CategoriesGet200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof CategoriesGet200ResponseInner
     */
    name?: string;
}

/**
 * Check if a given object implements the CategoriesGet200ResponseInner interface.
 */
export function instanceOfCategoriesGet200ResponseInner(value: object): boolean {
    return true;
}

export function CategoriesGet200ResponseInnerFromJSON(json: any): CategoriesGet200ResponseInner {
    return CategoriesGet200ResponseInnerFromJSONTyped(json, false);
}

export function CategoriesGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoriesGet200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function CategoriesGet200ResponseInnerToJSON(value?: CategoriesGet200ResponseInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}
