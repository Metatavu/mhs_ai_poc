export function instanceOfImageSourcesXl(value) {
    return true;
}
export function ImageSourcesXlFromJSON(json) {
    return ImageSourcesXlFromJSONTyped(json, false);
}
export function ImageSourcesXlFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'url': json['url'] == null ? undefined : json['url'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
    };
}
export function ImageSourcesXlToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'url': value['url'],
        'width': value['width'],
        'height': value['height'],
    };
}
//# sourceMappingURL=ImageSourcesXl.js.map