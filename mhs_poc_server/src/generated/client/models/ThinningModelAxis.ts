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
import type { ThinningModelAxisX } from './ThinningModelAxisX.js';
import {
    ThinningModelAxisXFromJSON,
    ThinningModelAxisXFromJSONTyped,
    ThinningModelAxisXToJSON,
} from './ThinningModelAxisX.js';

/**
 * 
 * @export
 * @interface ThinningModelAxis
 */
export interface ThinningModelAxis {
    /**
     * 
     * @type {ThinningModelAxisX}
     * @memberof ThinningModelAxis
     */
    x?: ThinningModelAxisX;
    /**
     * 
     * @type {X}
     * @memberof ThinningModelAxis
     */
    y?: any;
}

/**
 * Check if a given object implements the ThinningModelAxis interface.
 */
export function instanceOfThinningModelAxis(value: object): boolean {
    return true;
}

export function ThinningModelAxisFromJSON(json: any): ThinningModelAxis {
    return ThinningModelAxisFromJSONTyped(json, false);
}

export function ThinningModelAxisFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThinningModelAxis {
    if (json == null) {
        return json;
    }
    return {
        
        'x': json['x'] == null ? undefined : ThinningModelAxisXFromJSON(json['x']),
        'y': json['y'] == null ? undefined : ThinningModelAxisXFromJSON(json['y']),
    };
}

export function ThinningModelAxisToJSON(value?: ThinningModelAxis | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'x': ThinningModelAxisXToJSON(value['x']),
        'y': ThinningModelAxisXToJSON(value['y']),
    };
}
