import { PrismaD1 } from "@prisma/adapter-d1";
import { Cat, PrismaClient } from "@prisma/client";

type PrismaRepo = PrismaClient<{ adapter: PrismaD1 }>;

export class CatRepository {
  private prisma: PrismaRepo;

  constructor(prisma: PrismaRepo) {
    this.prisma = prisma;
  }

  public getAllCats() {
    return this.prisma.cat.findMany();
  }

  public delete(catId: number) {
    return this.prisma.cat.delete({
      where: { id: catId },
    });
  }

  public create(cat: Cat) {
    return this.prisma.cat.create({
      data: {
        ...cat,
        created_at: +new Date(),
      },
    });
  }

  public update(catId: number, cat: Cat) {
    return this.prisma.cat.update({
      data: cat,
      where: { id: catId },
    });
  }

  public getById(catId: number) {
    return this.prisma.cat.findFirstOrThrow({ where: { id: catId } });
  }
}
