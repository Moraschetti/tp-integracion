import React, {useState, useEffect} from "react";
import './lista.css';

const Lista = () =>{
// const personas = ["Lean","Mati","Ana","Emi"];
    
    const [personas,setPersonas] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3000/lista')
        .then(resp => resp.json()).then(data =>setPersonas(data))
        .then(data => setPersonas(data))
        .catch(error=>{
            console.log('no se pudo obtener las personas',error);
        });
    },[] );

    return (
       <>
       <h1>Personas</h1>
       <ul>
        {personas.map((persona,index)=>(
            <li key={index}>{persona.nombre}{persona.apellido}{persona.nacionalidad}</li>
        ))}
       </ul>
       </>
    )
}

export default Lista;