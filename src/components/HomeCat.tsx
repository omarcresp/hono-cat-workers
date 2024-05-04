import { Cat } from '@prisma/client';

import { CatCard } from './CatCard';
import { CatForm } from './CatForm';

export function Cats(cats: Cat[]) {
  return (
    <main>
      <h1 className="text-center text-3xl">Amazing Cat List</h1>

      <CatForm />

      <section id="list" className="mx-32 mt-16">
        {cats.map((cat) => CatCard(cat))}
      </section>
    </main>
  );
}
