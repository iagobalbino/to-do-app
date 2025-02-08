import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import TaskCounter from "./components/TaskCounter";
import TodoList from "./components/TodoList";

const StyledBackground = styled.div`
  background-color: #e4e0e5;
  width: 100%;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

function App() {
  return (
    <StyledBackground>
      <GlobalStyles />
      <Header />
      <TaskCounter />
      <TodoList />
    </StyledBackground>
  )
}

export default App
