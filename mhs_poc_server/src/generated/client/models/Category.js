import { AvailableTranslationsFromJSON, AvailableTranslationsToJSON, } from './AvailableTranslations';
import { FormattedTextFromJSON, FormattedTextToJSON, } from './FormattedText';
import { LangcodeFromJSON, LangcodeToJSON, } from './Langcode';
export function instanceOfCategory(value) {
    return true;
}
export function CategoryFromJSON(json) {
    return CategoryFromJSONTyped(json, false);
}
export function CategoryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'hasTranslation': json['hasTranslation'] == null ? undefined : AvailableTranslationsFromJSON(json['hasTranslation']),
        'description': json['description'] == null ? undefined : FormattedTextFromJSON(json['description']),
        'langcode': json['langcode'] == null ? undefined : LangcodeFromJSON(json['langcode']),
        'url': json['url'] == null ? undefined : json['url'],
    };
}
export function CategoryToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'hasTranslation': AvailableTranslationsToJSON(value['hasTranslation']),
        'description': FormattedTextToJSON(value['description']),
        'langcode': LangcodeToJSON(value['langcode']),
        'url': value['url'],
    };
}
//# sourceMappingURL=Category.js.map