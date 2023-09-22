export function getRequestParams(params: any) {
    return Object.entries(params).reduce((accumulator: any, [key, value]: any) => {
        const isBooleanValue = typeof value === 'boolean';
        const isZeroNumber = value === 0;
        const isEmptyArray = !!value && Array.isArray(value) && value.length === 0;
        if (Array.isArray(value) && !isEmptyArray) {
            accumulator[key] = value.join(',');
        } else if (!Array.isArray(value) && (value || isBooleanValue || isZeroNumber)) {
            accumulator[key] = value;
        }

        return accumulator;
    }, {});
}
