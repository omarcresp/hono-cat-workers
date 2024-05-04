import { Cats } from "./components/cats";
import { CatRepository } from "./repository";

export class CatServices {
  private catRepo: CatRepository;

  constructor(repo: CatRepository) {
    this.catRepo = repo;
  }

  async getAll() {
    const cats = await this.catRepo.getAllCats();

    return Cats(cats);
  }
}
