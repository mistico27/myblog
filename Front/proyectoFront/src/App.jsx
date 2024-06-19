import { useState } from 'react'
import { Inicio } from './components/pages/inicio'
import { Articulos } from './components/pages/articulos'
import { Crear} from './components/pages/crear'
import { Rutas } from './routing/rutas'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='layout'>
          <Rutas></Rutas>
      </div>
    </>
  )
}

export default App
