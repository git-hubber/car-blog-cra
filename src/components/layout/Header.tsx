import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../general/colors';
import { ScreenWithin, Breakpoint } from '../../general/breakpoints';
import logo from '../../images/logo.svg';

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <StyledLink to={'/'}>
          <StyledImage src={logo} />
        </StyledLink>

        <SignInButton onClick={() => alert('Sign in')}>Sign In</SignInButton>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  align-items: center;
  background: ${colors.darkBlue};
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 4rem;
  ${ScreenWithin({ upper: Breakpoint.TabletMax })} {
    padding: 0 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 0.5rem;
`;

const StyledImage = styled.img`
  width: 50px;
`;

const SignInButton = styled.button`
  background-color: ${colors.lightBlue};
  border: none;
  border-radius: 25%/50%;
  cursor: pointer;
  height: 40px;
  width: 100px;
`;

export default Header;
