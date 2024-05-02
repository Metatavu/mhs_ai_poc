import * as runtime from '../runtime';
import { TablesIdGet200ResponseInnerFromJSON, } from '../models/index';
export class TableApi extends runtime.BaseAPI {
    async tablesIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling tablesIdGet().');
        }
        const queryParameters = {};
        if (requestParameters['langcode'] != null) {
            queryParameters['langcode'] = requestParameters['langcode'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/tables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TablesIdGet200ResponseInnerFromJSON));
    }
    async tablesIdGet(requestParameters, initOverrides) {
        const response = await this.tablesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const TablesIdGetLangcodeEnum = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
//# sourceMappingURL=TableApi.js.map