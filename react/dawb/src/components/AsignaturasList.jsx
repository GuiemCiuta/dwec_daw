import { useState, useEffect } from "react";
import "./AsignaturasList.css";
import { useFetch } from "../hooks/useFetch";

export default function AsignaturasList({refrescar}) {
  const [url, setUrl] = useState("http://localhost:3000/asignaturas");

  const { datos: asignaturas, cargando, error } = useFetch(url, null, refrescar);

  return (
    <div className="asignatura-lista">
      <h2>Listado de Asignaturas</h2>

      {cargando && <div>Cargando asignaturas...</div>}
      {error && <div>{error}</div>}

      {asignaturas && <ul>
        {asignaturas.reverse().map(asignatura => 
          <li key={asignatura.id}>
            <h3>{asignatura.nombre}</h3>

            <p>Horas totales: {asignatura["horas totales"]}</p>
          </li>
        )}
      </ul>}
    </div>
  );
}
