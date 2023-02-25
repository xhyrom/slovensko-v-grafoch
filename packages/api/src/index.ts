import Fastify from "fastify";
import E_PRIEM_HR_MZDA from "./E_PRIEM_HR_MZDA/routes.js";

const fastify = Fastify({
    logger: true,
});

fastify.register(E_PRIEM_HR_MZDA, { prefix: "/e_priem_hr_mzda" });

fastify.listen({ port: 3001 }, (err, address) => {
    if (err) throw err;
    console.log(`Server is now listening on ${address}`);
});
