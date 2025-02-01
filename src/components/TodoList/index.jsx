import styled from "styled-components";
import { useState } from "react";
import editIcon from "../../../public/images/edit-google.svg"
import deleteIcon from "../../../public/images/delete-google.svg"
import { v4 as uuidv4 } from "uuid";

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

  .task {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  /* .task p {
    text-decoration: line-through;
  } */

  .icons {
    width: 60px;
    display: flex;
    justify-content: space-between;
  }
`;

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [arrTodo, setArrTodo] = useState([]);
  const [check, setCheck] = useState("false");

  function handleClick(e) {
    e.preventDefault();
    setArrTodo([
      ...arrTodo,
      { id: uuidv4(), todo: todo }
    ]);
    console.log(todo);
    console.log(arrTodo);
  };

  const handleCheck = (e) => setCheck(e.target.checked);



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
            <div className="task">
              <input type="checkbox" defaultChecked={check} onChange={handleCheck} />
              {/* <label>{todo.todo}</label> */}
              {check ? <p style={{ "text-decoration": "line-through" }}>{todo.todo}</p> : <p>{todo.todo}</p>}
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
    </StyledSection >
  );
};

export default TodoList;