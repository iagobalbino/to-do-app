import styled from "styled-components";
import { useState } from "react";

let nextId = 0;

const StyledSection = styled.div`
  width: 480px;
  margin: 40px auto;
  /* background-color: #2d323f; */

  input {
    width: 380px;
    height: 40px;
  }
`;

const Task = styled.div`
  width: 480px;
  height: 60px;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  background-color: #e4e0e5;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  input {
    width: 24px;
    height: 24px;
  }
`;

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [arrTodo, setArrTodo] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setArrTodo([
      ...arrTodo,
      { id: nextId++, todo: todo }
    ]);
    console.log(todo);
    console.log(arrTodo);
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

      {
        arrTodo.map(todo => (
          <Task>
            <div>
              <input type="radio" />
              <label>{todo.todo}</label>
            </div>
            <div>
              <p>Modify</p>
              <p>Delete</p>
            </div>
          </Task>
        ))
      }
    </StyledSection>
  );
};

export default TodoList;