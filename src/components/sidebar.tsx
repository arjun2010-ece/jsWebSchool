import { type FC } from 'react';
import styled from 'styled-components';
import { PAGES } from '@/utils';
import HtmlSidebar from '@/components/htmlSidebar';
import CssSidebar from '@/components/cssSidebar';

type StyledSidebarContainer = {
  hideSidebar?: boolean;
};

//  height: calc(100vh - 64px) is making indepenedent scollable in flex child.
const StyledSidebarContainer = styled.div<StyledSidebarContainer>`
  flex: 0 0 236px;
  min-width: 218px;
  padding-top: 24px;
  overflow-y: auto;
  height: calc(100vh - 64px);

  border-right: 1px solid #ccc;
  position: fixed;
  z-index: -1;
  top: 78px;
  width: 250px;

  @media only screen and (max-width: 767px) {
    display: block;
    display: ${(props) => (props?.hideSidebar ? 'none' : 'block')};
  }
`;

type SidebarProps = StyledSidebarContainer & {
  currentPage: string;
};

const Sidebar: FC<SidebarProps> = ({ hideSidebar, currentPage }) => {
  return (
    <StyledSidebarContainer hideSidebar={hideSidebar}>
      {/* Sidebar component */}
      {currentPage == PAGES.HTML && <HtmlSidebar />}
      {currentPage == PAGES.CSS3 && <CssSidebar />}
      {currentPage == PAGES.JAVASCRIPT && <p>JS page</p>}
      {currentPage == PAGES.REACTJS && <p>REACTJS page</p>}
      {currentPage == PAGES.NODEJS && <p>NODEJS page</p>}
      {currentPage == PAGES.GIT && <p>GIT page</p>}
    </StyledSidebarContainer>
  );
};

export default Sidebar;
