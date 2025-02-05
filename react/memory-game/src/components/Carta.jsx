import "./Carta.css";

export default function Carta({ carta, handleEleccion, girada, deshabilitado }) {
  function handleClick(e) {
    if(!deshabilitado) {
      handleEleccion(carta);
    }
  }

  return (
    <div className="card">
      <div className={girada ? "flipped" : ""}>
        <img className="front" src={carta.src} />
        <img className="back" src="/public/img/cubierta.webp" onClick={handleClick} />
      </div>
    </div>
  );
}
