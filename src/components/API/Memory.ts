import type { MapStore } from "nanostores";

import { Article, type ArticleData } from "~/components/Model";
import type { ArticleMap } from "~/stores";

import type { API } from "./API";

type Store = MapStore<ArticleMap>;

export class Memory implements API {
  protected articleStore: Store;

  private static instance: Memory;

  private constructor(store: Store) {
    this.articleStore = store;
  }

  public static getInstance(store: Store) {
    if (Memory.instance === undefined) {
      Memory.instance = new Memory(store);
    }

    return Memory.instance;
  }

  public createArticle(data: ArticleData) {
    const article = new Article(data);

    this.articleStore.setKey(article.id, article);

    return article;
  }

  public deleteArticle(id: string) {
    const article = this.readArticle(id);
    const articles = { ...this.readArticles() };

    delete articles[id];
    this.articleStore.set(articles);

    return article;
  }

  public readArticle(id: string) {
    const article = this.readArticles()[id];

    if (article === undefined) {
      throw new Error(""); // TODO: error message
    }

    return article;
  }

  public readArticles() {
    return this.articleStore.get();
  }

  public updateArticle(id: string, data: Partial<ArticleData>) {
    const article = this.readArticle(id).clone();

    this.articleStore.setKey(id, article.update(data));

    return article;
  }
}
