import { ImageMediaAllOfImageFromJSON, ImageMediaAllOfImageToJSON, } from './ImageMediaAllOfImage';
export const ImageMediaTypeEnum = {
    Image: 'image'
};
export function instanceOfImageMedia(value) {
    return true;
}
export function ImageMediaFromJSON(json) {
    return ImageMediaFromJSONTyped(json, false);
}
export function ImageMediaFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : json['type'],
        'image': json['image'] == null ? undefined : ImageMediaAllOfImageFromJSON(json['image']),
    };
}
export function ImageMediaToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
        'image': ImageMediaAllOfImageToJSON(value['image']),
    };
}
//# sourceMappingURL=ImageMedia.js.map