import { AvailableTranslationsFromJSON, AvailableTranslationsToJSON, } from './AvailableTranslations';
import { LangcodeFromJSON, LangcodeToJSON, } from './Langcode';
export const ParagraphTypeEnum = {
    FormattedText: 'formatted_text',
    Media: 'media',
    Table: 'table'
};
export function instanceOfParagraph(value) {
    if (!('type' in value))
        return false;
    return true;
}
export function ParagraphFromJSON(json) {
    return ParagraphFromJSONTyped(json, false);
}
export function ParagraphFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'],
        'hasTranslation': json['hasTranslation'] == null ? undefined : AvailableTranslationsFromJSON(json['hasTranslation']),
        'langcode': json['langcode'] == null ? undefined : LangcodeFromJSON(json['langcode']),
    };
}
export function ParagraphToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
        'hasTranslation': AvailableTranslationsToJSON(value['hasTranslation']),
        'langcode': LangcodeToJSON(value['langcode']),
    };
}
//# sourceMappingURL=Paragraph.js.map