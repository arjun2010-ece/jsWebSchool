import { type FC } from 'react';
import styled from 'styled-components';
import { PAGES } from '@/utils';
import {
  HTML_TOPICS,
  CSS_TOPICS,
  JAVASCRIPT_TOPICS,
  GIT_TOPICS,
  REACTJS_TOPICS,
} from '@/utils/courseContent';
import CourseSidebar from '@/components/courseSidebar';

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
  margin-bottom: 3rem;

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
      {currentPage == PAGES.HTML && <CourseSidebar courseTopic={HTML_TOPICS} />}
      {currentPage == PAGES.CSS3 && <CourseSidebar courseTopic={CSS_TOPICS} />}
      {currentPage == PAGES.JAVASCRIPT && (
        <CourseSidebar courseTopic={JAVASCRIPT_TOPICS} />
      )}
      {currentPage == PAGES.REACTJS && (
        <CourseSidebar courseTopic={REACTJS_TOPICS} />
      )}
      {currentPage == PAGES.GIT && <CourseSidebar courseTopic={GIT_TOPICS} />}
      {/* {currentPage == PAGES.NODEJS && <p>NODEJS page</p>} */}
    </StyledSidebarContainer>
  );
};

export default Sidebar;
