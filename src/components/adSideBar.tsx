/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';
import styled from 'styled-components';

const StyledSidebarContainer = styled.div<any>`
  width: 600px;
  padding-top: 64px;
  border: 3px solid red;
  @media only screen and (max-width: 1023px) {
    display: block;
    display: ${(props: any) => (props?.hideAd ? 'none' : 'block')};
  }
`;

const AdSidebar: FC<any> = ({ hideAd }) => {
  return (
    <StyledSidebarContainer hideAd={hideAd}>
      AD Sidebar component
    </StyledSidebarContainer>
  );
};

export default AdSidebar;
