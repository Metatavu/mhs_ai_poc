import { AvailableTranslationsFromJSON, AvailableTranslationsToJSON, } from './AvailableTranslations';
import { FormattedTextFromJSON, FormattedTextToJSON, } from './FormattedText';
import { LangcodeFromJSON, LangcodeToJSON, } from './Langcode';
export const FormattedTextParagraphTypeEnum = {
    FormattedText: 'formatted_text',
    Media: 'media',
    Table: 'table'
};
export function instanceOfFormattedTextParagraph(value) {
    if (!('type' in value))
        return false;
    return true;
}
export function FormattedTextParagraphFromJSON(json) {
    return FormattedTextParagraphFromJSONTyped(json, false);
}
export function FormattedTextParagraphFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'],
        'hasTranslation': json['hasTranslation'] == null ? undefined : AvailableTranslationsFromJSON(json['hasTranslation']),
        'langcode': json['langcode'] == null ? undefined : LangcodeFromJSON(json['langcode']),
        'title': json['title'] == null ? undefined : json['title'],
        'text': json['text'] == null ? undefined : FormattedTextFromJSON(json['text']),
    };
}
export function FormattedTextParagraphToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
        'hasTranslation': AvailableTranslationsToJSON(value['hasTranslation']),
        'langcode': LangcodeToJSON(value['langcode']),
        'title': value['title'],
        'text': FormattedTextToJSON(value['text']),
    };
}
//# sourceMappingURL=FormattedTextParagraph.js.map