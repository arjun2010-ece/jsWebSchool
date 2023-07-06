import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  concatenateReduceExampleSnippet,
  countOccurenceReduceSnippets,
  flatReduceExSnippet,
  maxReduceExampleSnippet,
  minReduceExampleSnippet,
  reduceExampleSnippet,
  reduceSyntaxSnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Js reduce()',
  metaDescription:
    'Explore the JavaScript reduce() method and learn how to perform array reduction operations with ease. This tutorial covers the usage of the reduce() method in JavaScript, enabling you to perform calculations, aggregate values, and transform arrays into single values efficiently.',
  metaKeywords:
    'JavaScript tutorial, reduce() method, array reduction, array operations, JavaScript arrays, front-end development, web development, data aggregation',
  metaOgTitle:
    'JavaScript reduce() Method Tutorial: Performing Array Reduction Operations',
  metaOgUrl: 'https://www.webschooljs.com/javascript/reduce',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSReducePage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Javascript reduce() method:"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        This is one of the very dynamic and important method, which is widely used, so you need to learn it and practice it to sharpen your javascript.
        <br/>
        <i> Javascripts' array method reduce()  can reduce an array to a single value 
        by invoking a callback function on each element of the array.</i>

        It loops through the array and accumulates a single value using the logic specified in the callback function.
        <br/><br/>
        As an example, consider the syntax for the reduce() function:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={reduceSyntaxSnippet} />

      <Text
        content={`<br/>
        <b>callback</b>: A function that is known as a callback is triggered for each array element. It takes maximum 4 arguments:
        <br/><br/>
        <b>accumulator</b>: The total value computed in the previous iteration or, if given, the initialValue.
        <br/><br/>
        <b>currentValue</b>: The array's currently-processed element.
        <br/><br/>
        <b>currentIndex</b>: The index of the currently being processed element.
        <br/><br/>
        <b>array</b>: The array on which reduce() was called (optional).
        <br/><br/>
        <b>initialValue</b> (optional): A starting point that serves as the value for the initial accumulator. If nothing is specified, the starting value of the accumulator is taken from the first element of the array, and the iteration begins with the second element.
        <br/><br/>
        Here is an illustration of how to use the reduce() function:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={reduceExampleSnippet} />

      <Text
        content={`<br/>
        In this example, the <b>reduce()</b> function is called on the <b>numbers</b> array. The callback function <b>(accumulator, currentValue) => accumulator + currentValue</b> adds each element to the accumulator, which starts with an initial value of <b>1</b>. The final result, <b>sum</b>, is <b>15</b>, which is the accumulated sum of all the elements in the array.
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
        content="Popular examples of reduce() method:"
        headingType="h5"
        customStyle={tw`mb-4 mt-8`}
      />
      <Text
        content={`<br/>
        The fastest way to understand reduce() method os to practice examples using this method.
        Some of the examples are:
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
        content="find the maximum or minimum number in an array:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <CodeSnippet content={maxReduceExampleSnippet} />

      <Text
        content={`<br/>
        In this example, the reduce() function is used to find the maximum number in the array. The callback function <b>(max, current) => Math.max(max, current)</b> compares each element with the current maximum value and returns the greater of the two.
        <br/>
        <br/>
        <b>Math.max()</b> is a javascript method to find maximum of 2 values. e.g Math.max(5, 2) gives 5.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={minReduceExampleSnippet} />

      <Text
        content={`<br/>
        In this example, the reduce() function is used to find the minimum number in the array. The callback function <b>(min, current) => Math.min(min, current)</b> compares each element with the current minimum value and returns the minimum of the two.
        <br/>
        <br/>
        <b>Math.min()</b> is a javascript method to find minimum of 2 values. e.g Math.min(5, 2) gives 2.
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
        content="Concatenate all the elements in an array into a single value:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <CodeSnippet content={concatenateReduceExampleSnippet} />

      <Text
        content={`<br/>
        In this example, the reduce() function is used to concatenate all the strings in the array. The callback function <b>(result, current) => result + ' ' + current</b> appends/joins each word to the existing result, with a space in between.
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
        content="Flattening an Array of Arrays:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <CodeSnippet content={flatReduceExSnippet} />

      <Text
        content={`<br/>
        In this example, the <b>reduce()</b> method is used to flatten a nested array structure. The accumulator (<b>accumulator</b>) starts with an empty array ([]), and in each iteration, it concatenates the current array (<b>currentValue</b>) to the flattened array.
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
        content="Counting the Occurrences of Elements:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <CodeSnippet content={countOccurenceReduceSnippets} />

      <Text
        content={`<br/>
       This is one of the very important examples, even asked many times in interview also.
       <br/><br/>
       In this example, the <b>reduce()</b> method is used to count the occurrences of each element in the array. The accumulator (<b>accumulator</b>) starts with an empty object ({}), and in each iteration, it increments the count of the current element (<b>currentValue</b>) by accessing it as a property of the accumulator object.
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
        prevLink="/javascript/array-iteration-loops-methods"
        nextLink="/javascript/searching-and-filtering"
      />
    </Layout>
  );
};

export default JSReducePage;
