import type { FormEventHandler } from "react";

import type { Article } from "~/components/Model";

type Props = {
  article: Article;
};

export const ArticleUpdate = ({ article }: Props) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // TODO
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mx-28 mt-10 text-[#0B3168]">
        <header>
          <h1 className="text-3xl font-bold underline mb-10">
            Modifier votre article
          </h1>
        </header>

        <div>
          <label className="flex flex-col text-l font-bold">
            Titre :
            <input
              type="text"
              className="border-[1px] border-[#0B3168] rounded-md h-8 mt-4 font-normal"
            />
          </label>

          <label className="flex flex-col text-l font-bold">
            Contenu :
            <input
              type="text"
              className="border-[1px] border-[#0B3168] rounded-md h-8 mt-4 font-normal"
            />
          </label>

          <div>
            <button type="submit">Valider</button>
          </div>
        </div>
      </div>
    </form>
  );
};
