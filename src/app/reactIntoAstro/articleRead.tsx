import { useStore } from "@nanostores/react";

import { store } from "~/stores/article";

type Props = { id: string };

export const ArticleRead = ({ id }: Props) => {
  const articleMap = useStore(store);

  const article = articleMap[id];
  console.log(article);

  return (
    <div>
      <h1>{article.getTitle()}</h1>
      <p>{article.getContent()}</p>
      <p>{article.getCreatedAt().toString()}</p>
      <p>{article.getUpdatedAt().toString()}</p>
    </div>
  );
};
