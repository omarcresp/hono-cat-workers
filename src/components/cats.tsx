import { Cat } from "@prisma/client";

export function Cats(cats: Cat[]) {
  return (
    <main>
      <h1>Cats :)</h1>

      {cats.map((cat) => (
        <article>
          <p>{cat.name}</p>
          <p>{cat.id}</p>
        </article>
      ))}
    </main>
  );
}
