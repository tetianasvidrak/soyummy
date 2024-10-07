import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, onClose }) => {
  const onCloseModal = (e) => {
    if (e.target.id === "modal") {
      onClose();
    }
  };

  return createPortal(
    <div
      id="modal"
      className="bg-black/80 z-10 flex justify-center items-center fixed inset-0"
      onClick={onCloseModal}
    >
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
