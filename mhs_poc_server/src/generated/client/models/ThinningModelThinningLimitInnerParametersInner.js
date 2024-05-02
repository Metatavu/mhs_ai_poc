export function instanceOfThinningModelThinningLimitInnerParametersInner(value) {
    return true;
}
export function ThinningModelThinningLimitInnerParametersInnerFromJSON(json) {
    return ThinningModelThinningLimitInnerParametersInnerFromJSONTyped(json, false);
}
export function ThinningModelThinningLimitInnerParametersInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}
export function ThinningModelThinningLimitInnerParametersInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'value': value['value'],
    };
}
//# sourceMappingURL=ThinningModelThinningLimitInnerParametersInner.js.map