import React from 'react';
import { useState, useRef } from "react";
import Swal from 'sweetalert2'

const CopyApp = () => {
    const [text, setText]=useState('');
    const copyRef=useRef();

    const handleCopy=()=>{
        const copyInput=copyRef.current;
        //console.log(copyInput.value)
        copyInput.select();//seleciona el texto/value del input
        document.execCommand('copy');
        Swal.fire('Text copied')
    }

    return (
        <div>
            <input type='text' value={text} ref={copyRef} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleCopy}>Copy input</button>
        </div>
    );
    
}

export default CopyApp;


