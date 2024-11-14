import React, { useEffect, useState } from "react";

function ListaPelicula(){
    const[pelicula, setPelicula] = useState([]);
    const[cargando, setCargando] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data)=>{
            setPelicula(data)
            setCargando(false)
        })

        .catch((error) =>{
            setError(error)
            setCargando(false)
        })
    },[])

    return(
        <div>
            <h1>Lista Peliculas</h1>
            <ul>
                {pelicula.map((mov)=>(
                    <li key={mov.id}>{mov.name}</li>

                ))}
            </ul>
        </div>
    )
}


export default ListaPelicula