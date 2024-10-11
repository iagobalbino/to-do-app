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

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    // const formData = new FormData(form);

    // const formJson = Object.fromEntries(formData.entries());
    // const newTask = form;
    setTasks(form)

    console.log(tasks);
  }


  return (
    <StyledSection>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write our next task"
        />
        <button type="submit">+</button>
      </form>

      {/* {tasks.map(tasks => <TodoTask></TodoTask>)} */}
    </StyledSection>
  );
};

export default Todo;