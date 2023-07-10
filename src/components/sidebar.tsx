import { type FC } from 'react';
import styled from 'styled-components';
import { PAGES } from '@/utils';
import HtmlSidebar from '@/components/htmlSidebar';
import CssSidebar from '@/components/cssSidebar';
import JsSidebar from '@/components/jsSidebar';
import GitSidebar from '@/components/gitSidebar';
import ReactjsSidebar from '@/components/reactSideBar';

type StyledSidebarContainer = {
  hideSidebar?: boolean;
  mobileNav?: boolean;
};

//  height: calc(100vh - 64px) is making indepenedent scollable in flex child.
const StyledSidebarContainer = styled.div<StyledSidebarContainer>`
  flex: 0 0 236px;
  padding-top: 24px;

  border-right: 1px solid #ccc;
  width: auto;

  @media only screen and (max-width: 767px) {
    display: ${({ hideSidebar, mobileNav }) =>
      hideSidebar ? (mobileNav ? 'block' : 'none') : 'block'};
  }
`;

type SidebarProps = StyledSidebarContainer & {
  currentPage: string;
};

const Sidebar: FC<SidebarProps> = ({ hideSidebar, currentPage, mobileNav }) => {
  return (
    <StyledSidebarContainer hideSidebar={hideSidebar} mobileNav={mobileNav}>
      {/* Sidebar component */}
      {currentPage == PAGES.HTML && <HtmlSidebar />}
      {currentPage == PAGES.CSS3 && <CssSidebar />}
      {currentPage == PAGES.JAVASCRIPT && <JsSidebar />}
      {currentPage == PAGES.REACTJS && <ReactjsSidebar />}
      {currentPage == PAGES.GIT && <GitSidebar />}
      {/* {currentPage == PAGES.NODEJS && <p>NODEJS page</p>} */}
    </StyledSidebarContainer>
  );
};

export default Sidebar;
