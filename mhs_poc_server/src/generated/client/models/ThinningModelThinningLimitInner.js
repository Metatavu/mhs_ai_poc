import { ThinningModelThinningLimitInnerParametersInnerFromJSON, ThinningModelThinningLimitInnerParametersInnerToJSON, } from './ThinningModelThinningLimitInnerParametersInner';
export function instanceOfThinningModelThinningLimitInner(value) {
    return true;
}
export function ThinningModelThinningLimitInnerFromJSON(json) {
    return ThinningModelThinningLimitInnerFromJSONTyped(json, false);
}
export function ThinningModelThinningLimitInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'] == null ? undefined : json['data'],
        '_function': json['function'] == null ? undefined : json['function'],
        'max': json['max'] == null ? undefined : json['max'],
        'min': json['min'] == null ? undefined : json['min'],
        'parameters': json['parameters'] == null ? undefined : (json['parameters'].map(ThinningModelThinningLimitInnerParametersInnerFromJSON)),
    };
}
export function ThinningModelThinningLimitInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'],
        'function': value['_function'],
        'max': value['max'],
        'min': value['min'],
        'parameters': value['parameters'] == null ? undefined : (value['parameters'].map(ThinningModelThinningLimitInnerParametersInnerToJSON)),
    };
}
//# sourceMappingURL=ThinningModelThinningLimitInner.js.map