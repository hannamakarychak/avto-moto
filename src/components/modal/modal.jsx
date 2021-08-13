import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";
import Form from "../form/form";

import "./modal.scss";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <div>
      <DialogOverlay isOpen={isOpen} onDismiss={onClose} className="modal-overlay">
        <DialogContent aria-label="Review Form" className="modal" autoFocus={false}>
          <button className="modal__close-button" onClick={onClose}>
            <VisuallyHidden>Close</VisuallyHidden>
            <svg width="15" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.64 15.01L7.505 8.865 1.37 15.01 0 13.64l6.145-6.135L0 1.37 1.37 0l6.135 6.145L13.64.01 15 1.37 8.865 7.505 15 13.64l-1.36 1.37z"
                fill="#9F9E9E"
              />
            </svg>
          </button>
          <h3 className="modal__title">Оставить отзыв </h3>
          <Form onSubmit={onSubmit} />
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default Modal;
