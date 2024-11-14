import React, { useEffect, useState } from "react";

export const PruebaComponente = () =>{
    const[usuario, setUsuario] = useState("Erick Ruiz")
    const[fecha, setFecha] = useState("01-01-2000")

    const modUsuario = e =>{
        setUsuario(e.target.value)
    }

    const modFecha = e =>{
        setFecha(Date.now())
    }

    useEffect(() =>{
        console.log("Se cargo el componente")
    },[])

    return(
        <div>
            <h3>El efecto - Hook useEffect</h3>
            <strong>{usuario}</strong>
            <br></br>
            <strong>{fecha}</strong>
            <br></br>
            <input type="text" onChange={modUsuario} placeholder="Ingresa nombre"></input>
            <button onClick={modFecha}>Cambiar fecha</button>
        </div>
    )
}