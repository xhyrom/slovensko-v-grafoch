export const ZAMESTNANIE_VALUES = new Map();
ZAMESTNANIE_VALUES.set("0", "Príslušníci ozbrojených síl");
ZAMESTNANIE_VALUES.set("1", "Zákonodarcovia, riadiaci pracovníci");
ZAMESTNANIE_VALUES.set("2", "Špecialisti");
ZAMESTNANIE_VALUES.set("3", "Technici a odborní pracovníci");
ZAMESTNANIE_VALUES.set("4", "Administratívni pracovníci");
ZAMESTNANIE_VALUES.set("5", "Pracovníci v službách a obchode");
ZAMESTNANIE_VALUES.set(
    "6",
    "Kvalifikovaní pracovníci v poľnohospodárstve, lesníctve a rybárstve"
);
ZAMESTNANIE_VALUES.set("7", "Kvalifikovaní pracovníci a remeselníci");
ZAMESTNANIE_VALUES.set("8", "Operátori a montéri strojov a zariadení");
ZAMESTNANIE_VALUES.set("9", "Pomocní a nekvalifikovaní pracovníci");
ZAMESTNANIE_VALUES.set("10", "Spolu");

export const VZDELANIE_VALUES = new Map();
VZDELANIE_VALUES.set("1", "Spolu");
VZDELANIE_VALUES.set("2", "Neuvedené");
VZDELANIE_VALUES.set("3", "Základné");
VZDELANIE_VALUES.set("4", "Učňovské (bez maturity)");
VZDELANIE_VALUES.set("5", "Stredné (bez maturity)");
VZDELANIE_VALUES.set("6", "Úplné stredné odborné (učňovské) s maturitou");
VZDELANIE_VALUES.set("7", "Úplné stredné všeobecné");
VZDELANIE_VALUES.set("8", "Úplné stredné odborné");
VZDELANIE_VALUES.set("9", "Vyššie odborné");
VZDELANIE_VALUES.set("10", "Vysokoškolské 1. stupeň");
VZDELANIE_VALUES.set("11", "Vysokoškolské 2. stupeň");
VZDELANIE_VALUES.set("12", "Vysokoškolské 3. stupeň");
VZDELANIE_VALUES.set("13", "Stredné odborné (učňovské) bez maturity");

export const VEK_VALUES = new Map();
VEK_VALUES.set("1", "Spolu");
VEK_VALUES.set("2", "do 19 rokov");
VEK_VALUES.set("3", "od 20 do 24 rokov");
VEK_VALUES.set("4", "od 25 do 29 rokov");
VEK_VALUES.set("5", "od 30 do 34 rokov");
VEK_VALUES.set("6", "od 35 do 39 rokov");
VEK_VALUES.set("7", "od 40 do 44 rokov");
VEK_VALUES.set("8", "od 45 do 49 rokov");
VEK_VALUES.set("9", "od 50 do 54 rokov");
VEK_VALUES.set("10", "od 55 do 59 rokov");
VEK_VALUES.set("11", "60 a viac rokov");

export const POHLAVIE_VALUES = new Map();
POHLAVIE_VALUES.set("1", "Muži");
POHLAVIE_VALUES.set("2", "Ženy");
POHLAVIE_VALUES.set("3", "Spolu");

export const NP3103RR_UKAZOVATEL_VALUES = new Map();
NP3103RR_UKAZOVATEL_VALUES.set(
    "PRIEM_PLAT_HOD",
    "Priemerný mesačný počet platených hodín"
);
NP3103RR_UKAZOVATEL_VALUES.set(
    "ODPR_MESIAC",
    "Počet odpracovaných hodín za mesiac"
);
NP3103RR_UKAZOVATEL_VALUES.set(
    "NEODPR_DOVOLENKA",
    "Počet neodpracovaných hodín za mesiac z dôvodu dovolenky"
);
NP3103RR_UKAZOVATEL_VALUES.set(
    "NEODPR_PN",
    "Počet neodpracovaných hodín za mesiac z dôvodu PN"
);
NP3103RR_UKAZOVATEL_VALUES.set(
    "E_PRIEM_HR_MZDA",
    "Priemerná hrubá nominálna mesačná mzda (Eur)"
);
NP3103RR_UKAZOVATEL_VALUES.set(
    "E_PRIEM_HR_MZDA_ST",
    "Priemerná hrubá nominálna mesačná mzda za kratší pracovný čas (Eur)"
);
NP3103RR_UKAZOVATEL_VALUES.set(
    "E_PRIEM_HR_MZDA_FT",
    "Priemerná hrubá nominálna mesačná mzda za plný pracovný čas (EUR)"
);
NP3103RR_UKAZOVATEL_VALUES.set("E_ZAKL_MZDA", "Základná mzda (Eur)");
NP3103RR_UKAZOVATEL_VALUES.set("E_PREM_ODM", "Prémie a odmeny (Eur)");
NP3103RR_UKAZOVATEL_VALUES.set("E_PRIP_DOPL", "Príplatky a doplatky (Eur)");
NP3103RR_UKAZOVATEL_VALUES.set("E_NAHR_MZDY", "Náhrady mzdy (Eur)");
NP3103RR_UKAZOVATEL_VALUES.set("E_OST_ZLOZKY", "Ostatné mzdové zložky (Eur)");
NP3103RR_UKAZOVATEL_VALUES.set(
    0,
    NP3103RR_UKAZOVATEL_VALUES.get("PRIEM_PLAT_HOD")
);
NP3103RR_UKAZOVATEL_VALUES.set(
    1,
    NP3103RR_UKAZOVATEL_VALUES.get("ODPR_MESIAC")
);
NP3103RR_UKAZOVATEL_VALUES.set(
    2,
    NP3103RR_UKAZOVATEL_VALUES.get("NEODPR_DOVOLENKA")
);
NP3103RR_UKAZOVATEL_VALUES.set(3, NP3103RR_UKAZOVATEL_VALUES.get("NEODPR_PN"));
NP3103RR_UKAZOVATEL_VALUES.set(
    4,
    NP3103RR_UKAZOVATEL_VALUES.get("E_PRIEM_HR_MZDA")
);
NP3103RR_UKAZOVATEL_VALUES.set(
    5,
    NP3103RR_UKAZOVATEL_VALUES.get("E_PRIEM_HR_MZDA_ST")
);
NP3103RR_UKAZOVATEL_VALUES.set(
    6,
    NP3103RR_UKAZOVATEL_VALUES.get("E_PRIEM_HR_MZDA_FT")
);
NP3103RR_UKAZOVATEL_VALUES.set(
    7,
    NP3103RR_UKAZOVATEL_VALUES.get("E_ZAKL_MZDA")
);
NP3103RR_UKAZOVATEL_VALUES.set(8, NP3103RR_UKAZOVATEL_VALUES.get("E_PREM_ODM"));
NP3103RR_UKAZOVATEL_VALUES.set(
    9,
    NP3103RR_UKAZOVATEL_VALUES.get("E_PRIP_DOPL")
);
NP3103RR_UKAZOVATEL_VALUES.set(
    10,
    NP3103RR_UKAZOVATEL_VALUES.get("E_NAHR_MZDY")
);
NP3103RR_UKAZOVATEL_VALUES.set(
    11,
    NP3103RR_UKAZOVATEL_VALUES.get("E_OST_ZLOZKY")
);
