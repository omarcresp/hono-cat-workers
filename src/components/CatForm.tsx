import { Cat } from "@prisma/client";

export function CatForm({ cat }: { cat?: Cat }) {
  const isEdit = !!cat;

  const formMethod = isEdit ? "put" : "post";
  const idPath = isEdit ? "/" + cat.id : "";

  const formHx = {
    ["hx-" + formMethod]: "/api/v1/cat" + idPath,
  };

  return (
    <form {...formHx} hx-swap="outerHTML" hx-ext="json-enc">
      <input
        className="border border-zinc-200 rounded-lg"
        type="text"
        placeholder="name"
        name="name"
        value={cat?.name ?? ""}
      />

      <input
        className="border border-zinc-200 rounded-lg"
        type="text"
        placeholder="bread"
        name="bread"
        value={cat?.bread ?? ""}
      />

      {isEdit && (
        <button
          type="reset"
          hx-get="/api/v1/cat/view/reset-form"
          hx-target="form"
          hx-swap="outerHTML"
        >
          Cancelar
        </button>
      )}

      <button>{isEdit ? "Guardar" : "Crear"}</button>
    </form>
  );
}
