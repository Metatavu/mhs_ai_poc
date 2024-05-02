export function instanceOfOperationDescriptionsGet200ResponseInner(value) {
    return true;
}
export function OperationDescriptionsGet200ResponseInnerFromJSON(json) {
    return OperationDescriptionsGet200ResponseInnerFromJSONTyped(json, false);
}
export function OperationDescriptionsGet200ResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'title': json['title'] == null ? undefined : json['title'],
    };
}
export function OperationDescriptionsGet200ResponseInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'title': value['title'],
    };
}
//# sourceMappingURL=OperationDescriptionsGet200ResponseInner.js.map