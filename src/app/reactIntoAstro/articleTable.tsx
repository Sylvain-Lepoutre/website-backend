import { useStore } from "@nanostores/react";
import { useCallback, useState, type MouseEventHandler } from "react";

import { store, deleteArticle } from "~/stores/article";
import { ConfirmationModal } from "~/app/reactIntoAstro/ConfirmationModal";

export const ArticleTable = () => {
  const articleMap = useStore(store);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState("");

  const handleOpenModal = (articleId: string) => {
    setSelectedArticleId(articleId);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedArticleId("");
    setModalIsOpen(false);
  };

  const handleDelete = useCallback(
    (articleId: string): MouseEventHandler<HTMLButtonElement> =>
      () => {
        deleteArticle(articleId);
        setModalIsOpen(false);
      },
    [],
  );

  return (
    <table className="border-y-2 border-y-black">
      <caption className="text-2xl font-bold mb-6 ">
        Tableau de gestion des Articles
      </caption>

      <thead className="border-b-2 border-b-black">
        <tr className="flex border-y-[1px] border-t-black w-[100vw] justify-around">
          <th scope="col" className="w-1/6 flex justify-center items-center">
            Titre
          </th>

          <th scope="col" className="w-1/6 flex justify-center items-center">
            Contenu
          </th>

          <th scope="col" className="w-1/6 flex justify-center items-center">
            Description
          </th>

          <th scope="col" className="w-1/6 flex justify-center items-center">
            Date de création
          </th>

          <th scope="col" className="w-1/6 flex justify-center items-center">
            Date de modification
          </th>

          <th scope="col" className="w-1/6 flex justify-center items-center">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {Object.values(articleMap).map((article) => (
          <tr
            className="flex border-y-[1px] border-t-black w-[100vw] justify-around"
            key={article.getId()}
          >
            <th scope="row" className="w-1/6 flex justify-center items-center">
              {article.getTitle()}
            </th>

            <td className="w-1/6 flex justify-center items-center">
              {article.getContent()}
            </td>

            <td className="w-1/6 flex justify-center items-center">
              {article.getContent()}
            </td>

            <td className="w-1/6 flex justify-center items-center">
              {article.getCreatedAt().toLocaleString()}
            </td>

            <td className="w-1/6 flex justify-center items-center">
              {article.getUpdatedAt().toLocaleString()}
            </td>

            <td className="w-1/6 flex justify-center items-center">
              <a href={`/articles/read/${article.getId()}`}>Lire</a>

              <a href={`/articles/update/${article.getId()}`} className="mx-4">
                Modifier
              </a>

              <button
                className="mx-4"
                onClick={() => handleOpenModal(article.getId())}
                type="button"
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      <ConfirmationModal
        articleTitle={articleMap[selectedArticleId]?.getTitle()}
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        onConfirm={handleDelete(selectedArticleId)}
        operation="supprimer"
      />
    </table>
  );
};
