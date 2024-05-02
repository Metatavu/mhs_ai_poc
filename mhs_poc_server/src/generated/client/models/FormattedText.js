export function instanceOfFormattedText(value) {
    return true;
}
export function FormattedTextFromJSON(json) {
    return FormattedTextFromJSONTyped(json, false);
}
export function FormattedTextFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'html': json['html'] == null ? undefined : json['html'],
    };
}
export function FormattedTextToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'html': value['html'],
    };
}
//# sourceMappingURL=FormattedText.js.map