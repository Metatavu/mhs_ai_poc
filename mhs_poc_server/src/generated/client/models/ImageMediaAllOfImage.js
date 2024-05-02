import { ImageSourcesFromJSON, ImageSourcesToJSON, } from './ImageSources';
export function instanceOfImageMediaAllOfImage(value) {
    return true;
}
export function ImageMediaAllOfImageFromJSON(json) {
    return ImageMediaAllOfImageFromJSONTyped(json, false);
}
export function ImageMediaAllOfImageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'alt': json['alt'] == null ? undefined : json['alt'],
        'sources': json['sources'] == null ? undefined : ImageSourcesFromJSON(json['sources']),
    };
}
export function ImageMediaAllOfImageToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'alt': value['alt'],
        'sources': ImageSourcesToJSON(value['sources']),
    };
}
//# sourceMappingURL=ImageMediaAllOfImage.js.map