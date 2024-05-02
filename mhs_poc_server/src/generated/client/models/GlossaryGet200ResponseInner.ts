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
 * @interface GlossaryGet200ResponseInner
 */
export interface GlossaryGet200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof GlossaryGet200ResponseInner
     */
    term?: string;
}

/**
 * Check if a given object implements the GlossaryGet200ResponseInner interface.
 */
export function instanceOfGlossaryGet200ResponseInner(value: object): boolean {
    return true;
}

export function GlossaryGet200ResponseInnerFromJSON(json: any): GlossaryGet200ResponseInner {
    return GlossaryGet200ResponseInnerFromJSONTyped(json, false);
}

export function GlossaryGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlossaryGet200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'term': json['term'] == null ? undefined : json['term'],
    };
}

export function GlossaryGet200ResponseInnerToJSON(value?: GlossaryGet200ResponseInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'term': value['term'],
    };
}

