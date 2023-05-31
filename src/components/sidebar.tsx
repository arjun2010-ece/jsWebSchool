/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';
import styled from 'styled-components';
import { PAGES } from '@/utils';
import HtmlSidebar from '@/components/htmlSidebar';

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
  top: 64px;
  width: 250px;

  @media only screen and (max-width: 767px) {
    display: block;
    display: ${(props: any) => (props?.hideSidebar ? 'none' : 'block')};
  }
`;

const Sidebar: FC<any> = ({ hideSidebar, currentPage }) => {
  return (
    <StyledSidebarContainer  hideSidebar={hideSidebar}>
      {/* Sidebar component */}
      {currentPage == PAGES.HTML && <HtmlSidebar />}
      {currentPage == PAGES.CSS3 && <p>Css page</p>}
      {currentPage == PAGES.JAVASCRIPT && <p>JS page</p>}
      {currentPage == PAGES.REACTJS && <p>REACTJS page</p>}
      {currentPage == PAGES.NODEJS && <p>NODEJS page</p>}
      {currentPage == PAGES.GIT && <p>GIT page</p>}
    </StyledSidebarContainer>
  );
};

export default Sidebar;
