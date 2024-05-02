import { FormattedTextParagraphFromJSONTyped, FormattedTextParagraphToJSON, } from './FormattedTextParagraph';
import { MediaParagraphFromJSONTyped, MediaParagraphToJSON, } from './MediaParagraph';
import { TableParagraphFromJSONTyped, TableParagraphToJSON, } from './TableParagraph';
export function ParagraphsIdGet200ResponseInnerFromJSON(json) {
    return ParagraphsIdGet200ResponseInnerFromJSONTyped(json, false);
}
export function ParagraphsIdGet200ResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'formatted_text':
            return Object.assign({}, FormattedTextParagraphFromJSONTyped(json, true), { type: 'formatted_text' });
        case 'media':
            return Object.assign({}, MediaParagraphFromJSONTyped(json, true), { type: 'media' });
        case 'table':
            return Object.assign({}, TableParagraphFromJSONTyped(json, true), { type: 'table' });
        default:
            throw new Error(`No variant of ParagraphsIdGet200ResponseInner exists with 'type=${json['type']}'`);
    }
}
export function ParagraphsIdGet200ResponseInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'formatted_text':
            return FormattedTextParagraphToJSON(value);
        case 'media':
            return MediaParagraphToJSON(value);
        case 'table':
            return TableParagraphToJSON(value);
        default:
            throw new Error(`No variant of ParagraphsIdGet200ResponseInner exists with 'type=${value['type']}'`);
    }
}
//# sourceMappingURL=ParagraphsIdGet200ResponseInner.js.map