import { Cat } from '@prisma/client';

export function CatCard(cat: Cat) {
  // const catId = `cat-${cat.id.toString()}`;
  const catId = 'cat-' + cat.id.toString();
  const deletePath = '/api/v1/cat/' + cat.id;
  const editPath = '/api/v1/cat/view/edit-cat/' + cat.id;

  return (
    <article
      className="border border-zinc-200 rounded-lg p-4 max-w-96 relative"
      id={catId}
    >
      <button
        className="absolute top-3 right-3"
        hx-delete={deletePath}
        hx-target={`#${catId}`}
        hx-swap="outerHTML"
      >
        x
      </button>

      <h5 className="text-center text-zinc-800">{cat.name}</h5>

      <section className="flex justify-between mt-8">
        <span className="text-zinc-400">{cat.created_at}</span>
        <span className="text-zinc-800">{cat.bread}</span>
      </section>
      <section className="flex justify-center">
        <button hx-get={editPath} hx-target="form" hx-swap="outerHTML">
          Editar
        </button>
      </section>
    </article>
  );
}
