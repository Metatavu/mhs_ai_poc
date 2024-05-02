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

import type { FormattedTextParagraph } from './FormattedTextParagraph.js';
import {
    instanceOfFormattedTextParagraph,
    FormattedTextParagraphFromJSON,
    FormattedTextParagraphFromJSONTyped,
    FormattedTextParagraphToJSON,
} from './FormattedTextParagraph.js';
import type { MediaParagraph } from './MediaParagraph.js';
import {
    instanceOfMediaParagraph,
    MediaParagraphFromJSON,
    MediaParagraphFromJSONTyped,
    MediaParagraphToJSON,
} from './MediaParagraph.js';
import type { TableParagraph } from './TableParagraph.js';
import {
    instanceOfTableParagraph,
    TableParagraphFromJSON,
    TableParagraphFromJSONTyped,
    TableParagraphToJSON,
} from './TableParagraph.js';

/**
 * @type ParagraphsIdGet200ResponseInner
 * 
 * @export
 */
export type ParagraphsIdGet200ResponseInner = { type: 'formatted_text' } & FormattedTextParagraph | { type: 'media' } & MediaParagraph | { type: 'table' } & TableParagraph;

export function ParagraphsIdGet200ResponseInnerFromJSON(json: any): ParagraphsIdGet200ResponseInner {
    return ParagraphsIdGet200ResponseInnerFromJSONTyped(json, false);
}

export function ParagraphsIdGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParagraphsIdGet200ResponseInner {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'formatted_text':
            return Object.assign({}, FormattedTextParagraphFromJSONTyped(json, true), { type: 'formatted_text' });
        case 'media':
            return Object.assign({}, MediaParagraphFromJSONTyped(json, true), { type: 'media' });
        case 'table':
            return Object.assign({}, TableParagraphFromJSONTyped(json, true), { type: 'table' });
        default:
            throw new Error(`No variant of ParagraphsIdGet200ResponseInner exists with 'type=${json['type']}'`);
    }
}

export function ParagraphsIdGet200ResponseInnerToJSON(value?: ParagraphsIdGet200ResponseInner | null): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'formatted_text':
            return FormattedTextParagraphToJSON(value);
        case 'media':
            return MediaParagraphToJSON(value);
        case 'table':
            return TableParagraphToJSON(value);
        default:
            throw new Error(`No variant of ParagraphsIdGet200ResponseInner exists with 'type=${value['type']}'`);
    }

}

