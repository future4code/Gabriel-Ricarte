import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Registro from './Components/Registro/Registro';
import Lista from './Components/Lista/Lista';
import Usuarios from './Components/Usuario/Usuarios'

const MainAppContainer = styled.div`
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  margin: 10px;
  margin-left: 20px;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 'Usuarios Cadastrados',
      email: '',
      name: '',
      
    }
  }


  onChangeNome = (event) => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }



  handleChangePage = () => {
    if (this.state.currentPage === 'Usuarios Cadastrados') {
      this.setState({currentPage: 'Cadastrar novos usuários'})
    } else {
      this.setState({currentPage: 'Usuarios Cadastrados'})
    }
  }


  addNewUser = () => {
    const novoUsuarioInfo = {
      name: this.state.name,
      email: this.state.email
    };

    const criarNovoUsuario = axios.post(
      'https://us-central1-future4-users.cloudfunctions.net/api/users/createUser',
      novoUsuarioInfo, 
      { 
        headers: {
          'Content-type': 'application/json',
          'api-token': 'gabriel'
        }
      }
    );

    criarNovoUsuario.then(response => {
      console.log(response);
      window.alert("O usuário foi criado com sucesso");
      this.setState({
        email: '',
        name: ''
      })
    }).catch(error => {
      console.log(error);
      window.alert("Erro, verifique seu Usuario Cadastrado");
    });
  }

  render(){

    return (
      <MainAppContainer>
        <Button onClick={this.handleChangePage}>{this.state.currentPage}</Button>
        {this.state.currentPage === 'Usuarios Cadastrados' ? <Registro 
              nomeValor={this.state.name}
              onChangeNome={this.onChangeNome}
              emailValue={this.state.email}
              onChangeEmail={this.onChangeEmail}
              createNewUserOnClick={this.addNewUser}
            /> :<Lista/> }
      </MainAppContainer>
    );
  }
}

export default App;