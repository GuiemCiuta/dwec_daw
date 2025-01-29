import { useState } from 'react';
import './App.css';
import AsignaturasList from './components/AsignaturasList';
import AsignaturasForm from './components/AsignaturasForm';
import Modal from './components/Modal';

function App() {

  const [muestraAsignaturas, setMuestraAsignaturas] = useState(true);
  const [refrescar, setRefrescar] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  function handleClick() {
    setMuestraAsignaturas(asignaturas => !asignaturas);
  }

  return (
    <div className="App">
      <h1>Asignaturas</h1>

      {mostrarModal &&
        <Modal handleCerrar={() => setMostrarModal(false)}>
          <AsignaturasForm handleCerrar={() => setMostrarModal(false)} refrescar={refrescar} setRefrescar={setRefrescar} />
        </Modal>
      }

      <button onClick={() => setMostrarModal(true)}>Mostrar modal</button>

      <button onClick={handleClick}>Toggle asignaturas</button>
      {muestraAsignaturas && <AsignaturasList refrescar={refrescar} />}
    </div>
  );
}

export default App;
