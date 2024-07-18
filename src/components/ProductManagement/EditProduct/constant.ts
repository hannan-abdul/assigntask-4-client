export interface ModalFormProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  newdata: {
    name: string;
    description: string;
    category: string;
    image: string;
    price: string;
    quantity: string;
    _id: string;
  };
}

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
