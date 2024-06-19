import { useState } from 'react'

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
