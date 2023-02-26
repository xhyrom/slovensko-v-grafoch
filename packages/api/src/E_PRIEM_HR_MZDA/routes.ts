import type { FastifyInstance, FastifyReply } from "fastify";
import E_PRIEM_HR_MZDA from "./index.js";

export default async function (fastify: FastifyInstance, _: any, done: any) {
    await fastify.register(import("@fastify/compress"), {
        global: true,
    });

    fastify.get("/", async (_, reply: FastifyReply) => {
        return reply.send({
            by_job: await E_PRIEM_HR_MZDA.by_job(),
            by_education: await E_PRIEM_HR_MZDA.by_education(),
            by_age: await E_PRIEM_HR_MZDA.by_age(),
            with_time: await E_PRIEM_HR_MZDA.with_time(),
            together: {
                by_job: await E_PRIEM_HR_MZDA.by_job_together(),
                by_education: await E_PRIEM_HR_MZDA.by_education_together(),
                by_age: await E_PRIEM_HR_MZDA.by_age_together(),
                with_time: await E_PRIEM_HR_MZDA.with_time_together(),
            },
            source: "https://data.statistics.sk/api",
        });
    });

    fastify.get("/by_job", async (_, reply) => {
        return reply.send({
            data: await E_PRIEM_HR_MZDA.by_job(),
            together: await E_PRIEM_HR_MZDA.by_job_together(),
            source: "https://data.statistics.sk/api",
        });
    });

    fastify.get("/by_education", async (_, reply) => {
        return reply.send({
            data: await E_PRIEM_HR_MZDA.by_education(),
            together: await E_PRIEM_HR_MZDA.by_education_together(),
            source: "https://data.statistics.sk/api",
        });
    });

    fastify.get("/by_age", async (_, reply) => {
        return reply.send({
            data: await E_PRIEM_HR_MZDA.by_age(),
            together: await E_PRIEM_HR_MZDA.by_age_together(),
            source: "https://data.statistics.sk/api",
        });
    });

    fastify.get("/with_time", async (_, reply) => {
        return reply.send({
            data: await E_PRIEM_HR_MZDA.with_time(),
            together: await E_PRIEM_HR_MZDA.with_time_together(),
            source: "https://data.statistics.sk/api",
        });
    });

    done();
}
