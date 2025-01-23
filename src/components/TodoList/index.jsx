import styled from "styled-components";
import { useState } from "react";
import editIcon from "../../../public/images/edit-google.svg"
import deleteIcon from "../../../public/images/delete-google.svg"
import { v4 as uuidv4 } from "uuid";

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
  padding: 0 12px 0 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 24px;
    height: 24px;
  }

  .icons {
    width: 60px;
    display: flex;
    justify-content: space-between;
  }
`;

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [arrTodo, setArrTodo] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setArrTodo([
      ...arrTodo,
      { id: uuidv4(), todo: todo }
    ]);
    console.log(todo);
    console.log(arrTodo);
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
            <div className="icons">
              <div>
                <img src={editIcon} alt="Editar" />
              </div>
              <div>
                <img src={deleteIcon} alt="Deletar" />
              </div>
            </div>
          </Task>
        ))
      }
    </StyledSection>
  );
};

export default TodoList;