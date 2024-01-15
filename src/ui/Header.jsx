import { styled } from "styled-components";

const StyledHeader = styled.div`
  background-color: var(--color-gray-50);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 3.2rem;
  align-items: center;
  justify-content: flex-end;
`;

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;
