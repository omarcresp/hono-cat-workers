import { Cat } from '@prisma/client';

export function CatCard({ id, bread, created_at, name }: Cat) {
  // const catId = `cat-${id.toString()}`;
  const catId = `cat-${id.toString()}`;
  const deletePath = `/api/v1/cat/${id}`;
  const editPath = `/api/v1/cat/view/edit-cat/${id}`;

  return (
    <article
      className="border border-zinc-200 rounded-lg p-4 max-w-96 relative"
      id={catId}
    >
      <button
        type="button"
        className="absolute top-3 right-3"
        hx-delete={deletePath}
        hx-target={`#${catId}`}
        hx-swap="outerHTML"
      >
        x
      </button>

      <h5 className="text-center text-zinc-800">{name}</h5>

      <section className="flex justify-between mt-8">
        <span className="text-zinc-400">{created_at}</span>
        <span className="text-zinc-800">{bread}</span>
      </section>
      <section className="flex justify-center">
        <button
          type="button"
          hx-get={editPath}
          hx-target="form"
          hx-swap="outerHTML"
        >
          Editar
        </button>
      </section>
    </article>
  );
}
