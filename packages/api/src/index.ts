import Fastify from "fastify";
import E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI from "./E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI/routes.js";
import E_PRIEM_HR_MZDA from "./E_PRIEM_HR_MZDA/routes.js";

const fastify = Fastify({
    logger: true,
});

fastify.register(E_PRIEM_HR_MZDA, { prefix: "/e_priem_hr_mzda" });
fastify.register(E_MIERA_EVIDOVANEJ_NEZAMESTNANOSTI, {
    prefix: "/e_miera_evidovanej_nezamestnanosti",
});

await fastify.register(import("@fastify/compress"), {
    global: true,
    encodings: ["gzip"],
});

fastify.get("/", async () => {
    return (
        fastify.printRoutes() +
        "\n\n" +
        String.raw`
    Source: https://data.statistics.sk/api/
    All data from ^ is covered by Creative Commons Attribution License (cc-by) 4.0 (https://creativecommons.org/licenses/by/4.0/legalcode)

    Read more at https://slovak.statistics.sk/wps/portal/ext/aboutus/webpage/terms/!ut/p/z1/rVFLU8IwEP4tHnrM7NIUSo8pKo-po6A8mouTllRibVJoLMKvNzBewXHGve3st998D-CwAq5Fq96EVUaLD7envPe6SJ76cdxh-DibBDi-HzCMX6Z0nPRgARx4rm1tN5CarBEb0pQeNtYx5CQ32kptPXRkjYd7mZlWkMbuhC6Fh7VZV0rq8kBq83lUrdBKnPjqXK0h9YvI7wraI6EfFCRAmZEslAGRvoxo4RcYdQQsfxPI3RkvDEP3z8-QwZCNgjBB7CfDLo7ZaD6LppQioz-AKxyp0xBe1HDbhWWr5B7m2uwql-nzHy2OECZnCVdcup7U-3bLmSvjlPmXhdW_tFFXVZ8eSFk83NGApzffxqSEBQ!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/
    `
    );
});

fastify.listen({ port: 3001 }, (err, address) => {
    if (err) throw err;
    console.log(`Server is now listening on ${address}`);
});
