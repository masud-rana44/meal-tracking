import { styled } from "styled-components";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.div`
  background-color: var(--color-gray-50);
  border-bottom: 1px solid var(--color-grey-100);
  grid-column: 2/-1;
  height: 70px;

  display: flex;
  gap: 3.2rem;
  align-items: center;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
