import { useState, type FormEvent } from "react";
import { useAPI } from "~/components/API";

export const ArticleCreate = () => {
  const api = useAPI();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(title, content);

    api.createArticle({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Ajouter un titre</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="content">Ajouter un contenu</label>
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>

      <button type="submit">Créer l’article</button>
    </form>
  );
};
