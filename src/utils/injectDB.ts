import { createMiddleware } from "hono/factory";
import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";

import { CatRepository } from "../repository";
import { CatServices } from "../service";

export const injectDB = createMiddleware(async (c, next) => {
  const adapter = new PrismaD1(c.env.DB);
  const prisma = new PrismaClient({ adapter });
  const catRepositoy = new CatRepository(prisma);
  c.env.service = new CatServices(catRepositoy);

  await next();
});
