import { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

const StyledSection = styled.div`
  width: 480px;
  margin: 40px auto;

  input {
    width: 380px;
    height: 40px;
  }
`;

const TodoList = ({ toDo, handleChange, handleClick, arrToDo, onEdit, onDelete, onChecked }) => {

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
        onEdit={() => onEdit(toDo.id)}
        onChecked={() => onChecked(toDo.id)}
      />)}

    </StyledSection>
  );
};

export default TodoList;