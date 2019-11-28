import React from 'react';
import InstaContainer from './Components/InstaContainer/InstaContainer';
import './App.css';
import styled from 'styled-components';

const mainAppDiv = styled.div`
  display: flex;
  align-items: center;  
  height: 90%;
  flex-direction: column;
  background-color: rgb(232, 251, 251);
`

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      curtidasNumero: 0,
      comentarioNumero: 0,
      imagemCurtiu: false,


    }
  }



  

  render(){
    const liked = require("./img/favorite-white.svg")
    function mudarImagem(){
      if(this.state.imagemCurtiu === true){
        liked = require("./img/favorite.svg")
      }
    }
    
    


    const primeiroPost = {
      nomeAutor: 'Future4',
      imagemPost: require('./img/img01.jpeg'),
      imagemCurtidas: liked,
      curtidasNumero:this.state.curtidasNumero,
      comentarioNumero:this.state.comentarioNumero,
      imagemComentario: require('./img/comment_icon.svg'),
      //mostratInput:
    }

    
   
return(
      <mainAppDiv>
        <InstaContainer
        nomeAutor = {primeiroPost.nomeAutor}
        imagemPost = {primeiroPost.imagemPost}
        imagemCurtidas = {primeiroPost.imagemCurtidas}
        curtidasNumero = {primeiroPost.curtidasNumero}
        comentarioNumero = {primeiroPost.comentarioNumero}
        imagemComentario = {primeiroPost.imagemComentario}


        
        ></InstaContainer>
        {/* <InstaContainer></InstaContainer>
        <InstaContainer></InstaContainer> */}
        
        </mainAppDiv>


    )
  }




}



export default App;