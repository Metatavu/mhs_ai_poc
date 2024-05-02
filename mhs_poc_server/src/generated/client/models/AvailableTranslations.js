export function instanceOfAvailableTranslations(value) {
    return true;
}
export function AvailableTranslationsFromJSON(json) {
    return AvailableTranslationsFromJSONTyped(json, false);
}
export function AvailableTranslationsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fi': json['fi'] == null ? undefined : json['fi'],
        'en': json['en'] == null ? undefined : json['en'],
        'sv': json['sv'] == null ? undefined : json['sv'],
    };
}
export function AvailableTranslationsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'fi': value['fi'],
        'en': value['en'],
        'sv': value['sv'],
    };
}
//# sourceMappingURL=AvailableTranslations.js.map