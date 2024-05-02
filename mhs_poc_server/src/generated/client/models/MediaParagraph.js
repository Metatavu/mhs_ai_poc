import { AvailableTranslationsFromJSON, AvailableTranslationsToJSON, } from './AvailableTranslations';
import { LangcodeFromJSON, LangcodeToJSON, } from './Langcode';
export function instanceOfMediaParagraph(value) {
    if (!('type' in value))
        return false;
    return true;
}
export function MediaParagraphFromJSON(json) {
    return MediaParagraphFromJSONTyped(json, false);
}
export function MediaParagraphFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'],
        'hasTranslation': json['hasTranslation'] == null ? undefined : AvailableTranslationsFromJSON(json['hasTranslation']),
        'langcode': json['langcode'] == null ? undefined : LangcodeFromJSON(json['langcode']),
        'cropPortrait': json['cropPortrait'] == null ? undefined : json['cropPortrait'],
        'caption': json['caption'] == null ? undefined : json['caption'],
        'media': json['media'] == null ? undefined : json['media'],
    };
}
export function MediaParagraphToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
        'hasTranslation': AvailableTranslationsToJSON(value['hasTranslation']),
        'langcode': LangcodeToJSON(value['langcode']),
        'cropPortrait': value['cropPortrait'],
        'caption': value['caption'],
        'media': value['media'],
    };
}
//# sourceMappingURL=MediaParagraph.js.map