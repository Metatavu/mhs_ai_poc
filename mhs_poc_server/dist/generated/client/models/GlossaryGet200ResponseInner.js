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
/**
 * Check if a given object implements the GlossaryGet200ResponseInner interface.
 */
export function instanceOfGlossaryGet200ResponseInner(value) {
    return true;
}
export function GlossaryGet200ResponseInnerFromJSON(json) {
    return GlossaryGet200ResponseInnerFromJSONTyped(json, false);
}
export function GlossaryGet200ResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'term': json['term'] == null ? undefined : json['term'],
    };
}
export function GlossaryGet200ResponseInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'term': value['term'],
    };
}