import * as runtime from '../runtime';
import { MediaIdGet200ResponseInnerFromJSON, } from '../models/index';
export class MediaApi extends runtime.BaseAPI {
    async mediaIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling mediaIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/media/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MediaIdGet200ResponseInnerFromJSON));
    }
    async mediaIdGet(requestParameters, initOverrides) {
        const response = await this.mediaIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const MediaIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=MediaApi.js.map