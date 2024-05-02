import { LangcodeFromJSON, LangcodeToJSON, } from './Langcode';
export function instanceOfReference(value) {
    return true;
}
export function ReferenceFromJSON(json) {
    return ReferenceFromJSONTyped(json, false);
}
export function ReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'text': json['text'] == null ? undefined : json['text'],
        'url': json['url'] == null ? undefined : json['url'],
        'langcode': json['langcode'] == null ? undefined : LangcodeFromJSON(json['langcode']),
    };
}
export function ReferenceToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'text': value['text'],
        'url': value['url'],
        'langcode': LangcodeToJSON(value['langcode']),
    };
}
//# sourceMappingURL=Reference.js.map