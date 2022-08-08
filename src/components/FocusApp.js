import React from 'react';
import { useState, useRef } from "react";

const FocusApp = () => {
    const [text, setText]=useState('')
    const inputRef=useRef();

    const handleFocus=()=>{
        //normalmente es recomendable, es declarar una const que almacene el current de la referencia
        //el inputRef
        const input=inputRef.current
        //podemmos acceder y mutar sus propiedes de la manera clasica
        console.log(input)
        input.focus();
            //tener cuidado con esto, porque no se actualiza el state y puede haber problemas
            //input.value="Valor mutado";
            //ahora si se actualiza
            //setText(input.value);

        //console.log(input.value);//nos mmuestra todas las propiedades del elemento input
        //la referencia se va a guardar en el atribto current y acceder a sus diferentes atributos


        // const input=document.getElementById('input');
        // input.value='Texto mutado'
        // console.log(input)
        // input.focus();
    }

    return (
        <div>
            <input type='text' ref={inputRef} value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={handleFocus}>Focus input</button>
        </div>
    );
}

export default FocusApp;
