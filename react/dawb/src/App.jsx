import { useState } from 'react';
import './App.css';
import AsignaturasList from './components/AsignaturasList';
import AsignaturasForm from './components/AsignaturasForm';

function App() {

  const [muestraAsignaturas, setMuestraAsignaturas] = useState(true);
  const [refrescar, setRefrescar] = useState(false);

  function handleClick() {
    setMuestraAsignaturas(asignaturas => !asignaturas);
  }

  return (
    <div className="App">
      <h1>Asignaturas</h1>

      <AsignaturasForm refrescar={refrescar} setRefrescar={setRefrescar} />

      <button onClick={handleClick}>Toggle asignaturas</button>
      {muestraAsignaturas && <AsignaturasList refrescar={refrescar} />}
    </div>
  );
}

export default App;
