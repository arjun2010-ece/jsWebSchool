import Layout from "@/components/layout";

import {
  PAGES,
  accessElementsSnippet,
  createAppendSnippets,
  eventHandlingSnippets,
  modifyContentSnippet,
} from "@/utils";
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from "@/styles/Global.style";
import Heading from "@/components/heading";
import Text from "@/components/text";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "Javascript DOM Manipulations",
  metaDescription:
    "Master the art of JavaScript DOM (Document Object Model) manipulation and dynamically interact with HTML elements. This tutorial covers essential techniques for accessing, modifying, and creating HTML elements using JavaScript, enabling you to create dynamic and interactive web pages.",
  metaKeywords:
    "JavaScript tutorial, DOM manipulation, JavaScript DOM, HTML elements, front-end development, web development, dynamic web pages, interactive elements. getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll,innerHTML, textContent, setAttribute, getAttribute, classList, style, createElement, addEventListener",
  metaOgTitle:
    "JavaScript DOM Manipulations Tutorial: Creating Dynamic and Interactive Web Pages",
  metaOgUrl: "https://www.webschooljs.com/javascript/dom-manipulation",
  metaOgImage: "https://www.webschooljs.com/images/javascript-logo.jpeg",
};

const JSDomManipulationPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="DOM Manipulation"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Text
        content={`
        DOM (Document Object Model) manipulation refers to the process of modifying the structure, content, or appearance of a web page using JavaScript. The DOM represents the HTML document as a tree-like structure, where each element, attribute, and text node is an object that can be accessed, modified, or created using JavaScript. Here are the key aspects of DOM manipulation:
        <br/><br/>
        <b>Accessing Elements: </b>
        To manipulate elements in the DOM, you first need to access them. This can be done using methods like <b>getElementById, getElementsByClassName, getElementsByTagName,</b> or more advanced methods like <b>querySelector</b> and <b>querySelectorAll</b>. These methods return element objects that you can then interact with.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}; margin-bottom: 0;`}
      />

      <CodeSnippet content={accessElementsSnippet} />

      <Text
        content={`<br/>
       <b> Modifying Content and Attributes:</b> Once you have accessed an element, you can modify its content, attributes, or style properties. Common methods and properties used for this purpose include <b>innerHTML, textContent, setAttribute, getAttribute, classList,</b> and <b>style</b>.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}; margin-bottom: 0;`}
      />

      <CodeSnippet content={modifyContentSnippet} />

      <Text
        content={`<br/>
       <b> Creating and Appending Elements:</b>  You can create new elements dynamically using the <b>createElement</b> method, set their properties, and append them to the document or other elements.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}; margin-bottom: 0;`}
      />

      <CodeSnippet content={createAppendSnippets} />

      <Text
        content={`<br/>
        <b>Event Handling:</b> DOM manipulation often involves handling user interactions and responding to events such as clicks, keypresses, or form submissions. You can attach event listeners to elements using methods like addEventListener to execute code when specific events occur.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}; margin-bottom: 0;`}
      />

      <CodeSnippet content={eventHandlingSnippets} />

      <Text
        content={`<br/>
        DOM manipulation allows you to create dynamic and interactive web pages. By accessing and modifying elements in the DOM, you can update content, respond to user actions, create new elements, and manipulate styles and attributes. Keep in mind that excessive or inefficient DOM manipulation can impact performance, so it's important to use it judiciously and optimize where possible.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}; margin-bottom: 0;`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/javascript/error-handling" nextLink="" />
    </Layout>
  );
};

export default JSDomManipulationPage;
