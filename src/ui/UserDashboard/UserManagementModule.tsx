// import { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";

import UserManagementLine from "./UserManagementLine";
// import DeleteModal from "./DeleteModal";

// type DeleteArticleData = {
//   deleteuser: {
//     id?: string;
//     title?: string;
//     content?: string;
//     createdAt?: string;
//   };
// };

type GetUserData = {
  users: User[];
};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

// export type OpenDeleteModal = (cuid: string, title: string) => void;

// export const DELETE_ARTICLE = gql`
//   mutation DeleteArticle($id: Cuid!) {
//     deleteuser(id: $id) {
//       id
//     }
//   }
// `;

export const GET_USER_DATA = gql`
  query GetUserData {
    users {
      id
      firstName
      lastName
      email
      phone
      password
    }
  }
`;

export default function UserManagementModule() {
  // const [deleteModalState, setDeleteModalState] = useState({
  //   cuid: "",
  //   isOpen: false,
  //   title: "",
  // });

  const { data, error, loading } = useQuery<GetUserData>(GET_USER_DATA);
  // const [deleteArticle] = useMutation<DeleteArticleData>(DELETE_ARTICLE);

  // const handleDeleteModalClose = () => {
  //   setDeleteModalState({ ...deleteModalState, isOpen: false });
  // };

  // const handleDeleteModalDelete = async () => {
  //   const response = await deleteArticle({
  //     variables: {
  //       id: deleteModalState.cuid,
  //     },
  //   });

  //   window.location.reload();
  //   console.log(response);
  // };

  // const openDeleteModal: OpenDeleteModal = (cuid, title) => {
  //   setDeleteModalState({ ...deleteModalState, cuid, isOpen: true, title });
  // };

  return (
    <>
      <div className="mt-10">
        {error !== undefined ? (
          <p>{error.message}</p>
        ) : loading ? (
          <p>Chargement...</p>
        ) : (
          <table className="border-y-2 border-y-black">
            <caption className="text-2xl font-bold mb-6 ">Tableau de gestion des users</caption>
            <thead className="border-b-2 border-b-black">
              <tr className="flex border-y-[1px] border-t-black w-full justify-around items-center">
                <th className="px-10 py-2">Titre</th>
                <th className="ml-16">Contenu</th>
                <th>Date de création</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data !== undefined
                ? data.users.map((user) => (
                    <UserManagementLine
                      key={user.id}
                      // cuid={user.id}
                      firstName={user.firstName}
                      lastName={user.lastName}
                      email={user.email}
                      phone={user.phone}
                      password={user.password}
                    />
                  ))
                : null}
            </tbody>
          </table>
        )}
      </div>

      {/* {deleteModalState.isOpen && (
        <DeleteModal
          open={deleteModalState.isOpen}
          title={deleteModalState.title}
          titleCloseButton="Fermer"
          titleDeleteButton="Supprimer"
          styles="absolute top-1/2 left-1/4"
          onClose={handleDeleteModalClose}
          // onDelete={() => void (async () => await handleDeleteModalDelete())()}
        />
      )} */}
    </>
  );
}
