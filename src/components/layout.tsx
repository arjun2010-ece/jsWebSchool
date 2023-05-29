/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import AdSidebar from '../components/adSideBar';
import SEO from './seo';
import styled from 'styled-components';

const MainContent = styled('div')<any>({
  display: 'flex',
  alignItems: 'stretch',
  gap: '1rem',
});

const Layout: FC<any> = ({
  children,
  sidebar = false,
  hideAd = false,
  hideSidebar = false,
  currentPage = '',
}) => {
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
        <div
          className="basis-full bg-white pt-6 px-main"
          // style={{ border: '3px solid black' }}
        >
          {children}
        </div>
        {sidebar && <AdSidebar hideAd={hideAd} />}
      </MainContent>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
