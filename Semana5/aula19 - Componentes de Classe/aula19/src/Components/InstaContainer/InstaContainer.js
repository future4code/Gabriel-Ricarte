import React from 'react';
import './InstaContainer.css';

function InstaContainer(props){
    return(
        <div className="main">
            <header>
                { <h3>{props.nomeAutor}</h3>}
            </header>
            <section>
                <img className="imagemPost" src={props.imagemPost}
                />
            </section>
            <section>
                <div className="imagemLike">
                    <img className="curtidas" src={props.imagemCurtidas} onClick="mudarImagem()" />
                    <p>{props.curtidasNumero}</p>
                </div>
                <div className="comentarioPost">
                    
                    <img onClick={props.mostrarInput} src={props.imagemComentario}/>
                    <p>{props.comentarioNumero}</p>

                </div>
            </section>

        </div>

    )

}

export default InstaContainer;