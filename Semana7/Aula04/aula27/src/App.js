import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Content from './Components/Content';
import Lista from './Components/Lista';
import { wait } from '@testing-library/dom';


const BackgroundDiv = styled.div`
background-color:#1dd15d;
width:100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const ContainerDiv = styled.div`
    width: 67vw;
    height: 75vh;
    background-color: white;
`
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userPlaylist: "",
      allPlaylists: [],
      selectedmusics: [],
      
    }
  }
  
  onChangeCreatePlaylistInput = (event) => {
    this.setState({userPlaylist:event.target.value})
  }

  createPlaylists = () => {
      const request = axios
      const data = {name:this.state.userPlaylist}
      .post("https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist", data, {headers: {
                'auth': 'gabriel'
            }
        })
      request
      .then((response) => {console.log(response);
      })   
  }   

  pickUpPlaylists = () =>  { axios
          .get("https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists", {headers: {'auth': 'gabriel'}
          })
          .then((response) => {this.setState({allPlaylists:response.data.result.list})
          })
    }

  pickUpPlaylistDetails = (playlistId) => {

    
  }
  

  functionDelete = (id) => {
    axios.delete(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/deletePlaylist?playlistId=${id}`, {headers: { "auth": "gabriel"}})
            .then(() => {this.pickUpPlaylists()})
  }




  

  render() {
    return (
      <BackgroundDiv>
       <ContainerDiv>
         <Content
          onChangeCreatePlaylistInput={this.onChangeCreatePlaylistInput}
          userPlaylist={this.state.userPlaylist}
          funcaoCriar={this.createPlaylists}
         />
         <Lista
           buscarPlaylists={this.pickUpPlaylists}
           funcaoDeletar={this.functionDelete}
           todasListas={this.state.allPlaylists}
         />

       </ContainerDiv>
      </BackgroundDiv>
      
    );
  }

}


export default App;