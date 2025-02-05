import { useState } from 'react'
import './App.css'
import ListCartas from './ListCartas'


function App() {
  const [turnos, setTurnos] = useState(0);

  return (
    <div>
      <h1>Mmeemmoorryy</h1>
      <p>Turnos: {turnos}</p>
      <ListCartas setTurnos={setTurnos} />
    </div>
  )
}

export default App
