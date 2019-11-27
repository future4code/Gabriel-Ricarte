import React from 'react';
import  './BigCard.css';


export function BigCard(props){
    return(
        <div className="main">
            <img src={props.imagem} alt=""/>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.paragrafo}</p>
            </div>
        </div>
        
    )
}



