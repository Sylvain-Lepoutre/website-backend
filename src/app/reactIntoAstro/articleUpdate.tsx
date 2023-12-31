import { useStore } from "@nanostores/react";
import {
  useMemo,
  useRef,
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";

import { store, updateArticle } from "~/stores/article";
import { ConfirmationModal } from "~/app/reactIntoAstro/ConfirmationModal";

type Props = {
  id: string;
};

export const ArticleUpdate = ({ id }: Props) => {
  const articleMap = useStore(store);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const article = useMemo(() => articleMap[id], [articleMap, id]);

  const title = useMemo(() => article.getTitle(), [article]);
  const content = useMemo(() => article.getContent(), [article]);

  const titleRef = useRef(article.getTitle());
  const contentRef = useRef(article.getContent());

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateArticle(
      article.getId(),
      {
        title: event.target.value,
      },
      false,
    );
  };

  const handleContentChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateArticle(
      article.getId(),
      {
        content: event.target.value,
      },
      false,
    );
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    titleRef.current = title;
    contentRef.current = content;

    updateArticle(article.getId(), {});
    setModalIsOpen(false);

    window.location.href = "/articles";
  };

  return (
    <form noValidate>
      <div className="mx-28 mt-10 text-[#0B3168]">
        <header>
          <h1 className="text-3xl font-bold underline mb-10">
            Modifier votre article
          </h1>
        </header>

        <div>
          <label className="flex flex-col text-l font-bold">
            {`Titre${title !== titleRef.current ? "*" : ""}`}

            <input
              className="border-[1px] border-[#0B3168] rounded-md h-8 mt-4 font-normal"
              onChange={handleTitleChange}
              type="text"
              value={title}
            />
          </label>

          <label className="flex flex-col text-l font-bold">
            {`Contenu${content !== contentRef.current ? "*" : ""}`}

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
            <ConfirmationModal
              articleTitle={title}
              isOpen={modalIsOpen}
              onClose={handleCloseModal}
              onConfirm={handleSubmit}
              operation="modifier"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
