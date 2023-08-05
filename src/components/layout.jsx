import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import AdSidebar from "@/components/adSideBar";
import SEO from "@/components/seo";
import styled from "styled-components";
import Header, { HamburgerComponent } from "@/components/header";
import { TABLE_OF_CONTENT_EXCLUSION } from "../utils";

const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 10px;
  max-width: ${({ $issidebar }) => (!$issidebar === "true" ? "70%" : "100%")};
  // width: ${({ $issidebar }) => (!$issidebar === "true" ? "70%" : "100%")};
  margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const HamburgerWrapper = styled.div`
  margin-left: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  flex: 1;
  background: white;
  padding-top: 24px;
  padding-left: 15px;
  padding-right: 15px;
  overflow-x: auto;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  @media only screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

const Layout = ({
  children,
  sidebar = false,
  hideAd = false,
  hideSidebar = false,
  currentPage = "",
  seo,
}) => {
  const router = useRouter();
  const [mobileNav, setMobileNav] = useState(false);
  const isGenericPage = TABLE_OF_CONTENT_EXCLUSION.includes(router?.route);

  const toggleHamburgerMenu = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="relative z-0 flex min-h-screen flex-col">
      <SEO
        title={seo?.title || ""}
        metaDescription={seo?.metaDescription || ""}
        metaKeywords={seo?.metaKeywords || ""}
        metaOgTitle={seo?.metaOgTitle || ""}
        metaOgUrl={seo?.metaOgUrl || ""}
        metaOgImage={seo?.metaOgImage || ""}
      />

      <Header />

      <MainContent $issidebar={sidebar.toString()}>
        {!isGenericPage && (
          <HamburgerWrapper>
            <HamburgerComponent
              mobileNav={mobileNav}
              toggleHamburgerMenu={toggleHamburgerMenu}
              dimension="h-12 w-12"
              title={true}
            />
          </HamburgerWrapper>
        )}
        {sidebar && (
          <Sidebar
            hideSidebar={hideSidebar}
            currentPage={currentPage}
            mobileNav={mobileNav}
          />
        )}
        <Content >{children}</Content>
        {sidebar && <AdSidebar hideAd={hideAd} />}
      </MainContent>

      <Footer />
    </div>
  );
};

export default Layout;
