export function instanceOfVideo(value) {
    return true;
}
export function VideoFromJSON(json) {
    return VideoFromJSONTyped(json, false);
}
export function VideoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'url': json['url'] == null ? undefined : json['url'],
    };
}
export function VideoToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'url': value['url'],
    };
}
//# sourceMappingURL=Video.js.map