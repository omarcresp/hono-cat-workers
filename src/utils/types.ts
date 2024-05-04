import { CatServices } from "../service";

export interface Worker {
  Bindings: {
    DB: D1Database;
    MESSAGE: string;
    service: CatServices;
  };
}
