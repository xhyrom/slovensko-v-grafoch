import { parseStringPromise } from "xml2js";
import { betterMeasurement } from "../../utils.js";
import { VEK_VALUES } from "../constants.js";
import { SK_VALUES } from "../../constants.js";

let cache: any[] | null = null;
let cachedAt: number | null = null;

export default async () => {
    if (cache && cachedAt && Date.now() - cachedAt < 1000 * 60 * 60 * 5) {
        return cache;
    }

    const res = await (
        await fetch(
            "https://data.statistics.sk/api/v2/dataset/np3101rr/all/all/all/all?lang=sk&type=xml"
        )
    ).text();

    const final = await parseStringPromise(res);
    cache = betterMeasurement(final.dataset.measurement)
        .map((item) => ({
            value: item.value,
            year: parseInt(item.np3101rr_rok),
            region: SK_VALUES.get(item.nuts13),
            age: VEK_VALUES.get(item.np3101rr_dim1),
        }))
        .sort((a, b) => a.year - b.year);
    cachedAt = Date.now();

    return cache;
};
