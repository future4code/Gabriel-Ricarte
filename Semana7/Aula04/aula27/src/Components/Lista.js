import React from 'react';
import App from '../App';
import axios from 'axios';
import styled from 'styled-components';
import Content from './Content'

const MainDiv = styled.div`

`
const Playlists = styled.div`

display: flex;
align-items: center;
margin:10px;

`
const FirstContainerDiv = styled.div`
margin: 8px;

`

const SecondContainerDiv = styled.div`
`

class Lista extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            //
        }
    }


    componentDidMount(){
        this.props.buscarPlaylists() //passando via props por isso o nome do valor atribuido{buscarPlaylists} e devo usar this.props mesmo que seja dentro do didMOUNT
    }


    render(){
  
        return(
            <MainDiv>
                <FirstContainerDiv>
                    <p>Playlists</p>
                    {this.props.todasListas.map((lists,) => {
                        return (
                             <Playlists>
                                <p>{lists.name}</p>
                                <div>
                                <button onClick = {() => {this.props.funcaoDeletar(lists.id)}}> Apagar</button>
                                </div>
                            </Playlists>
                            )
                        })
                    }
                </FirstContainerDiv>
                <SecondContainerDiv>

                </SecondContainerDiv>
            </MainDiv>
        )
    }
}

export default Lista;