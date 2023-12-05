import { map } from "nanostores";

import { Article } from "~/components/Model";

export type ArticleMap = Record<string, Article>;

class Articles {
  private static articles: ArticleMap;

  public static getArticles() {
    if (Articles.articles === undefined) {
      Articles.articles = {};

      for (const article of [
        new Article({ title: "title 1", content: "content 1" }),
        new Article({ title: "title 2", content: "content 2" }),
        new Article({ title: "title 3", content: "content 3" }),
      ]) {
        Articles.articles[article.id] = article;
      }
    }

    return Articles.articles;
  }
}

export const articleStore = map({
  "1": new Article({ title: "title 1", content: "content 1" }),
});
