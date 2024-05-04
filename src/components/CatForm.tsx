import { Cat } from '@prisma/client';

export function CatForm({ cat }: { cat?: Cat }) {
  const isEdit = !!cat;

  const formMethod = isEdit ? 'put' : 'post';
  const idPath = isEdit ? `/${cat.id}` : '';

  const formHx = {
    [`hx-${formMethod}`]: `/api/v1/cat${idPath}`,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <form {...formHx} hx-swap="outerHTML" hx-ext="json-enc">
      <input
        className="border border-zinc-200 rounded-lg"
        type="text"
        placeholder="name"
        name="name"
        value={cat?.name ?? ''}
      />

      <input
        className="border border-zinc-200 rounded-lg"
        type="text"
        placeholder="bread"
        name="bread"
        value={cat?.bread ?? ''}
      />

      {isEdit && (
        <button
          type="button"
          hx-get="/api/v1/cat/view/reset-form"
          hx-target="form"
          hx-swap="outerHTML"
        >
          Cancelar
        </button>
      )}

      <button type="submit">{isEdit ? 'Guardar' : 'Crear'}</button>
    </form>
  );
}
