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
    return fastify.printRoutes();
});

fastify.listen({ port: 3001 }, (err, address) => {
    if (err) throw err;
    console.log(`Server is now listening on ${address}`);
});
