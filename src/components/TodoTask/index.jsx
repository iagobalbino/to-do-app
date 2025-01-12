const TodoTask = ({ task }) => {
  return (
    <>
      {task.map(<p>{task.description}</p>)}
      {console.log(task.description)};
    </>
  );
}
export default TodoTask;
