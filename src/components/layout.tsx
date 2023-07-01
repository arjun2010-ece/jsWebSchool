import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import { useRouter, type NextRouter } from 'next/router';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import AdSidebar from '@/components/adSideBar';
import SEO from '@/components/seo';
import styled from 'styled-components';
import { HamburgerComponent } from '@/components/header';

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const HamburgerWrapper = styled.div`
  margin-left: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`;

type ContentProps = {
  path: string;
};

const Content = styled.div<ContentProps>`
  flex: 1;
  background: white;
  padding-top: 24px;
  padding-left: 15px;
  padding-right: 15px;
  overflow-x: auto;
  @media only screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

type LayoutProps = {
  children: ReactNode;
  sidebar?: boolean;
  hideAd?: boolean;
  hideSidebar?: boolean;
  currentPage?: string;
};

const Layout: FC<LayoutProps> = ({
  children,
  sidebar = false,
  hideAd = false,
  hideSidebar = false,
  currentPage = '',
}) => {
  const router: NextRouter = useRouter();
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const toggleHamburgerMenu = () => {
    setMobileNav(!mobileNav);
  };

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

        <HamburgerWrapper>
          <HamburgerComponent
            mobileNav={mobileNav}
            toggleHamburgerMenu={toggleHamburgerMenu}
            dimension="h-12 w-12"
            title={true}
          />
        </HamburgerWrapper>

        {sidebar && (
          <Sidebar
            hideSidebar={hideSidebar}
            currentPage={currentPage}
            mobileNav={mobileNav}
          />
        )}
        <Content path={router?.route}>{children}</Content>
        {sidebar && <AdSidebar hideAd={hideAd} />}
      </MainContent>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
