import { useStore } from "@nanostores/react";
import { useCallback, type MouseEventHandler } from "react";

import { useAPI } from "~/components/API";
import { articleStore } from "~/stores";

export const ArticleTable = () => {
  const articleMap = useStore(articleStore);
  const api = useAPI();

  const handleDelete = useCallback(
    (articleId: string): MouseEventHandler<HTMLButtonElement> =>
      () => {
        api.deleteArticle(articleId);
      },
    [api],
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
            key={article.id}
          >
            <th scope="row" className="w-1/6 flex justify-center items-center">
              {article.title}
            </th>

            <td className="w-1/6 flex justify-center items-center">
              {article.content}
            </td>

            <td className="w-1/6 flex justify-center items-center">
              {article.content}
            </td>

            <td className="w-1/6 flex justify-center items-center">
              {article.createdAt.toLocaleString()}
            </td>

            <td className="w-1/6 flex justify-center items-center">
              {article.updatedAt.toLocaleString()}
            </td>

            <td className="w-1/6 flex justify-center items-center">
              <a href={`/articles/read/${article.id}`}>Lire</a>

              <a href={`/articles/update/${article.id}`} className="mx-4">
                Modifier
              </a>

              <button
                className="mx-4"
                onClick={handleDelete(article.id)}
                type="button"
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
