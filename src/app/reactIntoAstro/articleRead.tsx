import { useStore } from "@nanostores/react";

import ReactMarkdown from "react-markdown";

import { store } from "~/stores/article";

type Props = { id: string };

export const ArticleRead = ({ id }: Props) => {
  const articleMap = useStore(store);

  const article = articleMap[id];
  console.log(article);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="w-1/2 mx-auto my-12">
      <h1 className="text-3xl my-8">{article.getTitle()}</h1>

      <ReactMarkdown>{article.getContent()}</ReactMarkdown>

      <div className="my-8">
        <p>
          Article crée le {formatDate(article.getCreatedAt())} à{" "}
          {formatTime(article.getCreatedAt())}
        </p>

        <p>
          Article modifié le {formatDate(article.getUpdatedAt())} à{" "}
          {formatTime(article.getUpdatedAt())}
        </p>
      </div>

      <div className="text-center">
        <a className="mx-auto" href="/articles">
          Retour à la liste des articles
        </a>
      </div>
    </main>
  );
};
