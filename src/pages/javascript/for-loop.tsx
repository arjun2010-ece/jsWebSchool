import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  basicForLoopOutputSnippet,
  basicforLoopSnippet,
  forLoopFirstSolSnippet,
  forLoopResultSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript for loop',
  metaDescription:
    'Master the JavaScript for loop and learn how to iterate over arrays and perform repetitive tasks efficiently. This tutorial covers the usage of the for loop, enabling you to control iterations, access array elements, and execute code block for a specified number of times in JavaScript.',
  metaKeywords:
    'JavaScript tutorial, for loop, JavaScript iteration, array iteration, front-end development, web development, repetitive tasks',
  metaOgTitle:
    'JavaScript for Loop Tutorial: Efficient Array Iteration and Repetitive Tasks',
  metaOgUrl: 'https://www.webschooljs.com/javascript/for-loop',
  metaOgImage: 'https://www.webschooljs.com/images/javascript-logo.jpeg',
};

const JSForLoopPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading content="for loop :" headingType="h1" customStyle={tw`mb-4`} />

      <Text
        content={`
        The most popular loop in javascript is <b>for loop</b>.
        It allows us to run a piece of code repeatedly for specific number of iterations.
        Three main parts of this loop are: Initialization, condition, and iteration.
        <br/>
        <br/>
        Let's examine each part of the for loop individually:
        <br/>
        <br/>
        <i>Initialization :</i>
        This is the first action that is taken before the loop begins and is only performed once. 
        The variable or variables in the loop are initialized using it. Declaring variables and 
        assigning them can be included. For instance, the statement let i = 0 gives the loop variable 
        i a value of 0.
        <br/>
        <br/>
        <i>Condition :</i>
        Before beginning each iteration of the loop, this condition is checked. The body of the loop is 
        run if the condition evaluates to true. The loop is ended if the condition evaluates to false. 
        Any expression that yields the boolean value true or false is acceptable but runs the block
        only for true cases.
        <br/> 
        i < 5, for instance, 
        determine whether the loop variable i is smaller than 5.
        <br/>
        <br/>
        Iteration: This is the step that is executed at the end of each iteration of the loop. It is 
        used to update the loop variable or variables. It can include incrementing or decrementing the
         loop variable, or modifying any other relevant values. For example, i++ increments the loop 
         variable i by 1 after each iteration
         <br/>
         <br/>
         The curly braces make up the body of the loop.
        As many times conditions will be evaluated as true, that many times the code block inside this 
        body will be executed repeatedly.
        <br/>
        <br/>
        Here is an illustration showing how to use a for loop:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={basicforLoopSnippet} />

      <Text
        content={`
       <br/>
       In this example, the for loop initializes the loop variable i with a value of 0. The condition 
       checks if i is less than 5. If the condition is true, the loop body is executed. In each 
       iteration, the value of i is printed to the console using console.log(). After each iteration, 
       the i variable is incremented by 1 (i++). This process continues until i reaches 5, at which 
       point the condition evaluates to false and the loop terminates.
       <br/>
       <br/>
       When you run this code, the following output will be displayed in the console:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={basicForLoopOutputSnippet} />

      <Text
        content={`
       <br/>
       This is because the loop iterates five times, starting from 0 and ending at 4, with i 
       incrementing by 1 in each iteration.
       <br/>
       <br/>
       You can use the for loop to perform a wide range of tasks, such as iterating over arrays, 
       executing a block of code a specific number of times, and more. The flexibility of the for 
       loop makes it a powerful tool for repetitive operations in JavaScript.
       <br/>
       <br/>
       Lets see some real programming in action:<br/>
       Write a javascript program to calculate sum of numbers from 1 to n, where value of n will be 
       provided.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={forLoopFirstSolSnippet} />

      <Text
        content={`
       <br/>
       In this example, the calculateSum function takes a number as input and uses a for loop to 
       iterate from 1 up to the given number. The variable sum is initialized to 0. In each iteration,
        the loop adds the current value of i to the sum using the += operator. After the loop 
        finishes, the function returns the final sum.
        <br/>
        <br/>
        To test the function, we set the inputNumber variable to 5 and call the calculateSum function 
        with this value. The result is stored in the result variable. Finally, we display the 
        result using console.log().
        <br/>
        <br/>
        When you run this code, the console will show the following output:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={forLoopResultSnippet} />
      <Text
        content={`
       <br/>
       This is because the function calculates the sum of numbers from 1 to 5, which 
       is 1 + 2 + 3 + 4 + 5 = 15.
       <br/>
       <br/>

        Feel free to modify the inputNumber variable to test the function with different input values 
        and observe the corresponding sums calculated using the for loop.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/switch-case"
        nextLink="/javascript/for-in-loop"
      />
    </Layout>
  );
};

export default JSForLoopPage;
