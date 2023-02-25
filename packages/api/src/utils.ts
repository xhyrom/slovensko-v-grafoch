export const betterMeasurement = (measurement: any) => {
    const result = [];

    for (const object of measurement) {
        const params = {} as any;

        for (const param of object.param) {
            params[param.$.code] = param._;
        }

        result.push({
            value: parseInt(object.value[0]),
            ...params,
        });
    }

    return result;
};
