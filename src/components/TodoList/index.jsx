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
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  return (
    <StyledSection>
      <input
        type="text"
        placeholder="Write your next task"
        value={inputValue}
        onChange={handleChange}
      />
      <button>+</button>
      {todos.map(todo => <Todo
        inputValue={inputValue}
        id={todo.id}
      />)}

    </StyledSection>
  );
};

export default TodoList;