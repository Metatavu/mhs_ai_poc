export function instanceOfCategoriesGet200ResponseInner(value) {
    return true;
}
export function CategoriesGet200ResponseInnerFromJSON(json) {
    return CategoriesGet200ResponseInnerFromJSONTyped(json, false);
}
export function CategoriesGet200ResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
    };
}
export function CategoriesGet200ResponseInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
    };
}
//# sourceMappingURL=CategoriesGet200ResponseInner.js.map