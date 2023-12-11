import { nanoid } from "nanoid";

export type Data = {
  id?: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Article {
  protected id: string;
  protected title: string;
  protected content: string;
  protected createdAt: Date;
  protected updatedAt: Date;

  public constructor(data: Data) {
    this.setId(data.id ?? nanoid());
    this.setTitle(data.title);
    this.setContent(data.content);
    this.setCreatedAt(data.createdAt ?? new Date());
    this.setUpdatedAt(data.updatedAt ?? this.getCreatedAt());
  }

  public clone() {
    const clone = new Article({
      id: this.getId(),
      title: this.getTitle(),
      content: this.getContent(),
      createdAt: this.getCreatedAt(),
      updatedAt: this.getUpdatedAt(),
    });

    return clone;
  }

  public update(data: Partial<Data>) {
    this.setTitle(data.title ?? this.getTitle());
    this.setContent(data.content ?? this.getContent());
    this.setUpdatedAt(new Date());

    return this;
  }

  public static fromJSON(json: string) {
    const { id, title, content, createdAt, updatedAt } = JSON.parse(
      json,
    ) as Data;

    return new Article({
      id,
      title,
      content,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    });
  }

  public toJSON() {
    return JSON.stringify({
      id: this.getId(),
      title: this.getTitle(),
      content: this.getContent(),
      createdAt: this.getCreatedAt().toJSON(),
      updatedAt: this.getUpdatedAt().toJSON(),
    });
  }

  public getContent() {
    return this.content;
  }

  public getCreatedAt() {
    return this.createdAt;
  }

  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }

  public getUpdatedAt() {
    return this.updatedAt;
  }

  protected setContent(content: string) {
    this.content = content;
  }

  protected setCreatedAt(date: Date) {
    this.createdAt = date;
  }

  protected setId(id: string) {
    this.id = id;
  }

  protected setTitle(title: string) {
    this.title = title;
  }

  protected setUpdatedAt(date: Date) {
    this.updatedAt = date;
  }
}
