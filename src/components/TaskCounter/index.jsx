import styled from "styled-components";
import Counter from "../Counter";

const StyledDiv = styled.div`
  width: 480px;
  height: 240px;
  border-color: #2d323f;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h2 {
    font-size: 36px;
  }

  p {
    font-size: 24px;
  }
`;

const TaskCounter = () => {
  return (
    <StyledDiv>
      <div>
        <h2>Task Done</h2>
        <p>Keep it up</p>
      </div>
      <Counter counter={0} />
    </StyledDiv>
  );
};

export default TaskCounter;