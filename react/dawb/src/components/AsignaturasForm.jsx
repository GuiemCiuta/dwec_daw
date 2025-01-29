import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function AsignaturasForm({refrescar, setRefrescar, handleCerrar}) {
  const [formData, setFormData] = useState({nombre: "", "horas totales": ""});
  const [url, setUrl] = useState(null);
  
  const {datos: result, cargando, error} = useFetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  
  function handleSubmit(e) {
    e.preventDefault();
    
    setUrl("http://localhost:3000/asignaturas");
  }
  
  function handleChangeTitle(e) {
    setFormData({...formData, nombre: e.target.value});
  }

  function handleChangeHours(e) {
    setFormData({...formData, "horas totales": e.target.value});
  }
  
  useEffect(function() {
    if(result) {
      setFormData({nombre: "", "horas totales": ""});
      handleCerrar();
      setRefrescar(!refrescar);
    }

  }, [result]);

  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añade una nueva asignatura</h2>

      <input type="text" value={formData.nombre} onInput={handleChangeTitle} placeholder="Nombre de la asignatura" />
      <input type="number" value={formData["horas totales"]} onInput={handleChangeHours} placeholder="Número de horas" />

      <button type="submit">Enviar</button>
    </form>
  );
}
