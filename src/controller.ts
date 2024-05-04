import { Hono } from "hono";

import { Worker } from "./utils/types";

const app = new Hono<Worker>();

app.get("/cat", async (c) => {
    try {
      const cats = await c.env.service.getAll();

      return c.render(cats);
    } catch (err) {
      console.error(err);
      return c.text("error");
    }
});

export default app;
