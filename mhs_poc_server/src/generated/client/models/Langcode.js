export const Langcode = {
    En: 'en',
    Fi: 'fi',
    Sv: 'sv'
};
export function instanceOfLangcode(value) {
    return Object.values(Langcode).includes(value);
}
export function LangcodeFromJSON(json) {
    return LangcodeFromJSONTyped(json, false);
}
export function LangcodeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function LangcodeToJSON(value) {
    return value;
}
//# sourceMappingURL=Langcode.js.map