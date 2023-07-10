import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  equalitySnippet,
  ifElseBasicSnippet,
  ifElseLogicSnippet,
  multipleIfElseSnippet,
  shortcircutSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript IF...ELSE',
  metaDescription:
    'Master the JavaScript if...else statement and learn how to add conditional logic to your code. This tutorial covers the usage of if...else statements in JavaScript, enabling you to make decisions and execute different code blocks based on specific conditions.',
  metaKeywords:
    'JavaScript tutorial, if...else statement, conditional logic, JavaScript conditions, front-end development, web development, decision-making',
  metaOgTitle:
    'JavaScript if...else Tutorial: Adding Conditional Logic to Your Code',
  metaOgUrl: 'https://www.webschooljs.com/javascript/if-else',
  metaOgImage: 'https://www.webschooljs.com/images/javascript-logo.jpeg',
};

const JSIfElsePage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Javascript If/Else :"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        JavaScript's if...else statement is a conditional statement that enables you to run various code 
        blocks in accordance with a given condition. <br/> 
        It uses the following basic syntax:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={ifElseBasicSnippet} />

      <Text
        content={`<br/>
        How the if...else statement functions is as follows:
        <br/><br/>
        An evaluated boolean expression serves as the condition. The code block after the if statement is 
        run if the condition evaluates to true. assuming the condition evaluates to false, the code 
        block that comes after the else statement is run (assuming it is there).
        <br/><br/>
        One or more sentences are contained within curly brackets to form the code block that corresponds 
        to the if statement. If the requirement is met, these assertions will be carried out.
        <br/><br/>
        When the condition results in a false value, the else block (optional) is run that may contain one or
        more statements.
        <br/>
        <br/>
        Here's an example that shows the usage of if...else statement:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={ifElseLogicSnippet} />

      <Text
        content={`<br/>
        In this example, the condition num % 2 === 0 checks if num is divisible by 2 without a remainder. 
        If the condition is true, it prints "The number is even." Otherwise, it prints "The number is 
        odd."
        <br/><br/>
        You can also use multiple if...else statements in succession to handle multiple conditions:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={multipleIfElseSnippet} />

      <Text
        content={`<br/>
        In this example, different age ranges are checked, and the appropriate message is printed based 
        on the condition.
        <br/>
        <br/>
        The if...else statement allows you to control the flow of your program based on specific 
        conditions, making your code more dynamic and adaptable to different scenarios.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Comparison operators in conditional statements :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        Comparison operators are commonly used in conditional statements, such as if statements, to evaluate
         conditions and make decisions based on the comparison result. JavaScript provides several 
         comparison operators to compare values. Here are the commonly used comparison operators in
          conditional statements:
       
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={equalitySnippet} />

      <Text
        content={`
        <br/>
        The equality operator == compares two values for equality, performing type coercion if necessary. 
        While The strict equality operator === compares two values for equality without performing type 
        coercion. It checks both the value and the type.
       <br/>
       <br/>
       We can use other operators also in IF condition like (!= or !==), (<, >, <=, >=) etc.

        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Short-circuit evaluation :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        Short-circuit evaluation is a behavior exhibited by logical operators (&& and ||) in JavaScript. 
        It refers to the process of evaluating the operands of these operators from left to right and 
        stopping as soon as the result can be determined without evaluating the remaining operands.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={shortcircutSnippet} />

      <Text
        content={`<br/>
        In the first example, the name variable is checked for truthiness and then further evaluated for 
        its length only if it is truthy. This prevents an error when name is null, undefined, or an empty 
        string.
        <br/><br/>
        In the second example, the name parameter of the greetUser function is assigned a default value 
        of "Guest" using short-circuit evaluation. If name is a falsy value (such as null or undefined), 
        the right operand is evaluated, and the default value is assigned.
        <br/><br/>
        By leveraging short-circuit evaluation, you can write more concise and efficient code by avoiding 
        unnecessary evaluations and handling default values in a straightforward manner.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/operators"
        nextLink="/javascript/switch-case"
      />
    </Layout>
  );
};

export default JSIfElsePage;
