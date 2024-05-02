export function instanceOfImageSourcesXxl(value) {
    return true;
}
export function ImageSourcesXxlFromJSON(json) {
    return ImageSourcesXxlFromJSONTyped(json, false);
}
export function ImageSourcesXxlFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'url': json['url'] == null ? undefined : json['url'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
    };
}
export function ImageSourcesXxlToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'url': value['url'],
        'width': value['width'],
        'height': value['height'],
    };
}
//# sourceMappingURL=ImageSourcesXxl.js.map