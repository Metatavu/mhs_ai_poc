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
import { ImageSourcesLgFromJSON, ImageSourcesLgToJSON, } from './ImageSourcesLg.js';
import { ImageSourcesMdFromJSON, ImageSourcesMdToJSON, } from './ImageSourcesMd.js';
import { ImageSourcesOriginalFromJSON, ImageSourcesOriginalToJSON, } from './ImageSourcesOriginal.js';
import { ImageSourcesSmFromJSON, ImageSourcesSmToJSON, } from './ImageSourcesSm.js';
import { ImageSourcesXlFromJSON, ImageSourcesXlToJSON, } from './ImageSourcesXl.js';
import { ImageSourcesXsFromJSON, ImageSourcesXsToJSON, } from './ImageSourcesXs.js';
import { ImageSourcesXxlFromJSON, ImageSourcesXxlToJSON, } from './ImageSourcesXxl.js';
/**
 * Check if a given object implements the ImageSources interface.
 */
export function instanceOfImageSources(value) {
    return true;
}
export function ImageSourcesFromJSON(json) {
    return ImageSourcesFromJSONTyped(json, false);
}
export function ImageSourcesFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'xs': json['xs'] == null ? undefined : ImageSourcesXsFromJSON(json['xs']),
        'sm': json['sm'] == null ? undefined : ImageSourcesSmFromJSON(json['sm']),
        'md': json['md'] == null ? undefined : ImageSourcesMdFromJSON(json['md']),
        'lg': json['lg'] == null ? undefined : ImageSourcesLgFromJSON(json['lg']),
        'xl': json['xl'] == null ? undefined : ImageSourcesXlFromJSON(json['xl']),
        'xxl': json['xxl'] == null ? undefined : ImageSourcesXxlFromJSON(json['xxl']),
        'original': json['original'] == null ? undefined : ImageSourcesOriginalFromJSON(json['original']),
    };
}
export function ImageSourcesToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'xs': ImageSourcesXsToJSON(value['xs']),
        'sm': ImageSourcesSmToJSON(value['sm']),
        'md': ImageSourcesMdToJSON(value['md']),
        'lg': ImageSourcesLgToJSON(value['lg']),
        'xl': ImageSourcesXlToJSON(value['xl']),
        'xxl': ImageSourcesXxlToJSON(value['xxl']),
        'original': ImageSourcesOriginalToJSON(value['original']),
    };
}