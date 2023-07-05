import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  addSpliceSnippet,
  concatArrSnippets,
  deleteSnippet,
  flatExampleSnippet,
  flatSyntaxSnippet,
  isArrayExmpleSnippet,
  isArraySyntaxSnippet,
  lengthArrSnippets,
  popArrSnippets,
  pushArrSnippets,
  removedSpliceSnippet,
  replaceSpliceSnippet,
  reverseArrSnippet,
  shiftArrSnippets,
  sliceArrSnippets,
  splitSnippet,
  toStringSnippet,
  unshiftArrSnippets,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Array Methods',
  metaDescription:
    'Explore the powerful array methods in JavaScript and unleash the potential of array manipulation. This tutorial covers essential array methods such as map, filter, reduce, and more, empowering you to efficiently perform common operations and transform your data in JavaScript.',
  metaKeywords:
    'JavaScript tutorial, array methods, JavaScript arrays, array manipulation, map method, filter method, reduce method, Array.isArray(), Array.length, reverse(), join(), toString(), split(), push(), pop(), shift(), unshift(), concat(), slice(), splice(), delete and flat(), front-end development, web development',
  metaOgTitle:
    'JavaScript Array Methods Tutorial: Mastering Array Manipulation and Transformation',
  metaOgUrl: 'https://jswebschool.com/javascript/array-methods',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSArraysPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Javascript inbuilt Array Methods:"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        A number of built-in properties, operators and methods for manipulating arrays are available in JavaScript.
        Some of them are : <br/> 
        <b>Array.isArray(), Array.length, reverse(), join(), toString(), split(), push(), pop(), shift(), unshift(), concat(), slice(), splice(), delete </b> and <b>flat()</b>. 
        Here is an explanation of a few such methods:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <Text
        content={`
        <br/>
        <b>Array.isArray(value):</b>
        This method checks whether a given value is an array or not. It returns <b>true</b> if value
        is array else return <b>false</b> if not array. The <b>value</b> in below syntax is what we check.
        <br/>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={isArraySyntaxSnippet} />

      <Text
        content={`
        <br/>
        Illustrations showing the usage are:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={isArrayExmpleSnippet} />

      <Text
        content={`
        <br/>
        <b>Array.length:</b>
        This property gives the length of an array.
        <br/>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={lengthArrSnippets} />

      <Text
        content={`
        <br/>
        <b>reverse():</b>
        Reversing the order of the elements in an array is possible using JavaScript's built-in reverse() method.
        <br/>
        The syntax and example:
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={reverseArrSnippet} />

      <Heading
        content="Conversion from array to string and string to array:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />
      <Text
        content={`
        This is one of the very important concept in javascript and we have 3 methods for that purpose.
        <b>join()</b>, <b>toString()</b> and <b>split()</b>
        <br/>
        <br/>
        <b>toString()</b> and <b>join()</b> <i>converts an array to a string.</i>
        <b>join()</b> method joins the elements of array with a specified delimiter and that we can not
        do in toString() method.
        <i>Please note that toString() method can convert any data type into string.</i>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={toStringSnippet} />

      <Text
        content={`
        <br/>
        <b>split()</b> <i>converts a string into an array</i> of substrings based on a specified delimiter.
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={splitSnippet} />

      <Heading
        content="Major array methods widely used in javascript:"
        headingType="h6"
        customStyle={tw`mb-4 mt-16 underline`}
      />

      <Text
        content={`
        <b>push(element1, element2, ..., elementN):</b>
        This method increases the length of an array by one or more elements and returns the new length.
        <br/>
        <br/>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={pushArrSnippets} />

      <Text
        content={`
        <br/>
        <br/>
        <b>pop():</b>
        The final element in an array is removed using this method, and it is then returned.
        <br/>
        <br/>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={popArrSnippets} />

      <Text
        content={`
        <br/>
        <br/>
        <b>shift():</b>
        The first element of an array is eliminated using this procedure, and all subsequent element are moved to a lower index. The deleted element is returned.
        <br/>
        <br/>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={shiftArrSnippets} />

      <Text
        content={`
        <br/>
        <br/>
        <b>unshift(element1, element2, ..., elementN) :</b>
        This method adds one or more elements to the beginning of an array and shifts existing elements to higher indexes. It returns the new length of the array.
        <br/>
        <br/>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={unshiftArrSnippets} />

      <Text
        content={`
        <br/>
        <br/>
        <b>concat(array1, array2, ..., arrayN) :</b>
        This technique creates a new array by joining several arrays or values. The original arrays are left alone.
        <br/>
        <br/>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={concatArrSnippets} />

      <Text
        content={`
        <br/>
        <br/>
        <b>slice(start, end) :</b>
        Using this technique, a portion of an existing array is extracted to generate a new array. While the end index is exclusive, the start index is inclusive. The extraction extends to the end of the array if end is left out.
        <br/>
        <br/>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={sliceArrSnippets} />

      <Text
        content={`
        <br/>
        <br/>
        <b>splice(startIndex, deleteCount, item1, item2, ...) :</b>
        The splice() method in JavaScript is used to add, remove, or replace elements within an array. It modifies the original array and returns an array containing the removed elements.
        <br/>
        <br/>
        startIndex: The index where the alteration starts. It may be an integer that is positive or negative. 1 means the first index, and 2 means the second index. In the same way, -1 designates the final element and -2 means the second last element.

        <br/>
        <br/>
        deleteCount (optional): 
        The optional deleteCount parameter specifies how many entries from the array should be deleted, starting at startIndex. If deleteCount is not supplied or if its value is more than the number of items from startIndex to the end of the array, all the elements starting with startIndex will be erased.

        <br/>
        <br/>
        item1, item2, ... (optional): item1, item2,... (optional) are the elements that should be added to the array at the startIndex. These elements are added to the array in place of the ones that were deleted.<br/>
        Let's look at some examples to understand the splice() method:
        <br/><br/>
        Removing Elements:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={removedSpliceSnippet} />

      <Text
        content={`
        <br/>
        In this example, splice(2, 2) starts at index 2 and removes two elements (3 and 4) from the array. The resulting array is [1, 2, 5], and the removed elements are [3, 4].
        <br/>
        <br/>
        Adding Elements:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={addSpliceSnippet} />

      <Text
        content={`
        <br/>
        In this example, splice(2, 0, 'a', 'b') starts at index 2 and removes 0 elements. Instead, it adds 'a' and 'b' at index 2. The resulting array is [1, 2, 'a', 'b', 3, 4, 5].
        <br/>
        <br/>
        Replacing Elements:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={replaceSpliceSnippet} />

      <Text
        content={`
        <br/>
        In this example, splice(2, 2, 'a', 'b', 'c') starts at index 2 and removes two elements (3 and 4). Then it inserts 'a', 'b', and 'c' in their place. The resulting array is [1, 2, 'a', 'b', 'c', 5], and the removed elements are [3, 4].
        <br/><br/>
        It's important to note that the splice() method modifies the original array. If you don't want to modify the original array, you can make a copy of it using the slice() method before using splice().
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <Text
        content={`
        <br/>
        <br/>
        <b>delete :</b>
        By utilizing the delete JavaScript operator, array elements can be removed.
        The array has holes that are undefined after using remove.
        Instead, use pop() or shift().
        <br/>
        <br/>
        Example :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={deleteSnippet} />

      <Text
        content={`
        <br/>
        <br/>
        <b>flat() :</b>
        The flat() method is a built-in JavaScript array method that is used to flatten a nested array structure. <i>It creates a new array</i> that is a flattened version of the original array, which means it removes any nested arrays and returns a single-level array containing all the elements.
        <br/>
        <br/>
        Here's the syntax for the flat() method:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={flatSyntaxSnippet} />

      <Text
        content={`
        <br/>
        The flat() function's optional depth argument specifies the flattening depth. The depth will only flatten down one level because it is typically set to 1. No matter how deeply the array is nested, you can completely flatten it by passing Infinity as the depth option.
        <br/><br/>
        For an explanation of how the flat() method functions, consider the following examples:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={flatExampleSnippet} />

      <Text
        content={`
        <br/>
        We have an array called numericArr in the first illustration that contains nested arrays. The flat() function flattens the array by one if a depth parameter is not provided.
        <br/><br/>
        In the second example, we have a deeply nested array deeplyNestedArray. By passing Infinity as the depth parameter, the flat() method flattens the array completely, resulting in a single-level array with all the elements flattened.
        <br/>
        <br/>
        It's important to note that the flat() method does not modify the original array; instead, it returns a new array with the flattened structure.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <Text
        content={`
        <br/>
        <br/>
        Some of the other methods to consider are 
        <b>with(), of(), group(), every(), at()</b>. I will not explain these here but to study it, you can
        go to the <a target="__blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with">Official website</a> and search other functions also there.
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
        prevLink="/javascript/arrays"
        nextLink="/javascript/array-iteration-loops-methods"
      />
    </Layout>
  );
};

export default JSArraysPage;
