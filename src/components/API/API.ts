import { Article, type ArticleData } from "~/components/Model";
import { articleStore, type ArticleMap } from "~/stores";

import { Memory } from "./Memory";

export interface API {
  createArticle(data: ArticleData): Article;
  deleteArticle(id: string): Article;
  readArticle(id: string): Article;
  readArticles(): ArticleMap;
  updateArticle(id: string, data: Partial<ArticleData>): Article;
}

export const useAPI = (): API => {
  return Memory.getInstance(articleStore);
};
