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

  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <StyledSection>
      <form method="post" onSubmit={handleSubmit}>
        <input
          name="Todo"
          type="text"
          placeholder="Write our next task"
          defaultValue=""
        // onChange={event => event.target.value}
        />

        <button type="submit">+</button>
      </form>

      {/* Estava pesquisando sobre JSON e como atualizá-lo */}
    </StyledSection>
  );
};

export default Todo;