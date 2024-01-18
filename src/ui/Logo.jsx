import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      {/* <Img src="logo.svg" alt="Logo" /> */}
      Meal Tracking
    </StyledLogo>
  );
}

export default Logo;
