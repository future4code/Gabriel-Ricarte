import React from 'react';
import styled from 'styled-components'

const AddInput = styled.input`
    
`
const ListaDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
`
const MaindDiv = styled.div`
    background-color: beige;
    text-align: center;
    min-height: 200px;
    margin-top:10px;
    
`
const SecondDiv = styled.div`
    display: flex;
    padding: 7px;
`
const AddButton = styled.button`
    margin-left: 10px;
    background-color:#ffffff;
	border:1px solid #18ab29;
	color:#158a44;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
    :hover {
    background-color:#5cbf2a;
    color: white;
    
    }
`

const FilterDiv = styled.div`
    display:flex;
    justify-content: space-around;
    align-items:center;
`
const SelectFilter = styled.select`
    color:blue;;
    background-color: white;
`






class TaskList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            addInput: "",
            tasks: [
                {
                    id: Date.now(),
                    texto: '',
                    completa: false
                }
            ],
            
        }
    }

        addInputChanges = (event) =>{
            this.setState({addInput: event.target.value})
        }

        SendButton = () => {
            let newTasks = [...this.state.tasks]
            newTasks.push(this.state.addInput)
            this.setState({
                tasks:newTasks,
                
            })
            // this.inputClear() // quebra depois de limpar
            
        }

        sendEnter = (event) => {
            if (event.key === "Enter"){
                this.SendButton();}
            }

        
            inputClear = () => {
                this.setState(this.state.addInput= "")
            }
    

        componentWillUpdate(){
            localStorage.setItem('tasks',JSON.stringify())
        }


        render(){
            const listToRender = this.state.tasks.map((taskes) => {
                return <li>{taskes.texto}</li>
            })
            console.log(listToRender)
        return(
            <MaindDiv onKeyDown={this.sendEnter}>
                <h2>Lista de Tarefas</h2>
                <SecondDiv>
                    <AddInput
                        onChange={this.addInputChanges}
                        type="text"
                        value={this.state.addInput}
                        placeholder="Digite sua tarefa aqui"

                    />
                    <AddButton
                        onClick={this.SendButton}
                    >
                        Adicionar</AddButton>
                </SecondDiv>
                <FilterDiv>
                    <p>Filtro:</p>
                    <SelectFilter>
                        <option>Completas</option>
                        <option>Pendentes</option>
                        <option>Nenhuma</option>
                    </SelectFilter>

                </FilterDiv>

                <ListaDiv>
                    <ul>
                   {listToRender}
                   </ul>
                </ListaDiv>
            </MaindDiv>
            
        );
    }
}

export default TaskList;