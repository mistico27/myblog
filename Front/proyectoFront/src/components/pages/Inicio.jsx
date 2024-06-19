import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio=()=>{
    return(
        <div className='jumbo'>
           <h1>First Blog with React</h1>     
           <p>Blog Desarrollado con MERN Stack</p> 
           <p>Blog Desarrollado con MERN StackII</p> 

           <Link to="/articulos" className='button'>Ver Articulos</Link>
        </div>
    )
}

export default Inicio