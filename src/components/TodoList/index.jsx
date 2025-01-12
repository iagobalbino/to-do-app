import styled from "styled-components";
import TodoTask from "../TodoTask";
import { useState } from "react";

const StyledSection = styled.div`
  width: 480px;
  margin: 40px auto;
  background-color: #2d323f;

  input {
    width: 380px;
    height: 40px;
  }
`;

const TodoList = ({ todos }) => {
  const [todo, setTodo] = useState('');
  console.log(todo);

  function handleClick(e) {
    e.preventDefault();
    console.log(todos);
    {/* Procurar forma de atribuir evento a prop todos */ }
  };


  return (
    <StyledSection>
      <input
        type="text"
        placeholder="Write your next task"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button onClick={handleClick}>+</button>

      <TodoTask task={todos} />
    </StyledSection>
  );
};

export default TodoList;