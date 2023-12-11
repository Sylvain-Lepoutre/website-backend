import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";

import { createArticle } from "~/stores/article";

export const ArticleCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    createArticle({ title, content });
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
            Titre
            <input
              className="border-[1px] border-[#0B3168] rounded-md h-8 mt-4 font-normal"
              onChange={handleTitleChange}
              type="text"
              value={title}
            />
          </label>

          <label className="flex flex-col text-l font-bold">
            Contenu
            <input
              className="border-[1px] border-[#0B3168] rounded-md h-8 mt-4 font-normal"
              onChange={handleContentChange}
              type="text"
              value={content}
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
