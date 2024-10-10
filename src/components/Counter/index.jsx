import styled from "styled-components";

const StyledCircle = styled.div`
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
`;

const Counter = ({ counter = 0 }) => {
  return (
    <StyledCircle>
      <p>{counter}</p>
    </StyledCircle>
  );
};

export default Counter;