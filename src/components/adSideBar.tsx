import { type FC } from 'react';
import styled from 'styled-components';

type StyledSidebarContainerProps = {
  hideAd: boolean;
};

const StyledSidebarContainer = styled.div<StyledSidebarContainerProps>`
  flex: 0 0 350px;
  min-width: 350px;
  padding-top: 24px;
  // border: 3px solid red;
  background: white;
  @media only screen and (max-width: 1023px) {
    display: block;
    display: ${(props) => (props?.hideAd ? 'none' : 'block')};
  }
`;
type AdSidebarProps = StyledSidebarContainerProps;

const AdSidebar: FC<AdSidebarProps> = ({ hideAd }) => {
  return (
    <StyledSidebarContainer hideAd={hideAd}>
      {/* AD Sidebar component */}
    </StyledSidebarContainer>
  );
};

export default AdSidebar;
