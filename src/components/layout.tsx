/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';
import Header from '../components/header';
import SEO from './seo';
import SidebarContent from './sidebarContent';
import Sidebar from './sidebar';

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
      {sidebar ? (
        <Sidebar sidebarContent={<SidebarContent />}>{children}</Sidebar>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Layout;
