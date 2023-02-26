import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI from "./index.js";

export default async function (fastify: FastifyInstance, _: any, done: any) {
    await fastify.register(import("@fastify/compress"), {
        global: true,
    });

    fastify.get("/", async (_, reply: FastifyReply) => {
        return reply.send({
            labels: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get(),
            ids: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_ids(),
            together: {
                labels: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_together(),
                ids: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_ids_together(),
            },
            source: "https://data.statistics.sk/api",
        });
    });

    fastify.get("/labels", async (_, reply: FastifyReply) => {
        return reply.send({
            data: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get(),
            together: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_together(),
            source: "https://data.statistics.sk/api",
        });
    });

    fastify.get(
        "/ids",
        async (request: FastifyRequest, reply: FastifyReply) => {
            const indicator = (request.query as { indicator: string | null })
                .indicator;

            return reply.send({
                data: indicator
                    ? (
                          await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_ids()
                      )?.filter(
                          (item) =>
                              item.indicator
                                  .replaceAll(" ", "")
                                  .toLowerCase() ===
                              indicator.replaceAll(" ", "").toLowerCase()
                      )
                    : await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_ids(),
                together: indicator
                    ? (
                          await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_ids_together()
                      )?.filter(
                          (item) =>
                              item.indicator
                                  .replaceAll(" ", "")
                                  .toLowerCase() ===
                              indicator.replaceAll(" ", "").toLowerCase()
                      )
                    : await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_ids_together(),
                source: "https://data.statistics.sk/api",
            });
        }
    );

    done();
}
