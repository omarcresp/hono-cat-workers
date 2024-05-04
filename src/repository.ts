import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";

type PrismaRepo = PrismaClient<{ adapter: PrismaD1 }>

export class CatRepository {
  private prisma: PrismaRepo;

  constructor(prisma: PrismaRepo) {
    this.prisma = prisma;
  }

  public getAllCats() {
    return this.prisma.cat.findMany();
  }
}
