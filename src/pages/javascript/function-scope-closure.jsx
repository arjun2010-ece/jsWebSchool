import Layout from "@/components/layout";

import {
  PAGES,
  btnClickdOutSnippet,
  btnClickedClosureSnippet,
  closureSnippet,
  fnScopeSnippet,
} from "@/utils";
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from "@/styles/Global.style";
import Heading from "@/components/heading";
import Text from "@/components/text";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "Javascript Function scope and closures",
  metaDescription:
    "Understand JavaScript function scope and closures to create robust and efficient code. This tutorial covers the concepts of function scope and closures in JavaScript, enabling you to better manage variable scope and create self-contained functions for improved code organization and reusability.",
  metaKeywords:
    "JavaScript tutorial, function scope, closures, variable scope, code organization, code reusability, front-end development, web development",
  metaOgTitle:
    "JavaScript Function Scope and Closures Tutorial: Mastering Variable Scope and Code Organization",
  metaOgUrl: "https://www.webschooljs.com/javascript/function-scope-closure",
  metaOgImage: "https://www.webschooljs.com/images/javascript-logo.jpeg",
};

const JSFunctionScopeAndClosurePage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Function scope and closures :"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Text
        content={`
        Function scope and closures are important concepts in JavaScript that govern how variables are accessed and preserved within functions.
        <br/><br/>
        <b>Function Scope:</b><br/>
        Function scope refers to the visibility and accessibility of variables within a function. In JavaScript, each function creates its own scope, meaning that variables declared within a function are only accessible within that function (including any nested functions).
        <br/>
        <br/>
        Here's an example to illustrate function scope:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={fnScopeSnippet} />

      <Text
        content={`<br/>
        In this example, the message variable is declared within the outerFunction. It is accessible within the innerFunction, which is nested inside outerFunction. However, it is not accessible outside of outerFunction.
        <br/>
        <br/>
        Function scope helps to prevent variable name collisions and provides encapsulation, allowing variables within a function to be independent of variables with the same name in other scopes.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        <b>Closures:</b> <br/>
        A closure is a combination of a function and the environment in which it was declared. It allows a function to retain access to variables from its outer (enclosing) scope even after the outer function has finished executing. In other words, a closure allows a function to "remember" and access variables that were in scope when the function was defined.
        <br/><br/>
        Here's an example to illustrate closures:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={closureSnippet} />

      <Text
        content={`<br/>
        In this example, the outerFunction returns the innerFunction, which is then assigned to the closureFunction variable. When closureFunction is invoked, it still has access to the message variable from its outer scope, even though outerFunction has already finished executing. This is possible because the innerFunction forms a closure, preserving the reference to the message variable.
        <br/>
        <br/>
        To create private variables and enclose data inside of functions, closures are extremely helpful. They give access to variables that would otherwise be unreachable and a mechanism to keep the state intact.
        <br/>
        <br/>
        Understanding function scope and closures are crucial for writing robust and maintainable JavaScript code. They allow for better control over variable accessibility and provide powerful mechanisms for data encapsulation and state management.

        <br/>
        <br/>
        Let's create a program that uses a closure function to count the number of times a button is clicked. Here's the code:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={btnClickedClosureSnippet} />

      <Text
        content={`<br/>
        In this example, we define a function called createCounter that creates a closure. Within createCounter, we declare a local variable count and a nested function increment. The increment function increments the count variable and logs the current count to the console.
        <br/><br/>
        The createCounter function returns the increment function, preserving the reference to the count variable. This creates a closure where the count variable is accessible and retains its value even after createCounter has finished executing.
        <br/><br/>
        We then invoke createCounter and assign the returned function to the counter variable. This allows us to use counter as a function that increments and logs the count each time it is called.
        <br/><br/>
        Finally, we simulate button clicks by invoking the counter function multiple times. Each time the function is called, it increments the count and logs the updated value to the console.
        <br/><br/>
        When you run this code, you will see the following output:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={btnClickdOutSnippet} />

      <Text
        content={`<br/>
        This program demonstrates the use of a closure to create a counter that persists its state across multiple function calls. The count variable is encapsulated within the closure and is not accessible from outside the <b>createCounter</b> function, ensuring data privacy and maintaining the count value accurately.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/expressions-arrow"
        nextLink="/javascript/arrays"
      />
    </Layout>
  );
};

export default JSFunctionScopeAndClosurePage;
