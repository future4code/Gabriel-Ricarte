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
margin: 20px;

`

const SecondContainerDiv = styled.div`

`
const PlaylistDetailsDiv = styled.input`
    display: flex;
    align-items: center;
    font-size: 12pt;
`
const ButtonDelete = styled.button`
color: white;
background-color: red;
border: none;
margin-left: 10px;
margin-right: 10px;
padding: 5px 5px 5px 5px;
cursor: pointer;
:hover{
    color:black;
}

`


class Lista extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        

        }
    }


    componentDidMount(){
        this.props.pickUpPlaylists() //passando via props por isso o nome do valor atribuido, devo usar this.props mesmo que seja dentro do didMOUNT
    }
    componentDidUpdate(){
        this.props.pickUpPlaylists()
    }


    render(){
        
        
        // const musicsOfAll = this.props.selectedMusics.map(music => {
        //     const listAllMusics = () => {
        //         this.props.pickUpPlaylistDetails(music);
        //     };  
        //     return<li onClick={listAllMusics}> </li>
        // })
  
        return(
            <MainDiv>
                <FirstContainerDiv>
                    <h3>Playlists</h3>
                    {this.props.todasListas.map((lists,) => {
                        return (
                             <Playlists>
                                <p>{lists.name}</p>
                                <div>
                                <ButtonDelete onClick = {() => {this.props.funcaoDeletar(lists.id)}}> Apagar</ButtonDelete>
                                </div>   
                                <div>
                        <h4>Adicione uma musica</h4>
                        <label>Artista</label>
                        <input   value={this.props.musicArtists} onChange={this.props.onChangeMusicArtists}/>
                        <div>
                            <label>Nome</label>
                            <input valu={this.props.musicName} onChange={this.props.onChangeMusicName}></input>
                        </div>
                        <div>
                            <label>Link do arquivo</label>
                            <input  value={this.props.linkMusic}  onChange={this.props.onChangeLinkMusic}
                            
                            ></input>
                        </div>
                        <button onClick={this.props.addMusicToPlaylist}>Adicionar Musica</button>

                    </div>
                            </Playlists>
                            )
                        })
                    }
                 

                </FirstContainerDiv>
                <SecondContainerDiv>
                    {/* <div>
                        <ul>
                            {musicsOfAll}
                        </ul>
                    </div> */}
                </SecondContainerDiv>
            </MainDiv>
        )
    }
}

export default Lista;