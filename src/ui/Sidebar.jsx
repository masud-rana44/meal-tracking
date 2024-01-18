import styled from "styled-components";

const StyledSidebar = styled.div`
  background-color: var(--color-gray-50);
  padding: 4rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
`;

const Sidebar = () => {
  return <StyledSidebar>Sidebar</StyledSidebar>;
};

export default Sidebar;
