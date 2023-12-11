import Modal from "react-modal";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  articleTitle: string;
};

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  articleTitle,
}: ConfirmationModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
    >
      <h2>Êtes-vous sûr de vouloir supprimer l’article {articleTitle}?</h2>
      <button onClick={onConfirm}>Confirmer</button>
      <button onClick={onClose}>Annuler</button>
    </Modal>
  );
};