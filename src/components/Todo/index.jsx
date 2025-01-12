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



const Todo = ({ todos }) => {

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   // Read the form data
  //   const form = e.target;
  //   const formData = new FormData(form);

  //   const formJson = Object.fromEntries(formData.entries());
  //   console.log(formJson);
  // }

  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    todos = formJson;
    console.log(todos);
  }

  return (
    <StyledSection>
      <form method="post" onSubmit={handleSubmit}>
        <input
          name="TaskContent"
          type="text"
          placeholder="Write your next task"
          defaultValue={todos}
        // onChange={event => event.target.value}
        />
        <button type="submit">+</button>
      </form>

      {/* Estava pesquisando sobre JSON e como atualizá-lo */}
      <TodoTask task={todos} />
    </StyledSection>
  );
};

export default Todo;