// @ts-ignore - no types available
import JSONStat from "jsonstat-toolkit";

const res = await JSONStat(
  "https://data.statistics.sk/api/SendReport.php?cubeName=pr3108rr&lang=sk&fileType=json"
);

console.log(res);

export {};
