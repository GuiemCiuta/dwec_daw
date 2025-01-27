import { useEffect, useState } from "react";

export const useFetch = (url, options, refetch) => {
  const [datos, setDatos] = useState();
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      if (!url) return;

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setDatos(json);
        setCargando(false);
        setError(null);
      } catch (err) {
        console.error(err);
        setCargando(false);
        setError("No se pudo obtener los datos");
      }
    };

    fetchData();
  }, [url, refetch]);

  return { datos, cargando, error };
};
