import React from 'react';
import './ImageButton.css';


export function ImageButton(props){
    return(
        <button>
            <img src={props.imagem} alt=""/>
            <p>{props.paragrafo}</p>
        </button>
    )
}

export default ImageButton;