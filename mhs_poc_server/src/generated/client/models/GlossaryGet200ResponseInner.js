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
//# sourceMappingURL=GlossaryGet200ResponseInner.js.map