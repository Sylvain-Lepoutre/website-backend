// import { nanoid } from "nanoid";

export type Data = {
  title: string;
  content: string;
};

export class Article {
  protected id: string;
  protected title: string;
  protected content: string;
  protected createdAt: Date;
  protected updatedAt: Date;

  public constructor(data: Data) {
    // this.id = nanoid();
    this.id = "1";
    this.title = data.title;
    this.content = data.content;
    this.createdAt = new Date();
    this.updatedAt = this.createdAt;
  }

  public clone() {
    const clone = new Article({ title: this.title, content: this.content });

    clone.id = this.id;
    clone.createdAt = this.createdAt;
    clone.updatedAt = this.updatedAt;

    return clone;
  }

  public update(data: Partial<Data>) {
    this.title = data.title ?? this.title;
    this.content = data.content ?? this.content;
    this.updatedAt = new Date();

    return this;
  }

  public get content() {
    return this.content;
  }

  public get createdAt() {
    return this.createdAt;
  }

  protected set createdAt(date: Date) {
    this.createdAt = date;
  }

  public get id() {
    return this.id;
  }

  protected set id(id: string) {
    this.id = id;
  }

  public get updatedAt() {
    return this.updatedAt;
  }

  protected set updatedAt(date: Date) {
    this.updatedAt = date;
  }

  public get title() {
    return this.title;
  }
}
