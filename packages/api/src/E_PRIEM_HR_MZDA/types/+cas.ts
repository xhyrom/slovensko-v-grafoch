import { parseStringPromise } from "xml2js";
import { betterMeasurement } from "../../utils.js";
import {
    SK_VALUES,
    NP3103RR_UKAZOVATEL_VALUES,
    POHLAVIE_VALUES,
} from "../constants.js";

let cache: any[] | null = null;
let cachedAt: number | null = null;

export default async () => {
    if (cache && cachedAt && Date.now() - cachedAt < 1000 * 60 * 60 * 5) {
        return cache;
    }

    const res = await (
        await fetch(
            "https://data.statistics.sk/api/v2/dataset/np3103rr/all/all/all/all?lang=sk&type=xml"
        )
    ).text();

    const final = await parseStringPromise(res);
    cache = betterMeasurement(final.dataset.measurement)
        .map((item) => ({
            value: item.value,
            year: parseInt(item.np3103rr_rok),
            region: SK_VALUES.get(item.nuts13),
            gender: POHLAVIE_VALUES.get(item.np3103rr_dim1),
            indicator: NP3103RR_UKAZOVATEL_VALUES.get(item.np3103rr_ukaz),
        }))
        .sort((a, b) => a.year - b.year);
    cachedAt = Date.now();

    return cache;
};
