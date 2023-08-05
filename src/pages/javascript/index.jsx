import Layout from "@/components/layout";

import { PAGES, jsHomeSnippet } from "@/utils";
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from "@/styles/Global.style";
import Heading from "@/components/heading";
import Text from "@/components/text";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "Javascript Turorial : Tips and tricks to learn Javascript",
  metaDescription:
    "Get started with JavaScript and learn the basics of this powerful programming language. This tutorial provides a comprehensive introduction to JavaScript, covering its syntax, variables, data types, control flow, functions, and more, empowering you to begin your journey into web development with JavaScript.",
  metaKeywords:
    "JavaScript tutorial, introduction to JavaScript, web development, front-end development, web design, JavaScript basics, dynamic web pages, interactivity, programming fundamentals",
  metaOgTitle:
    "Introduction to JavaScript Tutorial: Getting Started with Web Development",
  metaOgUrl: "https://www.webschooljs.com/javascript",
  metaOgImage: "https://www.webschooljs.com/images/javascript-logo.jpeg",
};

const JSHomePage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="What is Javascript ?"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Text
        content="Javascript is the scripting language and is the only browser language which works in browser.
        Be it Jquery or reactjs or angularjs, everything is based on javascript and ultimately converted to
        javascript then only it works in browser.
        <br/><br/>
       <strong> Now do not forget this  in javascript ever::</strong>
        <br/>
        JavaScript itself is a synchronous language, meaning it executes code in a single thread, one statement at a time.<br/>
        However, JavaScript can interact with asynchronous APIs provided by the browser, including those in the BOM(Browser Object Model) and DOM (Document Object Model), to handle asynchronous operations.
        "
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Purpose of Javascript ?"
        headingType="h6"
        customStyle={{
          textDecoration: "underline",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      />

      <Text
        content="Javascript is used for frontend as well as backend.<br/><br/>
        In frontend, it is used for multiple stuffs. Some of the most prominent are::
        <br/>
        <ol>
            <li><b>User interaction</b> </li>
            <li><b>Manipulating/Modifying webpage dynamically</b> </li>
            <li><b>Ajax/Asynchronous processing</b> </li>
            <li><b>Form validation on client side</b> </li>
            <li><b>Show notifications to users</b> </li>
        </ol>
        <br/>
        Some of the user interactions include showing popup when a button is clicked, change background color
        or text content dynamically or communicating with APIs, validating form fields before
        sending to backend, showing notification to users are some of the most common examples.
        <br/>
        <br/>
        In backend, it is used for making APIs, communicating with databases, microservices etc.
        "
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Popular javascript frameworks/libraries"
        headingType="h6"
        customStyle={{
          textDecoration: "underline",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      />

      <Text
        content="
        <ol>
            <li>React.js </li>
            <li>Vue.js </li>
            <li>Angular.js </li>
            <li>jquery (library)</li>
            <li>Node.js</li>
            <li>Backbone.js</li>
            <li>Polymer</li>
        </ol>
        "
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Basic usage of javascript"
        headingType="h6"
        customStyle={{
          textDecoration: "underline",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      />

      <CodeSnippet content={jsHomeSnippet} />

      <Text
        content="
        <br/>
        <br/>
        <b>Note:</b><br/>
        Understand that javascript is very vast and can be at times complex to grasp fully and you need 
        to understand various aspects
         of javascript along with its usages to fully comprehend its powers.
         <br/>
         I will explain why we study various parts of javascript here:
         <br/>
         <ul>
            <li><b>Usage of javacript in solving algorithm problems :</b> 
             You might have a data in a specific format and you might want to change it in other format
             based on some scenarios. To be able to solve this, the basic understanding of
             variables, data types, operators, loops, functions is needed and that is why we will study 
             those topics.
            </li>
            <li><b>Usage of DOM manipulation : </b>
             You have written a html in html file(may or may not with css), if you need to do something
             like show texts or anything on button click, show modals/popups, form handling, dynamic 
             pagination etc, then you need to understand various DOM related functions and its usages
             and how manipulations are done on DOM elements. This is the primary use of javascript in
             most of the webpages and that is why we will learn this.
            </li>
            <li>
                <b>Usage of Asynchronous javascript : </b>
                To handle an API requests to a server or do something asynchronous, we study callbacks,
                async await, promises etc.
            </li>
         </ul>
        "
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="" nextLink="/javascript/setting-up" />
    </Layout>
  );
};

export default JSHomePage;
