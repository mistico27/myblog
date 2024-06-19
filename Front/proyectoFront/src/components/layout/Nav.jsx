import React from 'react'
import {NavLink} from 'react-router-dom'

export const Nav=()=>{
    return(
        <nav className="nav">
        <ul>
            <li><NavLink to="/inicio">Inicio</NavLink></li>
            <li><NavLink to="/articulos">Articulos</NavLink></li>
            <li><NavLink to="/crear-articulos">Crear Articulo</NavLink></li>

        </ul>
    </nav>
    )
}