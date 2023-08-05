import Layout from "@/components/layout";
import { PAGES, reactJsxSnippet } from "@/utils";
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from "@/styles/Global.style";
import Heading from "@/components/heading";
import Text from "@/components/text";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "Understanding JSX",
  metaDescription:
    "Gain a solid understanding of JSX with this comprehensive HTML tutorial. Explore the syntax, benefits, and usage of JSX, a powerful extension to JavaScript commonly used in React applications.",
  metaKeywords:
    "JSX, HTML tutorial, JavaScript extension, React development, frontend development, JSX syntax, JSX usage",
  metaOgTitle: " Understanding JSX: Language of React.js",
  metaOgUrl: "https://www.webschooljs.com/reactjs/understanding-jsx",
  metaOgImage: "https://www.webschooljs.com/images/reactjs-logo.png",
};

const UnderstandingJSXPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.REACTJS}
      seo={seo}
    >
      <Heading
        content="Understanding JSX"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Text
        content={`
        JSX stands for JavaScript XML. This is the language of reactjs framework that is <strong>html + javascript</strong> meaning it allows us to write html like code in javascript file to create the UI at the same time implement javascript in that UI.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Writing JSX code in reactjs"
        headingType="h6"
        customStyle={{ marginBottom: "0.5rem", marginTop: "2rem" }}
      />

      <Text
        content={`
        Since react 16.8 version, react hooks was introduced and it is simply a javascript function returning an HTML like structure as shown below and this is JSX.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={reactJsxSnippet} />

      <Heading
        content="JSX and HTML Differences"
        headingType="h6"
        customStyle={{ marginBottom: "0.5rem", marginTop: "2rem" }}
      />

      <Text
        content={`
        While JSX syntax in React.js resembles HTML, there are some key differences to be aware of. Here are the main differences between JSX and HTML:
        <br/>
        <br/>
        <strong>Syntax and Attribute Names:</strong><br/>
        HTML attributes use kebab-case (e.g., <b>class</b>, <b>id</b>, <b>src</b>).<br/>
        JSX attributes use camelCase (e.g., <b>className</b>, <b>id</b>, <b>src</b>).<br/>
        HTML elements are written in lowercase (e.g., <b>&lt;div&gt;</b>, <b>&lt;p&gt;</b>, <b>&lt;span&gt;</b>).<br/>
        JSX elements and component names start with an uppercase letter (e.g., <b> &lt;MyComponent&gt;</b>, <b>&lt;CustomButton&gt;</b>).
        <br/><br/>

        <strong>Class vs. ClassName:</strong><br/>
        In HTML, the <b>class</b> attribute is used to define CSS classes for an element.<br/>
        In JSX, the <b>className</b> attribute is used instead of class to avoid conflicts with the JavaScript class keyword.
        <br/><br/>

        <strong>Self-closing Tags:</strong><br/>
        In HTML, certain elements like <b>&lt;img&gt;</b>, <b>&lt;br&gt;</b>, and <b>&lt;input&gt; </b>can be self-closed (<b>&lt;img src="..." /&gt;</b>).<br/>
        In JSX, self-closing tags must always end with <b> /></b> (e.g., <b>&lt;img src="..."  /&gt;</b>).
        <br/>
        <br/>

        <strong>Inline Styles:</strong> <br/>
        In HTML, you define styles using the style attribute with CSS syntax (e.g., <b>&lt;div style="color: red;"&gt;Hello&lt;/div&gt;</b>).<br/>
        In JSX, the <b>style</b> attribute expects a JavaScript object with CSS properties written in camelCase (e.g., <b>&lt;div style={{ color: 'red', fontSize: "15px" }}&gt;Hello&lt;/div&gt;</b>).
        <br/>
        <br/>
        <strong>Comments:</strong><br/>
        HTML comments are written as<b> &lt;!-- Comment --&gt;</b>.<br/>
        JSX comments are written within curly braces and two forward slashes (<b>{/* Comment */}</b>).
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        <strong>Note::</strong> <br/>
        It's important to note that JSX is not HTML but a syntactic extension of JavaScript. The main purpose of JSX is to allow you to write declarative and component-based UI code in a more intuitive and concise manner. JSX gets transpiled into JavaScript code that creates React elements and manages the component's lifecycle.
        <br/><br/>
        While there are differences between JSX and HTML, JSX still maintains a familiar HTML-like structure, making it easier for developers to transition and work with React components.
        
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/reactjs/setting-up-react-project"
        nextLink=""
      />
    </Layout>
  );
};

export default UnderstandingJSXPage;
