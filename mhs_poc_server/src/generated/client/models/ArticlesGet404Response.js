export function instanceOfArticlesGet404Response(value) {
    return true;
}
export function ArticlesGet404ResponseFromJSON(json) {
    return ArticlesGet404ResponseFromJSONTyped(json, false);
}
export function ArticlesGet404ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': json['error'] == null ? undefined : json['error'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}
export function ArticlesGet404ResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'error': value['error'],
        'message': value['message'],
    };
}
//# sourceMappingURL=ArticlesGet404Response.js.map