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
 * Check if a given object implements the OperationDescription interface.
 */
export function instanceOfOperationDescription(value) {
    return true;
}
export function OperationDescriptionFromJSON(json) {
    return OperationDescriptionFromJSONTyped(json, false);
}
export function OperationDescriptionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'paragraphs': json['paragraphs'] == null ? undefined : json['paragraphs'],
        'categories': json['categories'] == null ? undefined : json['categories'],
        'glossaryTerms': json['glossaryTerms'] == null ? undefined : json['glossaryTerms'],
        'decisionMakingDescriptions': json['decisionMakingDescriptions'] == null ? undefined : json['decisionMakingDescriptions'],
        'realisationDescriptions': json['realisationDescriptions'] == null ? undefined : json['realisationDescriptions'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}
export function OperationDescriptionToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'categories': value['categories'],
        'glossaryTerms': value['glossaryTerms'],
        'decisionMakingDescriptions': value['decisionMakingDescriptions'],
        'realisationDescriptions': value['realisationDescriptions'],
        'url': value['url'],
    };
}
