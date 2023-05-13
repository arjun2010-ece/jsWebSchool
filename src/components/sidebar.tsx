/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';
import styled from 'styled-components';

const StyledSidebarContainer = styled.div<any>`
  width: 400px;
  padding-top: 64px;
  border: 3px solid red;
  @media only screen and (max-width: 767px) {
    display: block;
    display: ${(props: any) => (props?.hideSidebar ? 'none' : 'block')};
  }
`;

const Sidebar: FC<any> = ({ hideAd, hideSidebar }) => {
  return (
    <StyledSidebarContainer hideAd={hideAd} hideSidebar={hideSidebar}>
      Sidebar component
    </StyledSidebarContainer>
  );
};

export default Sidebar;
