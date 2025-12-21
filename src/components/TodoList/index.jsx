import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";

const StyledSection = styled.div`
  width: 480px;
  margin: 40px auto;

  input {
    width: 380px;
    height: 40px;
  }
`;

const TodoList = () => {
  const [toDo, setToDo] = useState({});
  const [arrToDo, setArrToDo] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setToDo(event.target.value);
    console.log(toDo);
  };

  const handleClick = () => {
    setArrToDo([...arrToDo, { id: id++, value: value }]);
    setToDo('');
    console.log(arrToDo);
  };

  return (
    <StyledSection>
      <input
        type="text"
        placeholder="Write your next task"
        value={toDo}
        onChange={handleChange}
      />
      <button onClick={handleClick}>+</button>
      {arrToDo.map(todo => <Todo
        id={todo.id}
        inputValue={todo.value}
      />)}

    </StyledSection>
  );
};

export default TodoList;