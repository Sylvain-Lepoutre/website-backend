import Modal from "react-modal";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  articleTitle: string;
  operation: "créer" | "modifier" | "supprimer";
};

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  articleTitle,
  operation,
}: ConfirmationModalProps) => {
  return (
    <Modal
      className="bg-green-700 w-1/2  mx-auto h-1/10 my-10 text-center p-10 rounded-md"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
    >
      <h2>
        Êtes-vous sûr de vouloir {operation} l’article {articleTitle}?
      </h2>
      <button onClick={onConfirm}>Confirmer</button>
      <button onClick={onClose}>Annuler</button>
    </Modal>
  );
};
