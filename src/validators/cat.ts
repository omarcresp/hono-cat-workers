import { CatModel } from '../../prisma/zod';

export const CatCreateModel = CatModel.pick({ name: true, bread: true });
