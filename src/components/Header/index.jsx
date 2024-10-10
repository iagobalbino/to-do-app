import styled from "styled-components";
import todoImage from "../../../public/images/to-do-list-svgrepo-com.svg";

const StyledHeader = styled.header`
  padding: 30px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;

  img {
    width: 48px;
    height: 48px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={todoImage} alt="To do" />
      <h1>To-do App</h1>
    </StyledHeader>
  );
};

export default Header;