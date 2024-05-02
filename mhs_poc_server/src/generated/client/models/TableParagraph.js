import { AvailableTranslationsFromJSON, AvailableTranslationsToJSON, } from './AvailableTranslations';
import { LangcodeFromJSON, LangcodeToJSON, } from './Langcode';
export function instanceOfTableParagraph(value) {
    if (!('type' in value))
        return false;
    return true;
}
export function TableParagraphFromJSON(json) {
    return TableParagraphFromJSONTyped(json, false);
}
export function TableParagraphFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'],
        'hasTranslation': json['hasTranslation'] == null ? undefined : AvailableTranslationsFromJSON(json['hasTranslation']),
        'langcode': json['langcode'] == null ? undefined : LangcodeFromJSON(json['langcode']),
        'caption': json['caption'] == null ? undefined : json['caption'],
        'table': json['table'] == null ? undefined : json['table'],
    };
}
export function TableParagraphToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
        'hasTranslation': AvailableTranslationsToJSON(value['hasTranslation']),
        'langcode': LangcodeToJSON(value['langcode']),
        'caption': value['caption'],
        'table': value['table'],
    };
}
//# sourceMappingURL=TableParagraph.js.map