import { AvailableTranslationsFromJSON, AvailableTranslationsToJSON, } from './AvailableTranslations';
import { FormattedTextFromJSON, FormattedTextToJSON, } from './FormattedText';
import { LangcodeFromJSON, LangcodeToJSON, } from './Langcode';
export function instanceOfTablesIdGet200ResponseInner(value) {
    return true;
}
export function TablesIdGet200ResponseInnerFromJSON(json) {
    return TablesIdGet200ResponseInnerFromJSONTyped(json, false);
}
export function TablesIdGet200ResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'footnotes': json['footnotes'] == null ? undefined : FormattedTextFromJSON(json['footnotes']),
        'id': json['id'] == null ? undefined : json['id'],
        'hasTranslation': json['hasTranslation'] == null ? undefined : AvailableTranslationsFromJSON(json['hasTranslation']),
        'langcode': json['langcode'] == null ? undefined : LangcodeFromJSON(json['langcode']),
        'table': json['table'] == null ? undefined : FormattedTextFromJSON(json['table']),
        'title': json['title'] == null ? undefined : json['title'],
    };
}
export function TablesIdGet200ResponseInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'footnotes': FormattedTextToJSON(value['footnotes']),
        'id': value['id'],
        'hasTranslation': AvailableTranslationsToJSON(value['hasTranslation']),
        'langcode': LangcodeToJSON(value['langcode']),
        'table': FormattedTextToJSON(value['table']),
        'title': value['title'],
    };
}
//# sourceMappingURL=TablesIdGet200ResponseInner.js.map