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
  const [toDo, setToDo] = useState({ id: null, text: '' });
  const [arrToDo, setArrToDo] = useState([]);
  const [inputValue, setInputValue] = useState('');

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

  };


  return (
    <StyledSection>
      <input
        type="text"
        placeholder="Write your next task"
        value={toDo.text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>+</button>
      {arrToDo.map(toDo => <Todo
        key={toDo.id}
        value={toDo.text}
        onDelete={() => onDelete(toDo.id)}
        editlToDo={onEdit}
      />)}

    </StyledSection>
  );
};

export default TodoList;