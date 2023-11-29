import { gql, useMutation, useQuery } from "@apollo/client";
import { useCallback, useEffect, useState, type ChangeEventHandler, type FormEvent } from "react";

import ArticleUpdateModal from "../../../ui/ArticleDashboard/ArticleUpdateModal";

type Data = {
  findArticle: Article[];
};

type Article = {
  id?: string;
  title?: string;
  content?: string;
  createdAt?: string;
  description?: string;
};

type Props = {
  params: {
    id: string;
  };
};

const ArticleUpdate = ({ params }: Props) => {
  const ARTICLE = gql`
    query findArticle($id: Cuid!) {
      findArticle(id: $id) {
        id
        title
        content
        createdAt
        description
      }
    }
  `;

  // requete UPDATE
  const UPDATE_ARTICLE = gql`
    mutation updateArticle(
      $id: Cuid!
      $title: String!
      $content: String!
      $createdAt: DateTime!
      $description: String!
    ) {
      updateArticle(id: $id, title: $title, content: $content, createdAt: $createdAt, description: $description) {
        id
        title
        content
        createdAt
        description
      }
    }
  `;

  const { data, error, loading } = useQuery<Data>(ARTICLE, {
    variables: {
      id: params.id,
    },
  });

  const handleUpdate = (event: FormEvent) => {
    event.preventDefault();

    void (async () => {
      const response = await updateArticle({
        variables: {
          id: params.id,
          title,
          content,
          createdAt: new Date(createdAt),
          description,
        },
      });

      window.location.reload();
      console.log(response);
    })();
  };

  const [updateArticle] = useMutation(UPDATE_ARTICLE);

  //gestion de la modale
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  //gestion du re-render du composant lors du clic des bouton de la toolbar
  const [changed, setChanged] = useState(false);

  const handleCreatedAt: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCreatedAt(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleToolbarEvent = useCallback(() => {
    setChanged(!changed);
  }, [changed]);

  const formatedDate = data?.findArticle[0]?.createdAt?.slice(0, 10) ?? undefined;

  useEffect(() => {
    if (data?.findArticle[0]) {
      setTitle(data?.findArticle[0].title ?? "");
      setContent(data?.findArticle[0].content ?? "");
      setCreatedAt(formatedDate ?? "");
      setDescription(data?.findArticle[0].description ?? "");
    }
  }, [handleToolbarEvent, data?.findArticle, formatedDate]);

  return (
    <>
      {error !== undefined ? (
        <p>{error.message}</p>
      ) : loading ? (
        <p>Chargement...</p>
      ) : (
        <div className="mx-28 mt-10 text-[#0B3168]">
          {data !== undefined ? (
            <>
              <header>
                <h1 className="text-3xl font-bold underline mb-10">Modifier votre article</h1>
              </header>
              <div>
                <p className="text-xl² mb-5 font-bold">Titre de votre article</p>

                <div>
                  {/* Editeur de texte riche */}
                </div>

                <p className="text-xl² my-16 font-bold">Contenu de votre article</p>
                <div>
                  {/* Editeur de texte riche */}
                </div>
                <label className="flex flex-col mt-16 text-l font-bold">
                  Modifier la description :
                  <input
                    type="text"
                    className="border-[1px] border-[#0B3168] rounded-md h-8 mt-4 font-normal"
                    value={description}
                    onChange={handleDescription}
                  />
                </label>
                <input className="mt-20" type="date" value={createdAt} onChange={handleCreatedAt} />

                <button onClick={handleOpenModal} type="button">
                  Valider
                </button>

                {open && (
                  <ArticleUpdateModal
                    title={title}
                    open={open}
                    titleCloseButton="Fermer"
                    titleCreateButton="Mettre à jour"
                    styles="absolute top-1/2 bg-yellow-600 text-white text-2xl h-[16rem] w-auto p-4 rounded-lg flex flex-col items-center justify-center"
                    onClose={handleCloseModal}
                    onUpdate={handleUpdate}
                  />
                )}
              </div>
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

export default ArticleUpdate;
