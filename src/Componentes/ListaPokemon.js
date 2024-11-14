import React, { useEffect, useState } from "react";

function ListaPokemon(){
    const[pokemon, setPokemon] = useState([]);
    const[cargando, setCargando] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((response) => response.json())
        .then((data)=>{
            setPokemon(data.results)
            setCargando(false)
        })

        .catch((error) =>{
            setError(error)
            setCargando(false)
        })
    },[])

    return(
        <div>
            <h1>Lista Pokemon</h1>
            <ul>
                {pokemon.map((poke, index)=>(
                    <li key={index}>{poke.name}</li>

                ))}
            </ul>
        </div>
    )
}


export default ListaPokemon