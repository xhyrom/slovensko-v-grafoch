import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI from "./index.js";

export default function (fastify: FastifyInstance, _: any, done: any) {
    fastify.get("/", async (_, reply: FastifyReply) => {
        reply.type("application/json").code(200);

        return {
            labels: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get(),
            ids: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_ids(),
            together: {
                labels: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_together(),
                ids: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_ids_together(),
            },
        };
    });

    fastify.get("/labels", async (_, reply: FastifyReply) => {
        reply.type("application/json").code(200);

        return {
            data: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get(),
            together: await E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI.get_together(),
        };
    });

    fastify.get(
        "/ids",
        async (request: FastifyRequest, reply: FastifyReply) => {
            reply.type("application/json").code(200);

            const indicator = (request.query as { indicator: string | null })
                .indicator;

            return {
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
            };
        }
    );

    done();
}
