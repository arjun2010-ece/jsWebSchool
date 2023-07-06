import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  arrowExampleSnippets,
  arrowOutSnippets,
  arrowOutputSnippets,
  funcExpressionSnippet,
  namedFuncExpressionSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Functions expressions and arrow functions',
  metaDescription:
    'Discover the power of JavaScript function expressions and arrow functions for creating efficient and concise code. This tutorial covers function expressions, arrow function syntax, and how to leverage them for various use cases, empowering you to write modular and expressive JavaScript code.',
  metaKeywords:
    'JavaScript tutorial, function expressions, arrow functions, JavaScript functions, JavaScript anonymous functions, JavaScript named functions, front-end development, web development, modular code, code efficiency',
  metaOgTitle:
    'JavaScript Function Expressions and Arrow Functions Tutorial: Writing Efficient and Expressive Code',
  metaOgUrl: 'https://www.webschooljs.com/javascript/expressions-arrow',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSFunctionExpressionsAndArrowFunctionsPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Function expressions and Arrow functions :"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Function expressions and arrow functions are alternative ways to define functions in JavaScript. They provide more concise syntax and offer some additional features compared to traditional function declarations. Let's explore each of them in detail:
        <br/>
        <br/>
        <b>Function Expressions:</b> <br/>
        Function expressions involve assigning a function to a variable. They can be named or anonymous functions. The syntax for a function expression is as follows:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={funcExpressionSnippet} />

      <Text
        content={`
       <br/>
       Here's an example of an arrow function:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={namedFuncExpressionSnippet} />

      <Text
        content={`
       <br/>
       The printSomething variable in this example is assigned the arrow function, which accepts a name parameter and writes a greeting to the console.
       <br/>
       <br/>
       There are some distinctive qualities of arrow functions:
       <br/><br/>
       If a function only accepts one parameter, the parentheses around the parameter can be skipped.
       <br/>
       <br/>
       if the function body has only one line of statement/expression, then the curly braces can be omitted and there is no need for a return keyword to return something as it will be implicitly returned.
       <br/><br/>
       While if the function body has multiple lines of statements, then we need curly braces and there is a need for a return keyword to return something as it will be explicitly returned.
       <br/><br/>
       Here's an example of an arrow function with simplified syntax:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={arrowOutSnippets} />

      <Text
        content={`
       <br/>
       In this example, the square variable is assigned an arrow function that calculates the square of a number. Since it has a single parameter and a single expression, the parentheses around the parameter and the curly braces are omitted.
       <br/>
       <br/>
       Arrow functions also have a lexical <b>this</b> binding, which means they do not have their own <b>this</b> context. Instead, they inherit the <b>this</b> value from the surrounding scope.
       <br/><br/>
       Both function expressions and arrow functions provide flexibility and concise syntax for defining functions in JavaScript. They are commonly used in functional programming paradigms and can be handy for writing more expressive and readable code. However, it's important to consider their limitations and choose the appropriate style based on the specific requirements of your code.
       <br/>
       <br/>

       Let's create a simple program that calculates the area of a rectangle using an arrow function. Here's the code:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={arrowExampleSnippets} />

      <Text
        content={`
       <br/>
       In this example, we define an arrow function called <b>calculateArea</b> that takes two parameters: <b>length</b> and <b>width</b>. The function uses the arrow (=>) notation and a single expression <b>length * width</b> to calculate the area of the rectangle. The result is implicitly returned by the arrow function.

       <br/>
       <br/>

        We then declare variables <b>length</b> and <b>width</b> with their respective values. We invoke the <b>calculateArea</b> function with the provided length and width arguments, and store the returned value in the <b>area</b> variable.

        <br/>
        <br/>

        Finally, we print the result using <b>console.log()</b>. When you run this code, the following output will be displayed in the console:
       <br/>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={arrowOutputSnippets} />

      <Text
        content={`
       <br/>
       This program demonstrates how an arrow function can be used to define a concise and readable calculation. It simplifies the code by removing the need for the return statement and curly braces, resulting in a more streamlined function definition.
       <br/><br/>
       <i>Arrow functions are particularly useful for short, single-expression functions like this, where the focus is on the calculation or transformation of values.</i>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/functions"
        nextLink="/javascript/function-scope-closure"
      />
    </Layout>
  );
};

export default JSFunctionExpressionsAndArrowFunctionsPage;
