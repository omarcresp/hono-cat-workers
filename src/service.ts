import { Cat } from "@prisma/client";
import { CatForm } from "./components/CatForm";
import { Cats } from "./components/HomeCat";
import { CatRepository } from "./repository";
import { CatCard } from "./components/CatCard";
import { swapOOB } from "./utils/oob";

export class CatServices {
  private catRepo: CatRepository;

  constructor(repo: CatRepository) {
    this.catRepo = repo;
  }

  async getAll() {
    const cats = await this.catRepo.getAllCats();

    return Cats(cats);
  }

  delete(catId: string) {
    return this.catRepo.delete(+catId);
  }

  async create(cat: Cat) {
    const newCat = await this.catRepo.create(cat);

    const catCard = CatCard(newCat);
    const cardOob = swapOOB(catCard, "beforeend:#list");

    const form = CatForm({});

    return `${form}\n${cardOob}`;
  }

  update(catId: string, cat: Cat) {
    return this.catRepo.update(+catId, cat);
  }

  async renderForm(catId: string) {
    const cat = await this.catRepo.getById(+catId);

    return CatForm({ cat });
  }
}
