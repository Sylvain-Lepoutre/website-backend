import ReactMarkdown from "react-markdown";

import { useStore } from "@nanostores/react";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type MouseEventHandler,
} from "react";

import { store, deleteArticle } from "~/stores/article";
import { ConfirmationModal } from "~/app/reactIntoAstro/ConfirmationModal";

export const ArticleTable = () => {
  const articleMap = useStore(store);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState("");
  const [sortByDate, setSortByDate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenModal = (articleId: string) => {
    setSelectedArticleId(articleId);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedArticleId("");
    setModalIsOpen(false);
  };

  const getSummary = (text: string): string => {
    const words = text.split(" ");
    const summary = words.slice(0, 10).join(" ");
    return summary + "...";
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const handleSortByDate = () => {
    setSortByDate(!sortByDate);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const deleteButtonRefs = useRef<Record<string, HTMLButtonElement>>({});

  const filteredArticles = useMemo(
    () =>
      Object.values(articleMap).filter((article) =>
        article.getTitle().toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [articleMap, searchTerm],
  );

  const sortedArticles = useMemo(
    () =>
      filteredArticles.sort((a, b) => {
        if (sortByDate) {
          return a.getCreatedAt().getTime() - b.getCreatedAt().getTime();
        } else {
          return b.getCreatedAt().getTime() - a.getCreatedAt().getTime();
        }
      }),
    [filteredArticles, sortByDate],
  );

  const sortedDeleteButtonRefs = useMemo(
    () =>
      sortedArticles.map(
        (article) => deleteButtonRefs.current[article.getId()],
      ),
    [sortedArticles],
  );

  const handleDelete = useCallback(
    (articleId: string): MouseEventHandler<HTMLButtonElement> =>
      () => {
        const index = sortedArticles.findIndex(
          (article) => article.getId() === articleId,
        );

        const focusedIndex =
          index < sortedArticles.length - 1 ? index + 1 : index - 1;

        sortedDeleteButtonRefs[focusedIndex]?.focus();

        deleteArticle(articleId);
        setModalIsOpen(false);
      },
    [sortedArticles, sortedDeleteButtonRefs],
  );

  return (
    <main>
      <h1 className="text-3xl text-center font-bold my-8">
        Gestion des articles
      </h1>
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Rechercher par titre
        </label>
        <input
          type="text"
          id="search"
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          placeholder="Rechercher par titre"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div role="status" className="sr-only">
        {filteredArticles.length} articles trouvés
      </div>
      <a className="mx-auto" href="/articles/create">
        Ajouter un article
      </a>

      <table className="border-y-2 border-y-black my-8">
        <caption className="text-2xl font-bold mb-6 ">
          Liste des articles
        </caption>

        <thead className="border-b-2 border-b-black">
          <tr className="flex border-y-[1px] border-t-black w-[100vw] justify-around">
            <th scope="col" className="w-1/6 flex justify-center items-center">
              Titre
            </th>

            <th scope="col" className="w-1/6 flex justify-center items-center">
              Description
            </th>

            <th scope="col" className="w-1/6 flex justify-center items-center">
              Date de création
              <button
                className="mx-4 p-4"
                onClick={handleSortByDate}
                type="button"
                aria-label={
                  sortByDate
                    ? "Trier par date croissante"
                    : "Trier par date décroissante"
                }
              >
                {sortByDate ? "▲" : "▼"}
              </button>
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
          {sortedArticles.map((article) => (
            <tr
              className="flex border-y-[1px] border-t-black w-[100vw] justify-around"
              key={article.getId()}
            >
              <th
                scope="row"
                className="w-1/6 flex justify-center items-center"
              >
                {article.getTitle()}
              </th>

              <td className="w-1/6 flex justify-center items-center">
                <ReactMarkdown>
                  {getSummary(article.getContent())}
                </ReactMarkdown>
              </td>

              <td className="w-1/6 flex justify-center items-center">
                {formatDate(article.getCreatedAt())}
              </td>

              <td className="w-1/6 flex justify-center items-center">
                {formatDate(article.getUpdatedAt())}
              </td>

              <td className="w-1/6 flex justify-center items-center">
                <a
                  href={`/articles/read/${article.getId()}`}
                  title={article.getTitle()}
                >
                  Lire
                </a>

                <a
                  href={`/articles/update/${article.getId()}`}
                  className="mx-4"
                >
                  Modifier
                </a>

                <button
                  className="mx-4"
                  onClick={() => handleOpenModal(article.getId())}
                  type="button"
                  ref={(deleteButton) =>
                    (deleteButtonRefs.current[article.getId()] = deleteButton)
                  }
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
    </main>
  );
};
