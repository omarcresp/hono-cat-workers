import { Cat } from '@prisma/client';

import { CatCard } from './CatCard';

export function Cats(cats: Cat[]) {
  return (
    <main>
      <h1>Cats :)</h1>

      {cats.map(CatCard)}
    </main>
  );
}
