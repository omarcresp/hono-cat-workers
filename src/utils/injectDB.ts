import { createMiddleware } from "hono/factory";
import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";
import { StatusCode } from "status-code-enum";
import { z } from "zod";

import { CatRepository } from "../repository";
import { CatServices } from "../service";
import { Worker } from "./types";

export const injectDB = createMiddleware<Worker>(async (c, next) => {
  const adapter = new PrismaD1(c.env.DB);
  const prisma = new PrismaClient({ adapter });
  const catRepositoy = new CatRepository(prisma);
  c.env.service = new CatServices(catRepositoy);

  await next();
});

export const dtoValidator = (model: z.ZodObject<any, any>) =>
  createMiddleware<Worker>(async (c, next) => {
    try {
      const rawJson = await c.req.json();
      const json = model.parse(rawJson);
      c.set("json", json);
    } catch (err) {
      console.log(err);

      c.status(StatusCode.ClientErrorUnprocessableEntity);
      return c.text("error");
    }

    await next();
  });
