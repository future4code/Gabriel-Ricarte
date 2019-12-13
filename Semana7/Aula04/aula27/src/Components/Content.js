import React from 'react';
import App from '../App';
import axios from 'axios';
import styled from 'styled-components';
import List from './Lista';
import {resquest} from 'https';

const TextDiv = styled.div`
text-align: center;
text-decoration: underline;
text-decoration-color: black;
`
const MaindDivContent = styled.div`

`
const SectionDiv = styled.div`
display:flex;
justify-content: center;


`
const TitleLabel = styled.label`
margin-right: 10px;


`
const SpecialInput = styled.input`
color: white;
margin-top: 10px;
  margin-right:5px;
  padding: 10px 20px 10px 14px;
  border: 1px solid #b7b7b7;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  font: normal normal bold 13px/4px "Times New Roman", Times, serif;
  color: rgba(232,30,30,1);
  -o-text-overflow: clip;
  text-overflow: clip;
  background: -webkit-linear-gradient(68.19859051364818deg, rgba(94,237,158,1) 0, rgba(94,237,158,1) 16%, rgba(113,242,128,1) 73%, rgba(113,242,128,1) 100%);
  background: -moz-linear-gradient(21.801409486351815deg, rgba(94,237,158,1) 0, rgba(94,237,158,1) 16%, rgba(113,242,128,1) 73%, rgba(113,242,128,1) 100%);
  background: linear-gradient(21.801409486351815deg, rgba(94,237,158,1) 0, rgba(94,237,158,1) 16%, rgba(113,242,128,1) 73%, rgba(113,242,128,1) 100%);
  background-position: 50% 50%;
  -webkit-box-shadow: 0 0 3px 0 rgba(0,0,0,1) ;
  box-shadow: 0 0 3px 0 rgba(0,0,0,1) ;
  -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -webkit-transform: rotateX(-8.021409131831525deg) rotateY(4.010704565915763deg) rotateZ(-2.8647889756541165deg)   ;
  transform: rotateX(-8.021409131831525deg) rotateY(4.010704565915763deg) rotateZ(-2.8647889756541165deg)   ;


`
const DeleteButton = styled.button`

  
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 9px;
  border: 1px solid #018dc4;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  font: normal 16px/normal "Times New Roman", Times, serif;
  color: rgba(252,252,252,1);
  -o-text-overflow: clip;
  text-overflow: clip;
  background: #55e63b;
  -webkit-box-shadow: 2px 4px 2px 0 rgba(0,0,0,0.2) ;
  box-shadow: 2px 4px 2px 0 rgba(0,0,0,0.2) ;
  text-shadow: -1px -1px 0 rgba(15,73,168,0.66) ;
  -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover{
      color:black;
  }


`
class Content extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        }
    }
    
    


    componentDidMount(){
            

    }


    render(){
        return(
            <MaindDivContent>
                <TextDiv>
                    <h2> Bem vindo ao Spotify4! Escolha sua Musica!</h2>
                </TextDiv>
                <SectionDiv>
                    <TitleLabel></TitleLabel>
                    <SpecialInput onChange={this.props.onChangeCreatePlaylistInput}
                    value={this.props.userPlaylist} placeholder="Digite um nome Para a Platlist">
                    
                    </SpecialInput>
                    <DeleteButton onClick={this.props.funcaoCriar}>Enviar</DeleteButton>
                </SectionDiv>
            </MaindDivContent>

        )
    }
}

export default Content;


