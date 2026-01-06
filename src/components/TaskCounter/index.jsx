import styled from "styled-components";

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

  .counter-circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #eebc5d;

      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 48px;
      }
  }
`;

const TaskCounter = ({ counter }) => {

  return (
    <StyledDiv>
      <div>
        <h2>Task Done</h2>
        <p>Keep it up</p>
      </div>
      {/* <Counter /> */}
      <div className="counter-circle">
        <p>{counter}</p>
      </div>
    </StyledDiv>
  );
};

export default TaskCounter;