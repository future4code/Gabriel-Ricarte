import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Maindiv = styled.div`
`
const ButtonEnviar = styled.button`
    margin-top: 1vw;
    width:5vw;
    margin-left: 3.5vw;
    color: white;
    background-color: green;
    border: none;
`

const Form = styled.form`
    padding: 2px;
    margin: 5px;
`

function Registro(props){
    return (
        <Maindiv>
            <Form>
                <label>Nome:</label>
                <input type='text' onChange={props.onChangeNome} value={props.nomeValor} /><br />
                <label>E-mail:</label>
                <input type='text' onChange={props.onChangeEmail} value={props.emailValue} /><br />
                <ButtonEnviar type="Button" onClick={props.createNewUserOnClick}>
                    Enviar
                </ButtonEnviar>
            </Form>            
        </Maindiv>
    );
}
//Incompleto

export default Registro;

