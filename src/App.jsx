import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import TaskCounter from "./components/TaskCounter";
import Todo from "./components/Todo";
import { useState } from "react";
import TodoTask from "./components/TodoTask";



const StyledBackground = styled.div`
  background-color: #e4e0e5;
  width: 100%;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

function App() {

  const [todos, setTodos] = useState([
    {
      "description": "",
      "isDone": false
    }
  ]);

  function addTodo() {
    setTodos.push()
    { console.log(todos) }
  };

  return (
    <StyledBackground>
      <GlobalStyles />
      <Header />
      <TaskCounter />
      <Todo todos={todos} />
    </StyledBackground>
  )
}

export default App
