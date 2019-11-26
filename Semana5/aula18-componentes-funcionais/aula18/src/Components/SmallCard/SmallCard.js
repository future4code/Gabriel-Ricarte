import React from 'react';
import './SmallCard.css';


export function SmallCard(props){
    return(
        <article>
            <img src={props.imagem} alt=""/>
            <h3>{props.titulo}</h3>
            <p>{props.paragrafo}</p>
        </article>
    )
}

