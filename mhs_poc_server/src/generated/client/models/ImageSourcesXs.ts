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
 * @interface ImageSourcesXs
 */
export interface ImageSourcesXs {
    /**
     * 
     * @type {string}
     * @memberof ImageSourcesXs
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageSourcesXs
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageSourcesXs
     */
    height?: number;
}

/**
 * Check if a given object implements the ImageSourcesXs interface.
 */
export function instanceOfImageSourcesXs(value: object): boolean {
    return true;
}

export function ImageSourcesXsFromJSON(json: any): ImageSourcesXs {
    return ImageSourcesXsFromJSONTyped(json, false);
}

export function ImageSourcesXsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageSourcesXs {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'] == null ? undefined : json['url'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
    };
}

export function ImageSourcesXsToJSON(value?: ImageSourcesXs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'width': value['width'],
        'height': value['height'],
    };
}

