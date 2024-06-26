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
 * Check if a given object implements the ArticlesGet500Response interface.
 */
export function instanceOfArticlesGet500Response(value) {
    return true;
}
export function ArticlesGet500ResponseFromJSON(json) {
    return ArticlesGet500ResponseFromJSONTyped(json, false);
}
export function ArticlesGet500ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': json['error'] == null ? undefined : json['error'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}
export function ArticlesGet500ResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'error': value['error'],
        'message': value['message'],
    };
}
