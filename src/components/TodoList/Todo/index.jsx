import styled from "styled-components";
import editIcon from "../../../../public/images/edit-google.svg"
import deleteIcon from "../../../../public/images/delete-google.svg"


const TodoItem = styled.div`
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
  
  .todoInput {
    width: 24px;
    height: 24px;
  }

  .task {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .icons {
    width: 60px;
    display: flex;
    justify-content: space-between;
  }
`;

const Todo = ({ id, value, onDelete, onEdit, onChecked }) => {

  return (
    <TodoItem>
      <div className="task" key={id}>
        <input className="todoInput" type="checkbox" onClick={onChecked} />
        <p>{value}</p>

      </div>
      <div className="icons" onClick={onDelete}>
        <div >
          <img src={editIcon} alt="Editar" />
        </div>
        <div onClick={onEdit}>
          <img src={deleteIcon} alt="Deletar" />
        </div>
      </div>
    </TodoItem>
  );
};

export default Todo;