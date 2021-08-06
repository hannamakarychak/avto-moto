import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";
import Form from "../form/form";

const Modal = ({ isOpen, onClose }) => {
  return (
    <DialogOverlay
      style={{ background: "rgb(0.5 229,229,229)" }}
      isOpen={isOpen}
      onDismiss={onClose}
    >
      <DialogContent isOpen={isOpen} aria-label="Review Form">
        <button className="close-button" onClick={onClose}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <Form />
      </DialogContent>
    </DialogOverlay>
  );
};

export default Modal;
