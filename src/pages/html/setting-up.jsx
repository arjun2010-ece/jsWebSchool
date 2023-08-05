import Layout from "@/components/layout";

import {
  PAGES,
  htmlBodyContentSnippet,
  htmlBodyTagsSnippet,
  htmlDocTypeSnippet,
  htmlHeadTagsSnippet,
  htmlOpenCloseTagsSnippet,
  htmlTitleTagsSnippet,
} from "@/utils";
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from "@/styles/Global.style";
import CodeSnippet from "@/components/codeSnippet";
import Heading from "@/components/heading";
import Text from "@/components/text";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "Setup HTML files to write your UI in markup language",
  metaDescription:
    "Learn how to set up an HTML document from scratch with this step-by-step tutorial. Understand the basic structure and elements of HTML to create your own web pages.",
  metaKeywords:
    "HTML tutorial, HTML document setup, setting up HTML, web development, HTML basics, web page structure",
  metaOgTitle: '"Setting up HTML - A Step-by-Step Tutorial for Beginners',
  metaOgUrl: "https://www.webschooljs.com/html/setting-up",
  metaOgImage: "https://www.webschooljs.com/images/html-logo.png",
};

const HTMLPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="Setting up HTML ?"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Text
        content={`
        Setting up an HTML (Hypertext Markup Language) document involves creating the basic structure and elements of a web page. Here's a step-by-step guide on how to set up an HTML document:
        <br/><br/>
        <b>1.</b> Start with a text editor: You can use any text editor of your choice, such as Notepad, Sublime  Text, Visual Studio Code, or any other code editor.
        <br/>
        <br/>
        <b>2.</b> Make a new file: Launch your text editor, then choose "New" or "New File" from the menu. As an alternative, you may create a new file by pressing Ctrl + N on a Windows or Mac computer.
        <br/>
        <br/>
        <b>3.</b> Start with the document type declaration: At the beginning of your HTML document, you need to specify the document type declaration, known as the doctype. This declaration informs the browser about the HTML version you are using. For HTML5, the doctype declaration is as follows:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={htmlDocTypeSnippet} />

      <Text
        content={`<br/><br/>
        Add the opening and closing HTML tags: Following the doctype declaration, you must add the opening html> and closing /html> tags. The HTML document's beginning and finish are indicated by these tags.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={htmlOpenCloseTagsSnippet} />

      <Text
        content={`<br/><br/>
        Include the head section: The "head" section and the "body" section are the two principal parts found within the "html" tags. The title, CSS stylesheets, JavaScript scripts, and other meta-data about the content are all contained in the head> section.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={htmlHeadTagsSnippet} />

      <Text
        content={`<br/><br/>
        Add the title: Within the <b>&lt;head&gt;</b> section, you can include the <b>&lt;title&gt;</b> tag to specify the title of your web page. This title will be displayed in the browser's title bar or tab.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={htmlTitleTagsSnippet} />

      <Text
        content={`<br/><br/>
        Include the body section: After the <b>&lt;head&gt;</b> section, you need to add the <b>&lt;body&gt;</b> section. This is where the visible content of your web page will go, such as headings, paragraphs, images, links, etc.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={htmlBodyTagsSnippet} />

      <Text
        content={`<br/><br/>
        Add content to the body: Within the <b>&lt;body&gt;</b> section, you can add various HTML elements to structure and format your content. For example, you can use <b>&lt;h1&gt;</b> to <b>&lt;h6&gt;</b> tags for headings, <b>&lt;p&gt;</b> tags for paragraphs, <b>&lt;img&gt;</b> tags for images, <b>&lt;a&gt;</b> tags for links, and so on.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={htmlBodyContentSnippet} />

      <Text
        content={`<br/><br/>
        <b>1. </b> Save the file: Save the file with an appropriate name, giving it an .html extension. For example, you can save it as index.html if you want it to be the main page of your website.
        <br/><br/>
        <b>2. </b> Open the HTML file in a web browser: Double-click the saved HTML file, and it will open in your default web browser. You will see the rendered web page with the content you added.
        <br/><br/>
        All done! An HTML document you created has been successfully setup. To construct a completely functional and aesthetically pleasing website, you may keep adding new features and style to your web page using HTML and CSS.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/html" nextLink="/html/tags-elements" />
    </Layout>
  );
};

export default HTMLPage;
