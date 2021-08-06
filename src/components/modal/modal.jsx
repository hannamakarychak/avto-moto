import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";
import { useState } from "react";
import Button from "../button/button";

const Modal = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <Button className="details__add-review" ghost onClick={open}>
        оставить отзыв
      </Button>
      <DialogOverlay
        style={{ background: "rgb(0.5 229,229,229)" }}
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent isOpen={showDialog} aria-label="Review Form">
          <button className="close-button" onClick={close}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
          <p>Hello there. I am a dialog</p>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default Modal;
