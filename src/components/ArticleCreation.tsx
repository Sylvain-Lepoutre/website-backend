import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEventHandler, type FormEvent } from "react";

import CreateModal from "../ui/ArticleDashboard/ArticleCreateModal";

const CREATE_ARTICLE = gql`
  mutation CreateArticle($title: String!, $content: String!, $createdAt: DateTime!, $description: String!) {
    newArticle(title: $title, content: $content, createdAt: $createdAt, description: $description) {
      id
      title
      content
      createdAt
      description
    }
  }
`;

const ArticleCreation = () => {
  //gestion de la modale
  const [open, setOpen] = useState(false);

  const handleCloseCreationModal = () => setOpen(false);
  const handleOpenCreationModal = () => {
    setOpen(true);
  };

  const [createArticle] = useMutation(CREATE_ARTICLE);

  const [title] = useState<string>("");
  const [content] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>(new Date().toISOString().substring(0, 10));
  const [description, setDescription] = useState<string>("");

  //écouteur d'evenement au format React classique
  const handleCreatedAt: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCreatedAt(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  //a la soumission formulaire appel de la requete POST définie plus haut
  const handleCreation = (event: FormEvent) => {
    event.preventDefault();

    void (async () => {
      const response = await createArticle({
        variables: {
          title,
          content,
          description,
          createdAt: new Date(createdAt),
        },
      });

      window.location.reload();
      console.log(response);
    })();
  };

  return (
    <div className="mx-28 mt-10 text-[#0B3168]">
      <header>
        <h1 className="text-3xl font-bold underline mb-10">Créer votre article</h1>
      </header>
      <div>
        <p className="text-xl² mb-5 font-bold">Titre de votre article :</p>
        <div>
          {/* Editeur de texte riche */}
        </div>
        <p className="text-xl² mt-16 mb-5 font-bold">Contenu de votre article :</p>
        <div>
          {/* Editeur de texte riche */}
        </div>
        <label className="flex flex-col mt-16 text-l font-bold">
          Ajouter une description :
          <input
            type="text"
            className="border-[1px] border-[#0B3168] rounded-md h-8 mt-4 font-normal"
            value={description}
            onChange={handleDescription}
          />
        </label>
        <label className="border-[1px] border-[#0B3168] rounded-lg p-2">
          Date de creation
          <input className="mt-16 pl-2" type="date" value={createdAt} onChange={handleCreatedAt} />
        </label>
        <div className="my-16 flex">
          <button className="p-2 border-[1px] font-s border-[#0B3168] rounded lg mr-10 hover:scale-105 transition ease-in delay-75">
            ajouter une image
          </button>

          <button
            className="bg-[#0B3168] rounded-lg p-2 text-white hover:scale-105 transition ease-in delay-75"
            onClick={handleOpenCreationModal}
            type="button"
          >
            Valider
          </button>
        </div>
        {open && (
          <CreateModal
            title={title}
            open={open}
            titleCloseButton="Fermer"
            titleCreateButton="Creer"
            styles="absolute top-1/2 bg-red-700 text-white text-2xl h-[16rem] w-auto p-4 rounded-lg flex flex-col items-center justify-center"
            onClose={handleCloseCreationModal}
            onCreate={handleCreation}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleCreation;
