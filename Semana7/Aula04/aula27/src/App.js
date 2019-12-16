import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Content from './Components/Content';
import Lista from './Components/Lista';
import { wait } from '@testing-library/dom';
import { throwStatement } from '@babel/types';
import Wallpaper from './wallpaper.jpg';

const BackgroundDiv = styled.div`
background-color: #1f3365;
background-repeat: repeat;
width:100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const ContainerDiv = styled.div`
    width: 67vw;
    height: 100vh;
    background-color: white;
    margin-top: 30px;
    background-color: #1dd15d;
  
`
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userPlaylist: '',
      allPlaylists: [],
      selectedMusics: [],
      musicName: '',
      musicArtists: '',
      linkMusic: '',

      
    }
  }
  
  onChangeCreatePlaylistInput = (event) => {
    this.setState({userPlaylist:event.target.value})
  }

  onChangeMusicName = (event) => {
    this.setState({musicName: event.target.value});
  }

  onChangeMusicArtists = (event) => {
    this.setState({musicArtists: event.target.value});
  }

  onChangeLinkMusic = (event) => {
    this.setState({linkMusic: event.target.value});
  }

  // addMusicToPlaylist = ()  => {
  //   const data = {
  //       "playlistId": this.props.userPlaylist,
  //       "music": {
  //           "name": this.state.musicName,
  //           "artist": this.state.musicArtists,
  //           "url": this.state.linkMusic
  //       }
  //   }
  //  const request =
  //    axios.put(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/addMusicToPlaylist`,
  //           data,{headers: { auth: '4a8d7ba3173a0beb026be31b82b0f2f4'}})
  //           .then(request)
  //           this.pickUpPlaylistDetails()
  //   }


  createPlaylists = () => {
      const data = {name:this.state.userPlaylist}
      const request = axios
      .post("https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist", data, {headers: {
                'auth': 'gabriel'
            }
        })
      request
      .then((response) => {console.log(response);
      window.alert('Playlist Criada')
      })   
  }   
  
  pickUpPlaylists = () =>  { axios
        .get("https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists", {headers: {'auth': 'gabriel'}
        })
        .then((response) => {this.setState({allPlaylists:response.data.result.list})
        })
    }

  pickUpPlaylistDetails = (playlistId) => { const request = axios
        .get(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/getPlaylistMusics/${playlistId}`,
        {headers: {'auth' :  'gabriel'}
        })
        .then(response => {console.log(response)})
        this.setState({allPlaylists: request.data.results.music})
        }
  

  functionDelete = (id) => {
    axios.delete(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/deletePlaylist?playlistId=${id}`, {headers: { "auth": "gabriel"}})
            .then(() => {this.pickUpPlaylists()})
            window.alert("Playlist Deletada")
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
           pickUpPlaylists={this.pickUpPlaylists}
           funcaoDeletar={this.functionDelete}
           todasListas={this.state.allPlaylists}
           pickUpPlaylistDetails = {this.pickUpPlaylistDetails}
           selectedMusics = {this.state.selectedMusics}
           onChangeMusicName = {this.onChangeMusicName}
           onChangeMusicArtists = {this.onChangeMusicArtists}
           onChangeLinkMusic = {this.onChangeLinkMusic}
           musicArtists = {this.state.musicArtists}
           musicName = {this.state.musicName}
           linkMusic = {this.state.linkMusic}
           addMusicToPlaylist = {this.addMusicToPlaylist}
         />

       </ContainerDiv>
      </BackgroundDiv>
      
    );
  }

}


export default App;