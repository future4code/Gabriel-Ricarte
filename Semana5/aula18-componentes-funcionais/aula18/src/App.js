import React from 'react';
import {Container} from  './Components/Container/Container';
import {BigCard} from './Components/BigCard';
import {SmallCard} from './Components/SmallCard/SmallCard';
import {ImageButton} from './Components/ImageButton/ImageButton';
import './App.css';

function App() {

  const email = {
    imagem: require('./img/envelope.png'),
    titulo: 'Email: ',
    paragrafo: 'gabrielr387@gmail.com'
  }
  const botaoLinkedin = {
    imagem: require('./img/linkedin.png'),
    paragrafo: 'Linkedin'
  }

  const titulo1 = {
    titulo: 'Dados Pessoais'
  }

  const titulo2 = {
    titulo: 'Experiencias Profissionais'
  }

  const endereco = {
    imagem: require('./img/home.png'),
    titulo: 'Endereço: ',
    paragrafo: 'Rua labatut 776, Ipiranga SP'
  }

  const principal = {
    imagem: require('./img/future4.png'),
    titulo: 'Gabriel Ricarte',
    paragrafo: 'Olá, me chamo Gabriel Ricarte e sou aluno da Future4 da turma Fullstack.'
  }

  const trabalho = {
    imagem: require("./img/future4.png"),
    titulo: 'Future4',
    paragrafo: 'Desenvolvedor Web'
  }

  const botaoVer = {
    imagem: require('./img/sort-down.png'),
    paragrafo: 'Ver Mais',
  }

  const titulo3 = {
    titulo: 'Minhas Redes Sociais'
  }



  return (


    <div className="App">
    <Container titulo={titulo1.titulo}></Container>
        <BigCard imagem={principal.imagem} titulo={principal.titulo} paragrafo={principal.paragrafo} />
        <SmallCard imagem={email.imagem} titulo={email.titulo} paragrafo={email.paragrafo} />
        <SmallCard imagem={endereco.imagem} titulo={endereco.titulo} paragrafo={endereco.paragrafo} />
        <ImageButton imagem={botaoVer.imagem} paragrafo={botaoVer.paragrafo} />
      
      <Container titulo={titulo2.titulo}></Container>
        <BigCard imagem={trabalho.imagem} titulo={trabalho.titulo} paragrafo={trabalho.paragrafo} />
      <Container titulo={titulo3.titulo}></Container>
        <ImageButton imagem={botaoLinkedin.imagem} paragrafo={botaoLinkedin.paragrafo} />
      
      </div>
  );
}
    

export default App;