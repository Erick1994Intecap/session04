import React, { useEffect, useState } from "react";

function Temporizador({tiempoInicial}){
    const[tiempo, setTiempo] = useState(tiempoInicial)

    useEffect(()=>{
        if (tiempo<=0) return;

        const temporizador = setInterval(()=>{
            setTiempo((prevTiempo) => prevTiempo-1);
        },1000)

        return() => clearInterval(temporizador);
    },[tiempo])

    return(
        <div>
            <h1>cuenta regresiga: {tiempo} segundos</h1>
            {tiempo == 0 && <p>Tiempo Terminado</p>}
        </div>
    )
}

export default Temporizador