import React from 'react';
import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(36, 34, 34);
    width: 30%;
    margin: 15px;

`
const HeaderH3 = styled.h3`
    margin-left: 40px;

`


const ImagemLike = styled.div`
margin-left:5px;
display: flex;
align-items: center;

`

const ComentarioPost = styled.div`
margin-right:5px;
display: flex;
align-items: center;

`
const SectionDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const ImgHeader = styled.img`
    width: 100%;
    height: 100%;
`




export function InstaContainer(props){
    return(
        <MainDiv>
            <header>
                <HeaderH3>{props.nomeAutor}</HeaderH3>    
            </header>
            <SectionDiv>
               <ImgHeader
                src={props.imagemPost}></ImgHeader>
            </SectionDiv>
            <SectionDiv>
                <ImagemLike>
                    <img src={props.imagemCurtidas} onClick="mudarImagem()" />
                    <p>{props.curtidasNumero}</p>
                </ImagemLike>
               <ComentarioPost>
                     <img onClick={props.mostrarInput} src={props.imagemComentario}/>
                    <p>{props.comentarioNumero}</p>
                </ComentarioPost>
                </SectionDiv>
            </MainDiv>
        

    

    )

}

export default InstaContainer;