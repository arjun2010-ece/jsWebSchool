/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import SEO from './seo';
import styled from 'styled-components';

const MainContent = styled('div')<any>({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const Layout: FC<any> = ({ children, sidebar = false }) => {
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
        {sidebar && <Sidebar />}
        <div className="bg-white pt-16 basis-full" style={{ border: '3px solid black' }}>
          {children}
        </div>
      </MainContent>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
