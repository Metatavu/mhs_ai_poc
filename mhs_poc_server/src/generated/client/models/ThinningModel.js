import { ThinningModelAxisFromJSON, ThinningModelAxisToJSON, } from './ThinningModelAxis';
import { ThinningModelLegalLimitInnerFromJSON, ThinningModelLegalLimitInnerToJSON, } from './ThinningModelLegalLimitInner';
import { ThinningModelThinningLimitInnerFromJSON, ThinningModelThinningLimitInnerToJSON, } from './ThinningModelThinningLimitInner';
export function instanceOfThinningModel(value) {
    return true;
}
export function ThinningModelFromJSON(json) {
    return ThinningModelFromJSONTyped(json, false);
}
export function ThinningModelFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'axis': json['axis'] == null ? undefined : ThinningModelAxisFromJSON(json['axis']),
        'id': json['id'] == null ? undefined : json['id'],
        'legalLimit': json['legalLimit'] == null ? undefined : (json['legalLimit'].map(ThinningModelLegalLimitInnerFromJSON)),
        'thinningLimit': json['thinningLimit'] == null ? undefined : (json['thinningLimit'].map(ThinningModelThinningLimitInnerFromJSON)),
        'thinningRecommendation': json['thinningRecommendation'] == null ? undefined : (json['thinningRecommendation'].map(item => item)),
    };
}
export function ThinningModelToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'axis': ThinningModelAxisToJSON(value['axis']),
        'id': value['id'],
        'legalLimit': value['legalLimit'] == null ? undefined : (value['legalLimit'].map(ThinningModelLegalLimitInnerToJSON)),
        'thinningLimit': value['thinningLimit'] == null ? undefined : (value['thinningLimit'].map(ThinningModelThinningLimitInnerToJSON)),
        'thinningRecommendation': value['thinningRecommendation'] == null ? undefined : (value['thinningRecommendation'].map(item => item)),
    };
}
//# sourceMappingURL=ThinningModel.js.map