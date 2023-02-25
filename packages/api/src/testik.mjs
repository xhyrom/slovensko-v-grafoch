import { writeFileSync, readFileSync } from "node:fs";

let $currentGender = -1;
const getGender = () => {
    if ($currentGender > 1) $currentGender = -1;

    $currentGender++;
    return $currentGender;
};

let $currentElement = -1;
const getElement = () => {
    $currentElement++;

    if ($currentElement < 3) return 0;
    if ($currentElement < 6) return 1;
    if ($currentElement < 9) return 2;

    $currentElement = -1;
    return getElement();
};

let $currentRegion = 0;
let $currentRegionReturn = 0;
const getRegion = (max) => {
    $currentRegion++;

    if ($currentRegion > max) {
        $currentRegion = 0;
        $currentRegionReturn++;
    }

    return $currentRegionReturn;
};

const res = await /* @ts-expect-error */ (
    await fetch(
        "https://data.statistics.sk/api/SendReport.php?cubeName=pr3108rr&lang=sk&fileType=json"
    )
).json();
//const res = JSON.parse(readFileSync("data.json", "utf-8"));

const years = Object.entries(res.dimension.pr3108rr_rok.category.index).reduce(
    (acc, [key, value]) => {
        acc[value] = key;
        return acc;
    },
    {}
);

const ukazovatel = Object.entries(
    res.dimension.pr3108rr_ukaz.category.index
).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

const pohlavie = Object.entries(
    res.dimension.pr3108rr_dim1.category.index
).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

const nuts14 = Object.entries(res.dimension.nuts14.category.index).reduce(
    (acc, [key, value]) => {
        acc[value] = key;
        return acc;
    },
    {}
);

const into = Object.keys(ukazovatel).length * Object.keys(pohlavie).length;
const chunks = [];

const perRegion = into * Object.keys(years).length;

let x = 0;
for (let i = 0; i < res.value.length; i += perRegion) {
    for (let j = 0; j < perRegion; j += into) {
        chunks.push(
            res.value.slice(i + j, i + j + into).map((item) => {
                return {
                    value: item,
                    year: years[x],
                    gender: pohlavie[getGender()],
                    ukazovatel: ukazovatel[getElement()],
                    region: nuts14[getRegion(perRegion)],
                };
            })
        );

        x++;
    }

    x = 0;
}

writeFileSync("data.json", JSON.stringify(chunks, null, 4));

export {};
