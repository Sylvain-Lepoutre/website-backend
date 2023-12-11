import { persistentMap } from "@nanostores/persistent";

import { Article, type ArticleData } from "~/components/Model";

export type ArticleMap = Record<string, Article>;

export const store = persistentMap<ArticleMap>(
  "articles:",
  {},
  {
    decode: (json) => Article.fromJSON(json),
    encode: (article) => article.toJSON(),
  },
);

export const createArticle = (data: ArticleData, saveToDB = true) => {
  if (saveToDB) {
    // TODO: update database
  }

  const article = new Article(data);

  store.setKey(article.getId(), article);

  return article;
};

export const deleteArticle = (id: string, saveToDB = true) => {
  if (saveToDB) {
    // TODO: update database
  }

  const article = readArticle(id);
  const articles = { ...store.get() };

  delete articles[id];
  store.set(articles);

  return article;
};

export const readArticle = (id: string) => {
  return store.get()[id];
};

export const updateArticle = (
  id: string,
  data: Partial<ArticleData>,
  saveToDB = true,
) => {
  if (saveToDB) {
    // TODO: update database
  }

  const article = readArticle(id).clone();

  store.setKey(id, article.update(data));

  return article;
};
