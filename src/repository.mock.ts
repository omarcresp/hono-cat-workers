/* eslint-disable class-methods-use-this */
import { Cat } from '@prisma/client';

import { CatRepository, PrismaRepo } from './repository';

export class CatMockRepository implements CatRepository {
  public prisma!: PrismaRepo;

  public create(cat: Cat): Promise<Cat> {
    return Promise.resolve({
      ...cat,
      id: 1,
      created_at: 0,
    });
  }

  public async delete(catId: number): Promise<void> {
    return Promise.resolve(catId).then(()=>{});
  }

  public update(catId: number, cat: Cat): Promise<Cat> {
    return Promise.resolve({
      ...cat,
      id: catId,
      created_at: 0,
    });
  }

  public getById(catId: number): Promise<Cat> {
    return Promise.resolve({
      name: 'martin',
      bread: 'arabic',
      id: catId,
      created_at: 0,
    });
  }

  public getAllCats(): Promise<Cat[]> {
    return Promise.resolve([
      {
        name: 'martin',
        bread: 'arabic',
        id: 1,
        created_at: 0,
      },
    ]);
  }
}
