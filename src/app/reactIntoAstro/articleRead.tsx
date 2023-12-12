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

      <p>
        Article crée le {article.getCreatedAt().toLocaleDateString("fr-FR")} à{" "}
        {article
          .getCreatedAt()
          .toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
      </p>
      <p>
        Article modifié le {article.getUpdatedAt().toLocaleDateString("fr-FR")}{" "}
        à{" "}
        {article
          .getUpdatedAt()
          .toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
      </p>
    </div>
  );
};
