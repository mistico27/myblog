import React from 'react'
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import { Inicio } from '../components/pages/inicio' 
import { Articulos } from '../components/pages/articulos'
import { Header } from '../components/layout/Header'
import { Nav } from '../components/layout/Nav'
import { Sidebar } from '../components/layout/Sidebar'

export const Rutas=()=>{
    return(
        <BrowserRouter>
            {/*Layout*/}
            <Header />
            <Nav />
            <Sidebar/>


            {/*Contenido central y rutas*/}
            <section id="content" className='content'>
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/inicio" element={<Inicio/>} />
                    <Route path="/articulos" element={<Articulos/>} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}