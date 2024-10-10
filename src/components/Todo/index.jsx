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


const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleTask(event) {
    setNewTask(event.target.value);
    console.log(newTask);
  };


  return (
    <StyledSection>
      <input
        type="text"
        placeholder="Write our next task"
        onChange={handleTask}
      />
      <button>+</button>
      <TodoTask />
    </StyledSection>
  );
};

export default Todo;