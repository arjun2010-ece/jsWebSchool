/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';
import styled from 'styled-components';
import { PAGES } from '@/utils';
import HtmlSidebar from "@/components/htmlSidebar"

const StyledSidebarContainer = styled.div<any>`
  width: 400px;
  padding-top: 24px;
  // border: 3px solid red;
  @media only screen and (max-width: 767px) {
    display: block;
    display: ${(props: any) => (props?.hideSidebar ? 'none' : 'block')};
  }
`;

const Sidebar: FC<any> = ({ hideAd, hideSidebar, currentPage }) => {
  return (
    <StyledSidebarContainer hideAd={hideAd} hideSidebar={hideSidebar}>
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
