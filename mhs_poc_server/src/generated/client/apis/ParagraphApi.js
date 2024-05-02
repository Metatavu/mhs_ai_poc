import * as runtime from '../runtime';
import { ParagraphsIdGet200ResponseInnerFromJSON, } from '../models/index';
export class ParagraphApi extends runtime.BaseAPI {
    async paragraphsIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling paragraphsIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/paragraphs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ParagraphsIdGet200ResponseInnerFromJSON));
    }
    async paragraphsIdGet(requestParameters, initOverrides) {
        const response = await this.paragraphsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const ParagraphsIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=ParagraphApi.js.map