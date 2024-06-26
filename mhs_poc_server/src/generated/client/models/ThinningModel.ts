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
import type { ThinningModelAxis } from './ThinningModelAxis.js';
import {
    ThinningModelAxisFromJSON,
    ThinningModelAxisFromJSONTyped,
    ThinningModelAxisToJSON,
} from './ThinningModelAxis.js';
import type { ThinningModelLegalLimitInner } from './ThinningModelLegalLimitInner.js';
import {
    ThinningModelLegalLimitInnerFromJSON,
    ThinningModelLegalLimitInnerFromJSONTyped,
    ThinningModelLegalLimitInnerToJSON,
} from './ThinningModelLegalLimitInner.js';
import type { ThinningModelThinningLimitInner } from './ThinningModelThinningLimitInner.js';
import {
    ThinningModelThinningLimitInnerFromJSON,
    ThinningModelThinningLimitInnerFromJSONTyped,
    ThinningModelThinningLimitInnerToJSON,
} from './ThinningModelThinningLimitInner.js';

/**
 * 
 * @export
 * @interface ThinningModel
 */
export interface ThinningModel {
    /**
     * 
     * @type {ThinningModelAxis}
     * @memberof ThinningModel
     */
    axis?: ThinningModelAxis;
    /**
     * 
     * @type {string}
     * @memberof ThinningModel
     */
    id?: string;
    /**
     * 
     * @type {Array<ThinningModelLegalLimitInner>}
     * @memberof ThinningModel
     */
    legalLimit?: Array<ThinningModelLegalLimitInner>;
    /**
     * 
     * @type {Array<ThinningModelThinningLimitInner>}
     * @memberof ThinningModel
     */
    thinningLimit?: Array<ThinningModelThinningLimitInner>;
    /**
     * 
     * @type {Array<Items>}
     * @memberof ThinningModel
     */
    thinningRecommendation?: Array<any>;
}

/**
 * Check if a given object implements the ThinningModel interface.
 */
export function instanceOfThinningModel(value: object): boolean {
    return true;
}

export function ThinningModelFromJSON(json: any): ThinningModel {
    return ThinningModelFromJSONTyped(json, false);
}

export function ThinningModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThinningModel {
    if (json == null) {
        return json;
    }
    return {
        
        'axis': json['axis'] == null ? undefined : ThinningModelAxisFromJSON(json['axis']),
        'id': json['id'] == null ? undefined : json['id'],
        'legalLimit': json['legalLimit'] == null ? undefined : ((json['legalLimit'] as Array<any>).map(ThinningModelLegalLimitInnerFromJSON)),
        'thinningLimit': json['thinningLimit'] == null ? undefined : ((json['thinningLimit'] as Array<any>).map(ThinningModelThinningLimitInnerFromJSON)),
        'thinningRecommendation': json['thinningRecommendation'] == null ? undefined : ((json['thinningRecommendation'] as Array<any>).map(item => item)),
    };
}

export function ThinningModelToJSON(value?: ThinningModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'axis': ThinningModelAxisToJSON(value['axis']),
        'id': value['id'],
        'legalLimit': value['legalLimit'] == null ? undefined : ((value['legalLimit'] as Array<any>).map(ThinningModelLegalLimitInnerToJSON)),
        'thinningLimit': value['thinningLimit'] == null ? undefined : ((value['thinningLimit'] as Array<any>).map(ThinningModelThinningLimitInnerToJSON)),
        'thinningRecommendation': value['thinningRecommendation'] == null ? undefined : ((value['thinningRecommendation'] as Array<any>).map(item => item)),
    };
}

