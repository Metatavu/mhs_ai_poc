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
import type { ImageSourcesLg } from './ImageSourcesLg.js';
import {
    ImageSourcesLgFromJSON,
    ImageSourcesLgFromJSONTyped,
    ImageSourcesLgToJSON,
} from './ImageSourcesLg.js';
import type { ImageSourcesMd } from './ImageSourcesMd.js';
import {
    ImageSourcesMdFromJSON,
    ImageSourcesMdFromJSONTyped,
    ImageSourcesMdToJSON,
} from './ImageSourcesMd.js';
import type { ImageSourcesOriginal } from './ImageSourcesOriginal.js';
import {
    ImageSourcesOriginalFromJSON,
    ImageSourcesOriginalFromJSONTyped,
    ImageSourcesOriginalToJSON,
} from './ImageSourcesOriginal.js';
import type { ImageSourcesSm } from './ImageSourcesSm.js';
import {
    ImageSourcesSmFromJSON,
    ImageSourcesSmFromJSONTyped,
    ImageSourcesSmToJSON,
} from './ImageSourcesSm.js';
import type { ImageSourcesXl } from './ImageSourcesXl.js';
import {
    ImageSourcesXlFromJSON,
    ImageSourcesXlFromJSONTyped,
    ImageSourcesXlToJSON,
} from './ImageSourcesXl.js';
import type { ImageSourcesXs } from './ImageSourcesXs.js';
import {
    ImageSourcesXsFromJSON,
    ImageSourcesXsFromJSONTyped,
    ImageSourcesXsToJSON,
} from './ImageSourcesXs.js';
import type { ImageSourcesXxl } from './ImageSourcesXxl.js';
import {
    ImageSourcesXxlFromJSON,
    ImageSourcesXxlFromJSONTyped,
    ImageSourcesXxlToJSON,
} from './ImageSourcesXxl.js';

/**
 * Collection of image sources providing the original image as well as the image scaled to different sizes for presentation.
 * @export
 * @interface ImageSources
 */
export interface ImageSources {
    /**
     * 
     * @type {ImageSourcesXs}
     * @memberof ImageSources
     */
    xs?: ImageSourcesXs;
    /**
     * 
     * @type {ImageSourcesSm}
     * @memberof ImageSources
     */
    sm?: ImageSourcesSm;
    /**
     * 
     * @type {ImageSourcesMd}
     * @memberof ImageSources
     */
    md?: ImageSourcesMd;
    /**
     * 
     * @type {ImageSourcesLg}
     * @memberof ImageSources
     */
    lg?: ImageSourcesLg;
    /**
     * 
     * @type {ImageSourcesXl}
     * @memberof ImageSources
     */
    xl?: ImageSourcesXl;
    /**
     * 
     * @type {ImageSourcesXxl}
     * @memberof ImageSources
     */
    xxl?: ImageSourcesXxl;
    /**
     * 
     * @type {ImageSourcesOriginal}
     * @memberof ImageSources
     */
    original?: ImageSourcesOriginal;
}

/**
 * Check if a given object implements the ImageSources interface.
 */
export function instanceOfImageSources(value: object): boolean {
    return true;
}

export function ImageSourcesFromJSON(json: any): ImageSources {
    return ImageSourcesFromJSONTyped(json, false);
}

export function ImageSourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageSources {
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

export function ImageSourcesToJSON(value?: ImageSources | null): any {
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

