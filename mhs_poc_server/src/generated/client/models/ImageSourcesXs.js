export function instanceOfImageSourcesXs(value) {
    return true;
}
export function ImageSourcesXsFromJSON(json) {
    return ImageSourcesXsFromJSONTyped(json, false);
}
export function ImageSourcesXsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'url': json['url'] == null ? undefined : json['url'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
    };
}
export function ImageSourcesXsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'url': value['url'],
        'width': value['width'],
        'height': value['height'],
    };
}
//# sourceMappingURL=ImageSourcesXs.js.map