export function instanceOfImageSourcesOriginal(value) {
    return true;
}
export function ImageSourcesOriginalFromJSON(json) {
    return ImageSourcesOriginalFromJSONTyped(json, false);
}
export function ImageSourcesOriginalFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'url': json['url'] == null ? undefined : json['url'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
    };
}
export function ImageSourcesOriginalToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'url': value['url'],
        'width': value['width'],
        'height': value['height'],
    };
}
//# sourceMappingURL=ImageSourcesOriginal.js.map