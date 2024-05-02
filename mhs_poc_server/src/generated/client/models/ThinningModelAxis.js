import { ThinningModelAxisXFromJSON, ThinningModelAxisXToJSON, } from './ThinningModelAxisX';
export function instanceOfThinningModelAxis(value) {
    return true;
}
export function ThinningModelAxisFromJSON(json) {
    return ThinningModelAxisFromJSONTyped(json, false);
}
export function ThinningModelAxisFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'x': json['x'] == null ? undefined : ThinningModelAxisXFromJSON(json['x']),
        'y': json['y'] == null ? undefined : ThinningModelAxisXFromJSON(json['y']),
    };
}
export function ThinningModelAxisToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'x': ThinningModelAxisXToJSON(value['x']),
        'y': ThinningModelAxisXToJSON(value['y']),
    };
}
//# sourceMappingURL=ThinningModelAxis.js.map