import React from 'react'
import { useState,useEffect } from 'react'


export const Articulos=()=>{

    const[articulos,setArticulos]=useState([]);
    useEffect(()=>{
        conseguirArticulos();
    })

    const conseguirArticulos =async()=>{
        const url= "http://localhost:8087/api/articles";
        let peticion = await fetch(url,{
            method:"GET"
        });
        let datos= await peticion.json();
            
        setArticulos(datos.articleQuery);        

        
    }


    return(
        <>   
        {articulos.map(articles =>{
            return(
                <article key={articles._id} className="articulo-item">
                <div className='mascara'>
                    <img src="https://www.mundodeportivo.com/us/files/article_main_microformat/files/fp/uploads/2023/01/05/63b7586658021.r_d.3655-1560-3000.jpeg"/>
                </div>
                <div className='datos'>
                    <h3 className="title">{articles.title}</h3>
                    <p className="description">{articles.content}</p>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </div>
            </article>
            )
        })}    


         </>
    )
}