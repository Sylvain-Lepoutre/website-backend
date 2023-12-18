import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";

import { createArticle } from "~/stores/article";
import { ConfirmationModal } from "~/app/reactIntoAstro/ConfirmationModal";

export const ArticleCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setContent(event.target.value);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    createArticle({ title, content });
    setModalIsOpen(false);

    window.location.href = "/articles";
  };

  return (
    <form noValidate>
      <div className="mx-28 mt-10 text-[#0B3168]">
        <header>
          <h1 className="text-3xl font-bold underline mb-10">
            Créer votre article
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
            <textarea
              className="border-[1px] border-[#0B3168] rounded-md h-96 mt-4 font-normal"
              onChange={handleContentChange}
              value={content}
            />
          </label>

          <div>
            <button type="button" onClick={handleOpenModal}>
              Valider
            </button>
          </div>
          <ConfirmationModal
            articleTitle={title}
            isOpen={modalIsOpen}
            onClose={handleCloseModal}
            onConfirm={handleSubmit}
            operation="créer"
          />
        </div>
      </div>
    </form>
  );
};
