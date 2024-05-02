export function instanceOfArticlesGet500Response(value) {
    return true;
}
export function ArticlesGet500ResponseFromJSON(json) {
    return ArticlesGet500ResponseFromJSONTyped(json, false);
}
export function ArticlesGet500ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': json['error'] == null ? undefined : json['error'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}
export function ArticlesGet500ResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'error': value['error'],
        'message': value['message'],
    };
}
//# sourceMappingURL=ArticlesGet500Response.js.map