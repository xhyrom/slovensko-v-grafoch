// Registered unemployment rate

// @ts-ignore - no types available
import JSONStat from "jsonstat-toolkit";

interface Result {
  lastUpdate: Date;
  data: Item[];
}

interface Item {
  type: string;
  gender: "M" | "F" | "BOTH";
  indicator: string;
  year: string;
  region: string;
}

interface RawItem {
  value: null;
  pr3108rr_data: string;
  pr3108rr_dim1: string;
  pr3108rr_ukaz: string;
  pr3108rr_rok: string;
  nuts14: string;
}

export const getRegisteredUnemploymentRate = async (): Promise<Result> => {
  const res = await JSONStat(
    "https://data.statistics.sk/api/SendReport.php?cubeName=pr3108rr&lang=sk&fileType=json"
  );

  const dataset: RawItem[] = res.Dataset(0).toTable({ type: "arrobj" });

  return {
    lastUpdate: new Date(res.__tree__.update),
    data: dataset.map((d) => ({
      type: d.pr3108rr_data,
      gender:
        d.pr3108rr_dim1 === "Muži"
          ? "M"
          : d.pr3108rr_dim1 === "Ženy"
          ? "F"
          : "BOTH",
      indicator: d.pr3108rr_ukaz,
      year: d.pr3108rr_rok,
      region: d.nuts14,
    })),
  };
};
