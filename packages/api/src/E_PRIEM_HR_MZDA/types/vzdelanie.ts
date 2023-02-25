import { parseStringPromise } from "xml2js";
import { betterMeasurement } from "../../utils.js";
import { SK_VALUES, VZDELANIE_VALUES } from "../constants.js";

let cache: any[] | null = null;
let cachedAt: number | null = null;

export default async () => {
    if (cache && cachedAt && Date.now() - cachedAt < 1000 * 60 * 60 * 5) {
        return cache;
    }

    const res = await (
        await fetch(
            "https://data.statistics.sk/api/v2/dataset/np3102rr/all/all/all/all?lang=sk&type=xml"
        )
    ).text();

    const final = await parseStringPromise(res);
    cache = betterMeasurement(final.dataset.measurement)
        .map((item) => ({
            value: item.value,
            year: parseInt(item.np3102rr_rok),
            region: SK_VALUES.get(item.nuts13),
            education: VZDELANIE_VALUES.get(item.np3102rr_dim1),
        }))
        .sort((a, b) => a.year - b.year);
    cachedAt = Date.now();

    return cache;
};
