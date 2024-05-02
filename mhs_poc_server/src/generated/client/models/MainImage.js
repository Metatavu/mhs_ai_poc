export function instanceOfMainImage(value) {
    return true;
}
export function MainImageFromJSON(json) {
    return MainImageFromJSONTyped(json, false);
}
export function MainImageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'caption': json['caption'] == null ? undefined : json['caption'],
        'media': json['media'] == null ? undefined : json['media'],
    };
}
export function MainImageToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'caption': value['caption'],
        'media': value['media'],
    };
}
//# sourceMappingURL=MainImage.js.map