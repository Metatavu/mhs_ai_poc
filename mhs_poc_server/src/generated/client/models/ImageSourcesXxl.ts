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
 * @interface ImageSourcesXxl
 */
export interface ImageSourcesXxl {
    /**
     * 
     * @type {string}
     * @memberof ImageSourcesXxl
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageSourcesXxl
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageSourcesXxl
     */
    height?: number;
}

/**
 * Check if a given object implements the ImageSourcesXxl interface.
 */
export function instanceOfImageSourcesXxl(value: object): boolean {
    return true;
}

export function ImageSourcesXxlFromJSON(json: any): ImageSourcesXxl {
    return ImageSourcesXxlFromJSONTyped(json, false);
}

export function ImageSourcesXxlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageSourcesXxl {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'] == null ? undefined : json['url'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
    };
}

export function ImageSourcesXxlToJSON(value?: ImageSourcesXxl | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'width': value['width'],
        'height': value['height'],
    };
}
