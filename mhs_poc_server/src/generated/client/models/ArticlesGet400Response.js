export function instanceOfArticlesGet400Response(value) {
    return true;
}
export function ArticlesGet400ResponseFromJSON(json) {
    return ArticlesGet400ResponseFromJSONTyped(json, false);
}
export function ArticlesGet400ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': json['error'] == null ? undefined : json['error'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}
export function ArticlesGet400ResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'error': value['error'],
        'message': value['message'],
    };
}
//# sourceMappingURL=ArticlesGet400Response.js.map