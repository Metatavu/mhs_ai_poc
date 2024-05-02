import { ImageMediaFromJSONTyped, ImageMediaToJSON, } from './ImageMedia';
import { RemoteVideoMediaFromJSONTyped, RemoteVideoMediaToJSON, } from './RemoteVideoMedia';
export function MediaIdGet200ResponseInnerFromJSON(json) {
    return MediaIdGet200ResponseInnerFromJSONTyped(json, false);
}
export function MediaIdGet200ResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'image':
            return Object.assign({}, ImageMediaFromJSONTyped(json, true), { type: 'image' });
        case 'remote_video':
            return Object.assign({}, RemoteVideoMediaFromJSONTyped(json, true), { type: 'remote_video' });
        default:
            throw new Error(`No variant of MediaIdGet200ResponseInner exists with 'type=${json['type']}'`);
    }
}
export function MediaIdGet200ResponseInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'image':
            return ImageMediaToJSON(value);
        case 'remote_video':
            return RemoteVideoMediaToJSON(value);
        default:
            throw new Error(`No variant of MediaIdGet200ResponseInner exists with 'type=${value['type']}'`);
    }
}
//# sourceMappingURL=MediaIdGet200ResponseInner.js.map