import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ children, handleCerrar, esExterno }) {
  return (
    <div>
      <div className="modal-fondo">
        <div
          className="modal"
          style={{
            border: "4px solid",
            borderColor: esExterno ? "#ff4500" : "blueviolet",
          }}
        >
          {children}

          <button
            className={esExterno ? "btn-externo" : "btn-interno"}
            onClick={handleCerrar}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
