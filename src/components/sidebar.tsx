import { type FC } from 'react';
import styled from 'styled-components';

const StyledSidebarContainer = styled.div`
  width: 300px;
  padding-top: 64px;
  border: 3px solid red;
  @media only screen and (max-width: 414px) {
    width: 100vw;
  }
`;

const Sidebar: FC = () => {
  return <StyledSidebarContainer>Sidebar component</StyledSidebarContainer>;
};

export default Sidebar;

