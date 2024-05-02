export function instanceOfImageSourcesMd(value) {
    return true;
}
export function ImageSourcesMdFromJSON(json) {
    return ImageSourcesMdFromJSONTyped(json, false);
}
export function ImageSourcesMdFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'url': json['url'] == null ? undefined : json['url'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
    };
}
export function ImageSourcesMdToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'url': value['url'],
        'width': value['width'],
        'height': value['height'],
    };
}
//# sourceMappingURL=ImageSourcesMd.js.map