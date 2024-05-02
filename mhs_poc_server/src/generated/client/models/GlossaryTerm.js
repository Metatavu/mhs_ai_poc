import { AvailableTranslationsFromJSON, AvailableTranslationsToJSON, } from './AvailableTranslations';
import { FormattedTextFromJSON, FormattedTextToJSON, } from './FormattedText';
import { LangcodeFromJSON, LangcodeToJSON, } from './Langcode';
import { MainImageFromJSON, MainImageToJSON, } from './MainImage';
export function instanceOfGlossaryTerm(value) {
    return true;
}
export function GlossaryTermFromJSON(json) {
    return GlossaryTermFromJSONTyped(json, false);
}
export function GlossaryTermFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'hasTranslation': json['hasTranslation'] == null ? undefined : AvailableTranslationsFromJSON(json['hasTranslation']),
        'summary': json['summary'] == null ? undefined : FormattedTextFromJSON(json['summary']),
        'image': json['image'] == null ? undefined : MainImageFromJSON(json['image']),
        'paragraphs': json['paragraphs'] == null ? undefined : json['paragraphs'],
        'langcode': json['langcode'] == null ? undefined : LangcodeFromJSON(json['langcode']),
        'term': json['term'] == null ? undefined : json['term'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}
export function GlossaryTermToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'hasTranslation': AvailableTranslationsToJSON(value['hasTranslation']),
        'summary': FormattedTextToJSON(value['summary']),
        'image': MainImageToJSON(value['image']),
        'paragraphs': value['paragraphs'],
        'langcode': LangcodeToJSON(value['langcode']),
        'term': value['term'],
        'url': value['url'],
    };
}
//# sourceMappingURL=GlossaryTerm.js.map