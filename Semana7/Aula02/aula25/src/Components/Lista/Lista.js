import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Usuarios from '../Usuario/Usuarios';

class Lista extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        name: '',
        email: '',
        users: [],
      }
    }
  
    
  
    deleteUsuario = (userId) => {
      const requestUserId = axios.delete(
        `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUsuario?id=${userId}`,
        {headers: {
            'api-token': 'gabriel'
          }
        }
      );
  
      requestUserId.then(() => {
        this.getUsuario();
        // if(window.confirm('Tem certeza de que deseja deletar'))
        window.alert("Deletado")
          this.props.deletUsuario(userId);
        
      }).catch(error => {
        console.log(error);
      });
    }


    componentDidMount () {
      this.getUsuario();
    }
  
    getUsuario = () => {
  
      const requestAllUsers = axios.get(
        'https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers',
        {
          headers: {
            'api-token': 'gabriel'
          }
        }
      );
  
      requestAllUsers.then(response => {
        console.log('Todos os usuarios:', response.data.result);
        this.setState({
          users: response.data.result
        })
        console.log(this.state.users)
      }).catch(error => {
        console.log(error);
      });
    }
  
    render(){
      const showUsers = this.state.users.map((usuario, i) => {
        return(
          <Usuarios
           deletarUsuario={() => {this.deleteUsuario(usuario.id)}}
           key={i} 
           username={usuario.name}
          />
        )
      })
  
      return (
          <div>
            <div>
              <h2>Usuarios Cadastrados</h2>
            </div>
            {showUsers}
          </div>
      )
    } 
  }
export default Lista