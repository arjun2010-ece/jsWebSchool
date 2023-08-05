import Layout from "@/components/layout";

import {
  PAGES,
  basicCssH1Snippet,
  basicCssSnippet,
  cssLinkingSnippets,
  htmlBodyTagsSnippet,
  inlineCssSnippet,
  internalCssSnippets,
} from "@/utils";
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from "@/styles/Global.style";
import Heading from "@/components/heading";
import Text from "@/components/text";
import NavigationIcon from "@/components/navigationIcon";
import CodeSnippet from "@/components/codeSnippet";

const seo = {
  title: "CSS setting up tutorial",
  metaDescription:
    "Learn how to set up CSS in your web projects with this step-by-step tutorial. Understand different methods to apply styles to your HTML content, including external CSS, internal CSS, and more.",
  metaKeywords:
    "CSS setup, CSS tutorial, web development, CSS basics, CSS styles, CSS setup methods",
  metaOgTitle: "CSS setting up tutorial",
  metaOgUrl: "https://www.webschooljs.com/css/setting-up",
  metaOgImage: "https://www.webschooljs.com/images/css-logo.jpeg",
};

const CSSSettingUpPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Setting up"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Text
        content="In this tutorial, we'll cover the basic steps to set up CSS (Cascading Style Sheets) in your web project. CSS is a crucial part of web development as it allows you to style and design your HTML content, making your web pages visually appealing and user-friendly. Let's get started with the setup!
         "
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Step 1: Create a New HTML File"
        headingType="h4"
        customStyle={{ marginTop: "2rem" }}
      />

      <Text
        content="Start by creating a new HTML file. You can use any text editor or integrated development environment (IDE) of your choice, such as Visual Studio Code, Sublime Text, or Notepad++. Save the file with a meaningful name, followed by the <b>`.html`</b> extension. For example, <b>index.html</b>.
         "
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Step 2: Set Up the Basic HTML Structure"
        headingType="h4"
        customStyle={{ marginTop: "2rem" }}
      />

      <Text
        content={`In your HTML file, set up the basic HTML structure. It consists of the <b>&lt;!DOCTYPE&gt;</b> declaration, the <b>&lt;html&gt;</b> element, the <b>&lt;head&gt;</b> section, and the <b>&lt;body&gt;</b> section. Here's a simple example:`}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={htmlBodyTagsSnippet} />

      <Heading
        content="Step 3: Link CSS to Your HTML File"
        headingType="h4"
        customStyle={{ marginTop: "2rem" }}
      />

      <Text
        content={`Inside the <b>&lt;head&gt;</b> section of your HTML file, you need to link your CSS file. Create a new CSS file with a <b>'.css'</b> extension. Save it with a meaningful name, for example, <b>'styles.css'</b>. Now, link this CSS file to your HTML file using the <b>link</b> tag in the following code:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={cssLinkingSnippets} />

      <Text
        content={`<br/>
        By linking the CSS file, you're telling the HTML file to apply the styles defined in <b>'styles.css'</b> to the HTML content.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Step 4: Start Writing CSS"
        headingType="h4"
        customStyle={{ marginTop: "2rem" }}
      />

      <Text
        content={`Now that you have set up the HTML and linked your CSS file, you can start writing CSS rules. Open your 
        <b>'styles.css'</b> file and begin adding your styles. CSS rules consist of a selector and one or more declarations enclosed in curly braces <b>'{}'</b>.
        <br/><br/>
        Here's a simple example to change the text color and background color of the <b>&lt;body&gt;</b> element:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={basicCssSnippet} />

      <Text
        content={`<br/>
        You can also style other HTML elements by using different selectors. For instance, to style all <b>&lt;h1&gt;</b> elements, you can use:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={basicCssH1Snippet} />

      <Heading
        content="Step 5: Save and View Your Web Page"
        headingType="h4"
        customStyle={{ marginTop: "2rem" }}
      />

      <Text
        content={`Save the <b>"styles.css"</b> file once you've finished writing your CSS rules. Afterward, open your HTML file (called <b>"index.html"</b>) on your web browser. The HTML file may be opened in your default web browser by double clicking it.
        <br/><br/>
        Congratulations! You have successfully set up CSS and applied basic styles to your HTML content.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Other ways of setting up css"
        headingType="h2"
        customStyle={{ marginTop: "2rem" }}
      />

      <Text
        content={`
        Apart from the traditional method of linking an external CSS file to your HTML file, there are a few other ways of setting up CSS in your web projects. Each method has its advantages and use cases. Let's explore these alternative methods:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Internal CSS with a style tag:"
        headingType="h4"
        customStyle={{ marginTop: "2rem" }}
      />

      <Text
        content={`
        Internal CSS involves writing CSS rules directly inside the <b>'&lt;style&gt;'</b> element within the <b>&lt;head&gt;</b> section of your HTML file. This approach is useful when you have a small amount of CSS specific to a single page and don't want to create a separate external CSS file.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={internalCssSnippets} />

      <Heading
        content="Inline CSS with a style attribute:"
        headingType="h4"
        customStyle={{ marginTop: "2rem" }}
      />

      <Text
        content={`
        Inline CSS involves applying styles directly to individual HTML elements using the <b>'style'</b> attribute. This method is useful for making quick and specific style changes to specific elements, but it's generally not recommended for large-scale styling due to its maintainability issues.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={inlineCssSnippet} />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/css/way-to-think" nextLink="/css/box-model" />
    </Layout>
  );
};

export default CSSSettingUpPage;
