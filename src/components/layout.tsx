import type { FC, ReactNode } from 'react';
import { useRouter, type NextRouter } from 'next/router';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import AdSidebar from '@/components/adSideBar';
import SEO from '@/components/seo';
import styled from 'styled-components';

const MainContent = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
  gap: '10px',
});

type ContentProps = {
  path: string;
};

const Content = styled.div<ContentProps>`
  flex: 1;
  background: white;
  padding-top: 24px;
  padding-left: 5px;
  padding-right: 5px;
<<<<<<< HEAD
  overflow-x: auto;
=======
  // margin-left: 250px;
>>>>>>> 56c8147e8049a015a40f0544828f43b2fb0495ed
  margin-left: ${(props) => (props.path === '/' ? 0 : '250px')};
  @media only screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

type LayoutProps = {
  children: ReactNode;
  sidebar: boolean;
  hideAd: boolean;
  hideSidebar: boolean;
  currentPage: string;
};

const Layout: FC<LayoutProps> = ({
  children,
  sidebar = false,
  hideAd = false,
  hideSidebar = false,
  currentPage = '',
}) => {
  const router: NextRouter = useRouter();

  return (
    <div className="relative z-0 flex min-h-screen flex-col">
      <SEO
        title=""
        metaDescription=""
        metaKeywords=""
        metaOgTitle=""
        metaOgUrl=""
        metaOgImage=""
      />

      <Header />

      <MainContent>
        {sidebar && (
          <Sidebar hideSidebar={hideSidebar} currentPage={currentPage} />
        )}
        <Content path={router?.route}>{children}</Content>
        {sidebar && <AdSidebar hideAd={hideAd} />}
      </MainContent>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
