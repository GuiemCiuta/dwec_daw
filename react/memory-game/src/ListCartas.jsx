import { useEffect, useState } from "react";
import "./ListCartas.css";
import Carta from "./components/Carta";

function shuffle(arr) {
  let elements = [...arr];
  const result = [];

  while (elements.length) {
    const index = Math.floor(Math.random() * elements.length);
    const [element] = elements.splice(index, 1);
    result.push(element);
  }

  return result;
}

export default function ListCartas({setTurnos}) {
  // El array está colocado dos veces para tener las imágenes dos veces
  const [cartas, setCartas] = useState([]);
  const [eleccion1, setEleccion1] = useState(null);
  const [eleccion2, setEleccion2] = useState(null);
  const [deshabilitado, setDeshabilitado] = useState(false);

  const imagenes = [
    { src: "/img/c.png", emparejada: false },
    { src: "/img/java.png", emparejada: false },
    { src: "/img/javascript.png", emparejada: false },
    { src: "/img/php.png", emparejada: false },
    { src: "/img/python.webp", emparejada: false },
    { src: "/img/rust.png", emparejada: false },
  ];

  function mezclaCartas() {
    resetTurno();
    setTurnos(0);
    setCartas(
      shuffle([...imagenes, ...imagenes]).map((imagen) => {
        return { ...imagen, id: Math.floor(Math.random() * 10_000) };
      })
    );
  }

  function handleEleccion(carta) {
    if (eleccion1) {
      setEleccion2(carta);
    } else {
      setEleccion1(carta);
    }
  }

  function resetTurno() {
    setEleccion1(null);
    setEleccion2(null);
    setDeshabilitado(false);
  }

  useEffect(function() {
    mezclaCartas();
  }, []);

  useEffect(
    function () {
      if (eleccion1 && eleccion2) {
        if(eleccion1.id === eleccion2.id) {
          console.log("No intentes hacer trampas.");
          return;
        }

        setDeshabilitado(true);
        setTurnos(turnosPrevios => turnosPrevios +1);

        if (eleccion1.src === eleccion2.src) {
          console.log("Son iguales");
          setCartas(function (cartasPrevias) {
            return cartasPrevias.map(function (carta) {
              if (carta.src === eleccion1.src) {
                return { ...carta, emparejada: true };
              } else {
                return carta;
              }
            });
          });
          resetTurno();
        } else {
          console.log("No son iguales");
          setTimeout(resetTurno, 1000);
        }
      }
    },
    [eleccion1, eleccion2]
  );

  useEffect(mezclaCartas, []);

  return (
    <>
    <div className="ListCartas">
      {cartas.map((carta) => (
        <Carta
          key={carta.id}
          handleEleccion={handleEleccion}
          carta={carta}
          girada={
            carta === eleccion1 || carta === eleccion2 || carta.emparejada
          }
          deshabilitado={deshabilitado}
        />
      ))}
    </div>
    <button onClick={mezclaCartas}>Mezclar cartas</button>
    </>
  );
}
