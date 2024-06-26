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
 * Language code in ISO-639-1 format (lowercase).
 * @export
 */
export const Langcode = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
export function instanceOfLangcode(value) {
    return Object.values(Langcode).includes(value);
}
export function LangcodeFromJSON(json) {
    return LangcodeFromJSONTyped(json, false);
}
export function LangcodeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function LangcodeToJSON(value) {
    return value;
}
