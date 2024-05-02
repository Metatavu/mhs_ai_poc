import * as runtime from '../runtime';
import { ThinningModelFromJSON, } from '../models/index';
export class ThinningModelApi extends runtime.BaseAPI {
    async thinningModelsSearchGetRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['forestInformationStandard'] != null) {
            queryParameters['forestInformationStandard'] = requestParameters['forestInformationStandard'];
        }
        if (requestParameters['forestActAreaType'] != null) {
            queryParameters['forestActAreaType'] = requestParameters['forestActAreaType'];
        }
        if (requestParameters['mainTreeSpecies'] != null) {
            queryParameters['mainTreeSpecies'] = requestParameters['mainTreeSpecies'];
        }
        if (requestParameters['fertilityClassType'] != null) {
            queryParameters['fertilityClassType'] = requestParameters['fertilityClassType'];
        }
        if (requestParameters['soilType'] != null) {
            queryParameters['soilType'] = requestParameters['soilType'];
        }
        if (requestParameters['npv'] != null) {
            queryParameters['npv'] = requestParameters['npv'];
        }
        if (requestParameters['modelType'] != null) {
            queryParameters['modelType'] = requestParameters['modelType'];
        }
        if (requestParameters['mixedSpeciesModel'] != null) {
            queryParameters['mixedSpeciesModel'] = requestParameters['mixedSpeciesModel'];
        }
        if (requestParameters['xAxis'] != null) {
            queryParameters['xAxis'] = requestParameters['xAxis'];
        }
        if (requestParameters['yAxis'] != null) {
            queryParameters['yAxis'] = requestParameters['yAxis'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/thinning-models/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ThinningModelFromJSON));
    }
    async thinningModelsSearchGet(requestParameters = {}, initOverrides) {
        const response = await this.thinningModelsSearchGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const ThinningModelsSearchGetForestActAreaTypeEnum = {
    NorthernFinland: 'Northern_Finland',
    CentralFinland: 'Central_Finland',
    SouthernFinland: 'Southern_Finland'
};
export const ThinningModelsSearchGetMainTreeSpeciesEnum = {
    Pine: 'pine',
    Spruce: 'spruce',
    SilverBirch: 'silver_birch',
    DownyBirch: 'downy_birch'
};
export const ThinningModelsSearchGetFertilityClassTypeEnum = {
    _2: 'Site_2',
    _3: 'Site_3',
    _4: 'Site_4',
    _5: 'Site_5'
};
export const ThinningModelsSearchGetSoilTypeEnum = {
    MineralSoil: 'Mineral_soil',
    OrganicSoil: 'Organic_soil'
};
export const ThinningModelsSearchGetNpvEnum = {
    _15: 'NPV_15',
    _30: 'NPV_30',
    _50: 'NPV_50'
};
export const ThinningModelsSearchGetModelTypeEnum = {
    ThinFromBelow: 'Thin_from_below',
    ThinFromAbove: 'Thin_from_above',
    MixedSpecies: 'Mixed_species',
    ExtendedRotation: 'Extended_rotation',
    NoDitchCleaning: 'No_ditch_cleaning'
};
export const ThinningModelsSearchGetMixedSpeciesModelEnum = {
    PineAndMixedBroadleaves: 'Pine_and_mixed_broadleaves',
    SpruceAndMixedBroadleaves: 'Spruce_and_mixed_broadleaves',
    SpruceAndMixedPine: 'Spruce_and_mixed_pine'
};
export const ThinningModelsSearchGetXAxisEnum = {
    Hdom: 'hdom',
    Hg: 'hg'
};
export const ThinningModelsSearchGetYAxisEnum = {
    Ba: 'BA',
    N: 'N'
};
//# sourceMappingURL=ThinningModelApi.js.map