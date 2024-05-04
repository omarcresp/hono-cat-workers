import { PrismaD1 } from '@prisma/adapter-d1';
import { Cat, PrismaClient } from '@prisma/client';

export type PrismaRepo = PrismaClient<{ adapter: PrismaD1 }>;

export class CatRepository {
  public prisma: PrismaRepo;

  constructor(prisma: PrismaRepo) {
    this.prisma = prisma;
  }

  public getAllCats(): Promise<Cat[]> {
    return this.prisma.cat.findMany();
  }

  public async delete(catId: number): Promise<void> {
    await this.prisma.cat.delete({
      where: { id: catId },
    });
  }

  public create(cat: Cat): Promise<Cat> {
    return this.prisma.cat.create({
      data: {
        ...cat,
        created_at: +new Date(),
      },
    });
  }

  public update(catId: number, cat: Cat): Promise<Cat> {
    return this.prisma.cat.update({
      data: cat,
      where: { id: catId },
    });
  }

  public getById(catId: number): Promise<Cat> {
    return this.prisma.cat.findFirstOrThrow({ where: { id: catId } });
  }
}
