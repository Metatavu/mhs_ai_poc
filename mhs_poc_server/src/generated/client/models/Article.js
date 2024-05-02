import { AvailableTranslationsFromJSON, AvailableTranslationsToJSON, } from './AvailableTranslations';
import { FormattedTextFromJSON, FormattedTextToJSON, } from './FormattedText';
import { LangcodeFromJSON, LangcodeToJSON, } from './Langcode';
import { MainImageFromJSON, MainImageToJSON, } from './MainImage';
export function instanceOfArticle(value) {
    return true;
}
export function ArticleFromJSON(json) {
    return ArticleFromJSONTyped(json, false);
}
export function ArticleFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'hasTranslation': json['hasTranslation'] == null ? undefined : AvailableTranslationsFromJSON(json['hasTranslation']),
        'summary': json['summary'] == null ? undefined : FormattedTextFromJSON(json['summary']),
        'image': json['image'] == null ? undefined : MainImageFromJSON(json['image']),
        'paragraphs': json['paragraphs'] == null ? undefined : json['paragraphs'],
        'langcode': json['langcode'] == null ? undefined : LangcodeFromJSON(json['langcode']),
        'url': json['url'] == null ? undefined : json['url'],
    };
}
export function ArticleToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'title': value['title'],
        'hasTranslation': AvailableTranslationsToJSON(value['hasTranslation']),
        'summary': FormattedTextToJSON(value['summary']),
        'image': MainImageToJSON(value['image']),
        'paragraphs': value['paragraphs'],
        'langcode': LangcodeToJSON(value['langcode']),
        'url': value['url'],
    };
}
//# sourceMappingURL=Article.js.map