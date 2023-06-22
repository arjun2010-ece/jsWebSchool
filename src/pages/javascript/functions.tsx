import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  functionCallCodeSnippet,
  functionDeclarationsCodeSnippet,
  functionDeclarationsSnippet,
  functionExpressionsCodeSnippet,
  functionExpressionsSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const JSFunctionsPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
    >
      <Heading content="Functions :" headingType="h5" customStyle={tw`mb-4`} />

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
        content={`
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
    </Layout>
  );
};

export default JSFunctionsPage;
