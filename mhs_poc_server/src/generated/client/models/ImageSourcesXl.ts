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
 * @interface ImageSourcesXl
 */
export interface ImageSourcesXl {
    /**
     * 
     * @type {string}
     * @memberof ImageSourcesXl
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageSourcesXl
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageSourcesXl
     */
    height?: number;
}

/**
 * Check if a given object implements the ImageSourcesXl interface.
 */
export function instanceOfImageSourcesXl(value: object): boolean {
    return true;
}

export function ImageSourcesXlFromJSON(json: any): ImageSourcesXl {
    return ImageSourcesXlFromJSONTyped(json, false);
}

export function ImageSourcesXlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageSourcesXl {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'] == null ? undefined : json['url'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
    };
}

export function ImageSourcesXlToJSON(value?: ImageSourcesXl | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'width': value['width'],
        'height': value['height'],
    };
}
