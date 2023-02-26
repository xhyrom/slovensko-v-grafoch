import zamestnanie from "./types/zamestnanie.js";
import vzdelanie from "./types/vzdelanie.js";
import { SK0 } from "../constants.js";
import vek from "./types/vek.js";
import Cas from "./types/+cas.js";

export default {
    by_job: zamestnanie,
    by_job_together: async () =>
        (await zamestnanie()).filter(
            (item) => item.job.toLowerCase() === "spolu" && item.region === SK0
        ),
    by_education: vzdelanie,
    by_education_together: async () =>
        (await vzdelanie()).filter(
            (item) =>
                item.education.toLowerCase() === "spolu" && item.region === SK0
        ),
    by_age: vek,
    by_age_together: async () =>
        (await vek()).filter(
            (item) => item.age.toLowerCase() === "spolu" && item.region === SK0
        ),
    with_time: Cas,
    with_time_together: async () =>
        (await Cas()).filter(
            (item) =>
                item.gender.toLowerCase() === "spolu" && item.region === SK0
        ),
};
