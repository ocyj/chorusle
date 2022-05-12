import "./Modal.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children?: React.ReactElement<any, string> | string;
  header: string;
}

function Modal({ show, children, onClose, header }: ModalProps) {
  return (
    <div className={"modal " + (show ? "display-block" : "display-none")}>
      <section className="modal-main">
        <h2>{header}</h2>
        <div className="content">{children}</div>
        <div className="actions">
          <button className="toggle-button" onClick={(e) => onClose()}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}

export default Modal;
