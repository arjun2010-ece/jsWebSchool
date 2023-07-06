import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  forEachSnippet,
  forLoopSnippet,
  forOfEachSnippet,
  mapAndFilterExampleSnippet,
  mapAndFilterSnippet,
  purposeOfFilterSnippet,
  purposeOfMapSnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'What is Javascript ?',
  metaDescription:
    'Master the art of array iteration in JavaScript using loops and methods. This tutorial covers the usage of for loops, while loops, and introduces powerful array methods like map and filter. Learn how to effectively traverse and manipulate arrays to solve common programming challenges.',
  metaKeywords:
    'JavaScript tutorial, array iteration, for loop, while loop, map method, filter method, front-end development, web development, programming challenges',
  metaOgTitle:
    'Array Iteration in JavaScript: Exploring Loops (for, while) and Methods (map, filter)',
  metaOgUrl:
    'https://www.webschooljs.com/javascript/array-iteration-loops-methods',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSArraysIterationLoopsAndMethodsPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Array iteration using loops and array methods:"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        There are several methods for iterating over arrays in JavaScript, including loops and array functions. Loops are oldest ways of iterating and array inbuilt functions are new ways of iteration.<br/><br/>
        <i>Iteration means repetition of some process</i> and since array has a lot of elements so we 
        move to each element and do some operation and that is what we considers iteration in javascript.
        Let's investigate these methods:
        <br/>
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <Heading
        content="Array iteration using popular javascript loops:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        <b>For Loop: </b>
        The classic for loop is frequently used to iterate across arrays. Here's an illustration:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={forLoopSnippet} />

      <Text
        content={`<br/>
        In this example, a for loop is used, and the index variable i increments from 0 to the length of the array (arr.length), starting from 0. Using the index i, we may access each element of the array and carry out the required operations.
        <br/>
        <br/>
        <b>forEach() Method</b>: For every element in an array, the forEach() method of an array executes a given function once. 
        As an illustration, consider the following:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={forEachSnippet} />

      <Text
        content={`<br/>
        The <b>forEach()</b> method executes a callback function with a callback argument for each element of the array. The current element is passed as a parameter to the callback function, where it can be changed.
        <br/><br/>
        <b>For...of Loop:</b> The for...of loop was first introduced in ECMAScript 2015 (ES6) as a modern iteration construct. It provides the most easy technique to loop over array elements. Here is an example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={forOfEachSnippet} />

      <Text
        content={`<br/>
        In this example, the for...of loop iterates over each element of the array, and the element variable holds the value of the current element in each iteration. You can perform operations on the element variable within the loop body.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <Heading
        content="Array iteration using popular javascript inbuilt methods:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />
      <Text
        content={`
        We have a lot of methods and the most popular of them are <b>map()</b>, <b>reduce()</b>
        and <b>filter()</b> methods.
        We will study map() and filter together as both has the same signature and work the same way with little difference.
        <br/>
        <br/>
        <b>map()</b> method and <b>filter()</b> method: 
        When using the map() and filter() method in JavaScript, an array is iterated over and a new array is created by applying a transformation function to each element of the initial array. 
       In map(), the new array that is produced has the same length as the original array as it is the result of the mapping function being applied to its corresponding element in the original array,
       while in filter(), the new array may or may not have the same length as the original array as we apply some filtering here.
        <br/>
        <br/>
        The map() and filter() method's syntax is as follows:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={mapAndFilterSnippet} />

      <Text
        content={`
       <br />
        <b>callback:</b>
        A function that is known as a callback is triggered for each array element. It takes maximum 3 arguments:
        <br /> <br />
        <b>element</b>: The array's current element under consideration.
        <br />
        <br />
        <b>index (optional):</b>
        The current element being processed's index, which is optional.
        <br />
        <br />
        <b>array(optional):</b> The array that map() was called on. It is also optional.
        <br />
        <br />
        <b>thisArg (optional):</b>
        In the callback function, <b>this</b> might refer to an object. When calling the callback function, it serves as the value of <b>this</b>.
        <br />
        <br />
        Using the <b>map()</b> and <b>filter()</b> technique is illustrated in the following example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={mapAndFilterExampleSnippet} />

      <Text
        content={`
       <br />
        On the <b>array</b> in the above illustration where <b>map()</b> method is used, each element of the array is multiplied by two via the callback function <b>(element, index, array) => element * 2</b>. The modified values <b>[2, 4, 6, 8, 10]</b> are contained in the resulting array, <b>mappedArray</b>.
        <br /><br />
        On the <b>numbers</b> array in this example, the <b>filter()</b> method is used. The modulo operation is used in the callback function to determine whether each element is even <b>(number) => number% 2 === 0</b>. Only the entries that match the criteria—the even integers [2, 4]—are included in the new array.
        <br /><br />
        The <b>map()</b> and <b>filter()</b> method generates a new array with the altered elements; it does not alter the old array in any way.
        <br/><br/>
        <b>Where we need map() method:</b> <br/>
        <i>modiying array elements, Converting Data Format etc</i>
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={purposeOfMapSnippet} />

      <Text
        content={`
        <br/>
        <b>Where we need filter() method:</b> <br/>
        <i>Filtering numbers, Objects by Property, Strings by Condition etc</i>
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={purposeOfFilterSnippet} />

      <Text
        content={`
        <br/>
        We will study about <b>reduce()</b> in next page.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/array-methods"
        nextLink="/javascript/reduce"
      />
    </Layout>
  );
};

export default JSArraysIterationLoopsAndMethodsPage;
