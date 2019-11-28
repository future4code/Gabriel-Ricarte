import React from 'react';
import styled from "styled-components";

const mainDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(36, 34, 34);
    width: 30%;
    margin: 15px;

`
const headerH3 = styled.h3`
    margin-left: 40px;

`
const imgHeader = styled.img`

`
const imagemLike = styled.div`
margin-left:5px;
display: flex;
align-items: center;

`
const curtidas = styled.img`

`
const comentarioPost = styled.div`
margin-right:5px;
display: flex;
align-items: center;

`
const sectionDiv = styled.div`
    display: flex;
    justify-content: space-between;
`




function InstaContainer(props){
    return(
        <mainDiv>
            <header>
                <headerH3>{props.nomeAutor}</headerH3>    
            </header>
            <sectionDiv>
               <imgHeader
                src={props.imagemPost}></imgHeader>
            </sectionDiv>
            <sectionDiv>
                <imagemLike>
                    <img src={props.imagemCurtidas} onClick="mudarImagem()" />
                    <p>{props.curtidasNumero}</p>
                </imagemLike>
               <comentarioPost>
                     <img onClick={props.mostrarInput} src={props.imagemComentario}/>
                    <p>{props.comentarioNumero}</p>
                </comentarioPost>
                </sectionDiv>
            </mainDiv>
        

    

    )

}

export default InstaContainer;