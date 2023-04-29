/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from "react";
import Header from "../components/header";
import SEO from "./seo";

const Layout: FC<any> = ({ children }) => {
  return (
    <div className="relative z-0 flex flex-col min-h-screen">
      <SEO
        title=""
        metaDescription=""
        metaKeywords=""
        metaOgTitle=""
        metaOgUrl=""
        metaOgImage=""
      />

      <Header />
      <div className="flex-auto transition-opacity duration-300 bg-white pt-16" style={{border: "3px solid black"}}>
        {children}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
