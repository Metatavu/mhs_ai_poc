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
 * The primary picture visualising the content.
 * @export
 * @interface MainImage
 */
export interface MainImage {
    /**
     * Caption text provided for the image giving additional information or context for the presented image.
     * @type {string}
     * @memberof MainImage
     */
    caption?: string;
    /**
     * ID of the media item.
     * @type {string}
     * @memberof MainImage
     */
    media?: string;
}

/**
 * Check if a given object implements the MainImage interface.
 */
export function instanceOfMainImage(value: object): boolean {
    return true;
}

export function MainImageFromJSON(json: any): MainImage {
    return MainImageFromJSONTyped(json, false);
}

export function MainImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MainImage {
    if (json == null) {
        return json;
    }
    return {
        
        'caption': json['caption'] == null ? undefined : json['caption'],
        'media': json['media'] == null ? undefined : json['media'],
    };
}

export function MainImageToJSON(value?: MainImage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'caption': value['caption'],
        'media': value['media'],
    };
}

