import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import TaskCounter from "./components/TaskCounter";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const StyledBackground = styled.div`
  background-color: #e4e0e5;
  width: 100%;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const [toDo, setToDo] = useState({ id: null, text: '' });
  const [arrToDo, setArrToDo] = useState([]);

  const handleChange = (event) => {
    setToDo({
      ...toDo,
      id: uuidv4(),
      text: event.target.value
    });
    console.log(toDo);
  };

  const handleClick = () => {
    setArrToDo([...arrToDo, toDo]);
    setToDo({ text: '' });
    console.log(arrToDo);
  };

  const onDelete = (id) => {
    console.log('Deleted: ', id);
    setArrToDo(arrToDo.filter(toDo => toDo.id !== id));
  };

  const onEdit = () => {
    console.log('Clicked')
  };

  return (
    <StyledBackground>
      <GlobalStyles />
      <Header />
      <TaskCounter counter={counter} />
      <TodoList
        toDo={toDo}
        arrToDo={arrToDo}
        handleChange={handleChange}
        handleClick={handleClick}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </StyledBackground>
  )
}

export default App
