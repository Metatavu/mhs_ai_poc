import { VideoFromJSON, VideoToJSON, } from './Video';
export const RemoteVideoMediaTypeEnum = {
    RemoteVideo: 'remote_video'
};
export function instanceOfRemoteVideoMedia(value) {
    return true;
}
export function RemoteVideoMediaFromJSON(json) {
    return RemoteVideoMediaFromJSONTyped(json, false);
}
export function RemoteVideoMediaFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'type': json['type'] == null ? undefined : json['type'],
        'video': json['video'] == null ? undefined : VideoFromJSON(json['video']),
    };
}
export function RemoteVideoMediaToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'type': value['type'],
        'video': VideoToJSON(value['video']),
    };
}
//# sourceMappingURL=RemoteVideoMedia.js.map