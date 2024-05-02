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
//# sourceMappingURL=OperationDescription.js.map