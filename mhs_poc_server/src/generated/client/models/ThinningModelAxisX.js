export const ThinningModelAxisXTypeEnum = {
    Hdom: 'hdom',
    Ba: 'BA'
};
export function instanceOfThinningModelAxisX(value) {
    return true;
}
export function ThinningModelAxisXFromJSON(json) {
    return ThinningModelAxisXFromJSONTyped(json, false);
}
export function ThinningModelAxisXFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'type': json['type'] == null ? undefined : json['type'],
        'unit': json['unit'] == null ? undefined : json['unit'],
    };
}
export function ThinningModelAxisXToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'type': value['type'],
        'unit': value['unit'],
    };
}
//# sourceMappingURL=ThinningModelAxisX.js.map