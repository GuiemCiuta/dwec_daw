import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function AsignaturasForm({refrescar, setRefrescar}) {
  const formDataRef = useRef({ nombre: "", "horas totales": 0 });
  const [url, setUrl] = useState(null);
  
  const {datos: result, cargando, error} = useFetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataRef.current)
  });

  function handleSubmit(e) {
    e.preventDefault();

    setUrl("http://localhost:3000/asignaturas");
  }

  function handleChangeTitle(e) {
    formDataRef.current = {...formDataRef.current, nombre: e.target.value};
  }

  function handleChangeHours(e) {
    formDataRef.current = {...formDataRef.current, "horas totales": e.target.value};
  }

  useEffect(function() {
    if(result) {
      setRefrescar(!refrescar);
    }

  }, [result]);

  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añade una nueva asignatura</h2>

      <input type="text" onInput={handleChangeTitle} placeholder="Nombre de la asignatura" />
      <input type="number" onInput={handleChangeHours} placeholder="Número de horas" />

      <button type="submit">Enviar</button>
    </form>
  );
}
