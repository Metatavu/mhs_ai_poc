import { ImageSourcesLgFromJSON, ImageSourcesLgToJSON, } from './ImageSourcesLg';
import { ImageSourcesMdFromJSON, ImageSourcesMdToJSON, } from './ImageSourcesMd';
import { ImageSourcesOriginalFromJSON, ImageSourcesOriginalToJSON, } from './ImageSourcesOriginal';
import { ImageSourcesSmFromJSON, ImageSourcesSmToJSON, } from './ImageSourcesSm';
import { ImageSourcesXlFromJSON, ImageSourcesXlToJSON, } from './ImageSourcesXl';
import { ImageSourcesXsFromJSON, ImageSourcesXsToJSON, } from './ImageSourcesXs';
import { ImageSourcesXxlFromJSON, ImageSourcesXxlToJSON, } from './ImageSourcesXxl';
export function instanceOfImageSources(value) {
    return true;
}
export function ImageSourcesFromJSON(json) {
    return ImageSourcesFromJSONTyped(json, false);
}
export function ImageSourcesFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'xs': json['xs'] == null ? undefined : ImageSourcesXsFromJSON(json['xs']),
        'sm': json['sm'] == null ? undefined : ImageSourcesSmFromJSON(json['sm']),
        'md': json['md'] == null ? undefined : ImageSourcesMdFromJSON(json['md']),
        'lg': json['lg'] == null ? undefined : ImageSourcesLgFromJSON(json['lg']),
        'xl': json['xl'] == null ? undefined : ImageSourcesXlFromJSON(json['xl']),
        'xxl': json['xxl'] == null ? undefined : ImageSourcesXxlFromJSON(json['xxl']),
        'original': json['original'] == null ? undefined : ImageSourcesOriginalFromJSON(json['original']),
    };
}
export function ImageSourcesToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'xs': ImageSourcesXsToJSON(value['xs']),
        'sm': ImageSourcesSmToJSON(value['sm']),
        'md': ImageSourcesMdToJSON(value['md']),
        'lg': ImageSourcesLgToJSON(value['lg']),
        'xl': ImageSourcesXlToJSON(value['xl']),
        'xxl': ImageSourcesXxlToJSON(value['xxl']),
        'original': ImageSourcesOriginalToJSON(value['original']),
    };
}
//# sourceMappingURL=ImageSources.js.map