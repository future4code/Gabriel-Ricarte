import React from 'react';
import styled from 'styled-components';
import TaskList from './Components/TaskList/TaskList';

const MainApp = styled.div`
    
    width: 100vw;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    
    `



function App() {
  return (
    <MainApp>
      <TaskList>

      </TaskList>
    </MainApp>
  );
}

export default App;
