import Layout from "@/components/layout";

import globalTheme from "@/styles/theme";
import {
  PAGES,
  proj1Sec1Snippet,
  proj1Sec2Snippet,
  proj1Sec31Snippet,
  proj1Sec32Snippet,
  proj1Sec3Snippet,
} from "@/utils";
import Heading from "@/components/heading";
import Text from "@/components/text";
import { fluid, remToPx } from "@/styles/Global.style";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "Structure html of an UI/webpage",
  metaDescription:
    "Learn how to structure the UI with a HTML. How can you use HTML elements to create the different structures and parts and sections of an UI to build the full webpage ?",
  metaKeywords:
    "HTML tutorial, UI design, HTML structure, HTML webpage design, HTML webpage build strategy, How to build the webpage, web development, user interface, front-end development",
  metaOgTitle: "Mastering HTML Structure for User Interface Design Tutorial",
  metaOgUrl: "https://www.webschooljs.com/html/structure-html-ui",
  metaOgImage: "https://www.webschooljs.com/images/html-logo.png",
};

const StructureHtmlUiPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="How to structure any UI(user interface) with HTML"
        headingType="h1"
        customStyle={{
          marginBottom: "1rem",
          textDecoration: "underline",
        }}
      />

      <Text
        content={`
        Our goal is to learn to develop webpages with HTML and CSS together.
        <br/><br/>
        But first we need to learn to create the structure of webpages. Once we are good with that then we learn to apply css to get the desired look of webpage.
        <br/>
        For that we will learn with an example.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Project 1"
        headingType="h6"
        customStyle={{
          marginBottom: "1rem",
          textDecoration: "underline",
          marginTop: "2rem",
        }}
      />

      <Text
        content={`
       Look at this image which we are going to structure HTML. First we are going to divide it into sections and then structure each section:
       <a href="/images/structure_ui_page1.jpg" target="__blank">Project 1 image</a>.
        <br/>
        Now please observe the 3 sections separately as while designing we never develop the whole page in one go but always focus on one section at a time. So these sections are:: <br/><br/>
        <ul>
            <li><a href="/images/structure_1_sec_1.jpg" target="__blank">section 1 image</a></li>
            <li><a href="/images/structure_1_sec_2.jpg" target="__blank">section 2 image</a></li>
            <li><a href="/images/structure_1_sec_3.jpg" target="__blank">section 3 image</a>
                <ul>
                    <li><a href="/images/structure_1_sec_3_1.jpg" target="__blank">section 3.1 image</a></li>
                    <li><a href="/images/structure_1_sec_3_2.jpg" target="__blank">section 3.2 image</a></li>
                </ul>
            </li>
            
        </ul>
        <br/><br/>
        If you see the <strong>Project 1</strong> image and then see all the sections then you will find that these sections are just part of the big image in Project 1. <br/>
        Now please observe the <strong>section 3 image</strong>. Since this is a big seection so we have further divided into <strong>section 3.1 image</strong> and <strong>section 3.2 image</strong>. <br/>
        Although <strong>section 3.2 image</strong> is also very big and we could further divide it into 3 small sections: left side section, middle section and right side section but i chose not to do it for this tutorial purpose.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`<br/>
        <strong>Section 1 HTML :</strong>
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={proj1Sec1Snippet} />

      <Text
        content={`<br/>
        <strong>Possible HTML Structure :</strong>
        If you visually observe the <strong>section 1</strong> image above, then you will observe that : <br/>
        first it is a header section so i will use a semantic <strong>header</strong> tag. <br/>
        Second, visually we can see that header section can be divided into 2 subsections : left subsection(where logo is there) and right subsection (where majority of navigation links are there). <br/><br/>
        
        Third, left section has 2 html items: logo image and Categories text. <br/>
        Although Categories text has some icons also but we will consider only this as text element for this tutorial purpose. <br/>
         We will use "img" tag for logo image and "p" tag for "Categories" text.
        <i>We will wrap the image and text with a <strong>DIV</strong> tag that forms left subsection</i>.<br/>
        <br/>
        Fourth, right section has 4 icons and 4 texts. For simplicity purpose we consider 4 icons as 4 texts otherwise we need to define 4 icons by downloading it from somewhere which is out of scope of this tutorial <br/>
        Since these are navigation links so we will use a "nav" tag to wrap all the childs inside it. <br/>
        And the best way to define these 8 childs is using an "ul" and "li" tag.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        <strong>Section 2 HTML :</strong>
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={proj1Sec2Snippet} />

      <Text
        content={`<br/>
        <strong>Possible HTML Structure :</strong>
        If you visually observe the <strong>section 2</strong> image above, then you will observe that : <br/>
        first it is a section of a webpage so i will use a semantic <strong>section</strong> tag. <br/>
        Second, visually we can see that this section can be divided into 3 horizontal subsections : <strong>top subsection</strong>(where "Products" and "Manufacturers" text is there), <strong>middle subsection</strong> (where search box and button are there) and
        <strong>bottom subsection</strong> (where 7 search suggestion are mentioned).
        <br/><br/>
        
        Third, top subsection has only 2 texts : "Products" and "Manufacturers" and we can use "ul" and "li" tag wherever more than one elements are together and it is the case here, so we will use a "ul" tag here.
        <br/><br/>
        Fourth, middle subsection has a search box (defined by input tag) and a button tag together so we will wrap a "div" tag around input tag and button tag.
        <br/><br/>
        Fifth, bottom subsection has 7 texts and they are together so we will use an "ul" and "li" tag to define those texts.
        <br/><br/>
        Sixth, a "div" tag to wrap all those 3 subsections with a class name of "product-search" as these sections are horizontally and vertically centered with a background image on its container. This container will again define another "div" tag as the parent of everything with a class name of "products".
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        <strong>Section 3 HTML :</strong> <br/>
        Since this section 3 has 2 subsections so we will use a "div" tag to wrap those 2 subsections as:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={proj1Sec3Snippet} />

      <Text
        content={`<br/>
        <strong>Section 3.1 HTML :</strong> <br/>
        Since this section 3.1 has 3 vertical subsections so we will use a "div" tag to wrap those 3 sub sections as:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={proj1Sec31Snippet} />

      <Text
        content={`<br/>
        <strong>Section 3.2 HTML :</strong> <br/>
        Since this section 3.2 has 3 vertical subsections so we will use a "div" tag to wrap those 3 sub sections as:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={proj1Sec32Snippet} />

      <Text
        content={`<br/>
        Now in this section 3.2, we could make each "div" pretty big by adding other elements(as in image it is too much content) but for simplicity, we used a "div" tag for understanding purpose.
        <br/>
        Hope you understood, how we write an html based on a design of webpage.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/html/html-comments" nextLink="" />
    </Layout>
  );
};

export default StructureHtmlUiPage;
