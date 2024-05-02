export function instanceOfThinningModelLegalLimitInner(value) {
    return true;
}
export function ThinningModelLegalLimitInnerFromJSON(json) {
    return ThinningModelLegalLimitInnerFromJSONTyped(json, false);
}
export function ThinningModelLegalLimitInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'] == null ? undefined : json['data'],
    };
}
export function ThinningModelLegalLimitInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'],
    };
}
//# sourceMappingURL=ThinningModelLegalLimitInner.js.map