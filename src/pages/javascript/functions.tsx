import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  functionCallCodeSnippet,
  functionDeclarationsCodeSnippet,
  functionDeclarationsSnippet,
  functionExpressionsCodeSnippet,
  functionExpressionsSnippet,
  functionParamsCodeSnippet,
  functionReturnCodeSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Functions',
  metaDescription:
    'Explore the power of JavaScript functions and learn how to create reusable blocks of code. This tutorial covers the fundamentals of JavaScript functions, including function declarations, function expressions, parameters, return values, and function invocation, empowering you to write modular and efficient code.',
  metaKeywords:
    'JavaScript tutorial, JavaScript functions, function declarations, function expressions, parameters, return values, function invocation, front-end development, web development, code reusability',
  metaOgTitle:
    'JavaScript Functions Tutorial: Building Modular and Reusable Code',
  metaOgUrl: 'https://www.webschooljs.com/javascript/functions',
  metaOgImage: 'https://www.webschooljs.com/images/javascript-logo.jpeg',
};

const JSFunctionsPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading content="Functions :" headingType="h1" customStyle={tw`mb-4`} />

      <Text
        content={`
        In JavaScript, functions are <i>reusable blocks of code</i> that can be defined and invoked to <i>perform 
        specific tasks</i>. They are an essential part of the language and <i>provide a way to organize and encapsulate logic</i>. <br/>
        <i>Function takes input, do some maipulations on input and then gives back output with a return statement.</i>
        <br/><br/>
        For understanding how to write functions, we need to understand  3 things: <b>function declarations, function expressions.</b> and <b>function invocation/call</b>
        <br/><br/>
        <b>Function Declarations:</b> <br/>
        A function declaration defines a named function using the function keyword. It has the following syntax
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={functionDeclarationsSnippet} />
      <Text
        content={`<br/>
        Here's an example of a function declaration:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={functionDeclarationsCodeSnippet} />

      <Text
        content={`<br/>
        In this example, the greet function is declared with a single parameter name. When invoked, it prints a greeting message to the console, using the provided name.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        <b>Function Expressions:</b> <br/>
        A function expression assigns a function to a variable. It has the following syntax:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={functionExpressionsSnippet} />

      <Text
        content={`<br/>
        Here's an example of a function declaration:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={functionExpressionsCodeSnippet} />

      <Text
        content={`<br/>
        In this example, the square function is defined as an anonymous function and assigned to the square variable. It takes a single parameter num and returns the square of the input value.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        <b>Function Invocation/call:</b> <br/>
        Once a function is defined, it can be invoked (or called) by using its name followed by parentheses () and passing any required arguments. Here's an example:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={functionCallCodeSnippet} />

      <Text
        content={`<br/>
        In this example, the greet function is called with the argument "Alice", resulting in the greeting message being printed to the console. The square function is called with the argument 5, and the returned value (25) is stored in the result variable, which is then printed to the console.
        <br/>
        <br/>
        Functions in JavaScript can also have optional parameters, default parameter values, and can return values using the return statement. Additionally, they can be defined inside other functions (nested functions) and can be passed as arguments to other functions (higher-order functions).
        <br/>
        <br/>
        Functions play a crucial role in JavaScript programming as they enable code reuse, modularization, and the ability to organize complex logic into manageable units. They are fundamental to building applications in JavaScript.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Function parameters vs arguments :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        In JavaScript, function parameters and arguments are related concepts that refer to the values passed into a function during its invocation. <i>Parameters are the variables listed in the function declaration, while arguments are the actual values passed to the function when it is called.</i>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={functionParamsCodeSnippet} />

      <Text
        content={`<br/>
        In the above function defination code, <b>name</b> and <b>age</b> are the parameters.<br/>
        <br/>
        While in the function call code, <b>"Alice"</b> and <b>25</b> are the arguments (that is tha actual value we are passing in the function body).
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Returning values from functions :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        Returning values from functions in JavaScript allows the functions to produce a result or output that can be used in other parts of the program.
        <br/><br/> 
        The return statement is used to specify the value that should be returned from a function. 
        <br/><br/> 
        When a return statement is encountered in a function, it immediately terminates the function execution and sends the specified value back to the caller.
        <br/>
        <br/>
        Here's an example that demonstrates returning a value from a function:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={functionReturnCodeSnippet} />

      <Text
        content={`<br/>
        Using the return statement, the add function in this example returns the sum of the two inputs, a and b. The return a + b; instruction is executed and the number 7 is returned when the function is called with inputs 3 and 4. The result variable then holds the returning value and prints it to the terminal.
        <br/><br/>
        <i>Functions can return any valid JavaScript value, including numbers, strings, booleans, objects, arrays, or even other functions. You can also return complex data structures or perform calculations or operations before returning a value.</i>
        <br/><br/>
        It's important to note that when a return statement is encountered, it immediately exits the function, skipping any code that follows it within the same block. This behavior allows you to control the flow of execution and determine when a function should stop and provide a result.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/for-in-loop"
        nextLink="/javascript/expressions-arrow"
      />
    </Layout>
  );
};

export default JSFunctionsPage;
