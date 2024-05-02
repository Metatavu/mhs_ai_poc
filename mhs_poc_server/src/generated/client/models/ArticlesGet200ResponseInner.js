export function instanceOfArticlesGet200ResponseInner(value) {
    return true;
}
export function ArticlesGet200ResponseInnerFromJSON(json) {
    return ArticlesGet200ResponseInnerFromJSONTyped(json, false);
}
export function ArticlesGet200ResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'url': json['url'] == null ? undefined : json['url'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}
export function ArticlesGet200ResponseInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'url': value['url'],
        'title': value['title'],
    };
}
//# sourceMappingURL=ArticlesGet200ResponseInner.js.map