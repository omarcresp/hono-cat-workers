import * as z from "zod"

export const CatModel = z.object({
  id: z.number().int(),
  name: z.string(),
  bread: z.string().nullish(),
  created_at: z.number().int(),
})
