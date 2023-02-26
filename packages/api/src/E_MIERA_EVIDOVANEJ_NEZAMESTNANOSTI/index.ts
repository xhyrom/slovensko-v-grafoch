// @ts-expect-error no typings
import JSONStat from "jsonstat-toolkit";
import { SK0 } from "../constants.js";

let cache: any[] | null = null;
let cachedAt: number | null = null;

let cacheId: any[] | null = null;
let cachedIdAt: number | null = null;

const get = async () => {
    if (cache && cachedAt && Date.now() - cachedAt < 1000 * 60 * 60 * 5) {
        return cache;
    }

    const j = await JSONStat(
        "https://data.statistics.sk/api/SendReport.php?cubeName=pr3108rr&lang=sk&fileType=json"
    );

    cache = j
        .Dataset(0)
        .toTable({ type: "arrobj" })
        .map((item: any) => ({
            value: item.value,
            year: parseInt(item.pr3108rr_rok),
            indicator: item.pr3108rr_ukaz,
            gender: item.pr3108rr_dim1,
            region: item.nuts14,
        }))
        .sort((a: any, b: any) => a.year - b.year);
    cachedAt = Date.now();

    return cache!;
};

const get_ids = async () => {
    if (cacheId && cachedIdAt && Date.now() - cachedIdAt < 1000 * 60 * 60 * 5) {
        return cacheId;
    }

    const j = await JSONStat(
        "https://data.statistics.sk/api/SendReport.php?cubeName=pr3108rr&lang=sk&fileType=json"
    );

    cacheId = j
        .Dataset(0)
        .toTable({ type: "arrobj", content: "id" })
        .map((item: any) => ({
            value: item.value,
            year: parseInt(item.pr3108rr_rok),
            indicator: item.pr3108rr_ukaz,
            gender: item.pr3108rr_dim1,
            region: item.nuts14,
        }))
        .sort((a: any, b: any) => a.year - b.year);
    cachedIdAt = Date.now();

    return cache!;
};

const get_together = async () =>
    (await get())?.filter(
        (item) => item.region === SK0 && item.gender === "Spolu"
    );

const get_ids_together = async () =>
    (await get_ids())?.filter(
        (item) => item.region === "SK0" && item.gender === "3"
    );

export default {
    get,
    get_ids,
    get_together,
    get_ids_together,
};
