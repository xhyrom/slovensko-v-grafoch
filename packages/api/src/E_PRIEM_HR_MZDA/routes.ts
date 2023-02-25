import type { FastifyInstance, FastifyReply } from "fastify";
import E_PRIEM_HR_MZDA from "./index.js";

export default function (fastify: FastifyInstance, _: any, done: any) {
    fastify.get("/", async (_, reply: FastifyReply) => {
        reply.type("application/json").code(200);

        return {
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
        };
    });

    fastify.get("/by_job", async (_, reply) => {
        reply.type("application/json").code(200);

        return {
            data: await E_PRIEM_HR_MZDA.by_job(),
            together: await E_PRIEM_HR_MZDA.by_job_together(),
        };
    });

    fastify.get("/by_education", async (_, reply) => {
        reply.type("application/json").code(200);

        return {
            data: await E_PRIEM_HR_MZDA.by_education(),
            together: await E_PRIEM_HR_MZDA.by_education_together(),
        };
    });

    fastify.get("/by_age", async (_, reply) => {
        reply.type("application/json").code(200);

        return {
            data: await E_PRIEM_HR_MZDA.by_age(),
            together: await E_PRIEM_HR_MZDA.by_age_together(),
        };
    });

    fastify.get("/with_time", async (_, reply) => {
        reply.type("application/json").code(200);

        return {
            data: await E_PRIEM_HR_MZDA.with_time(),
            together: await E_PRIEM_HR_MZDA.with_time_together(),
        };
    });

    done();
}
