import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  filtrArrSnippet,
  findArrSnippet,
  findIndexArrSnippet,
  findLastArrSnippet,
  includesArrSnippet,
  indexOfArrSnippet,
  lastIndexOfArrSnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript searching and filtering methods',
  metaDescription:
    'Discover powerful JavaScript searching and filtering methods to efficiently find and extract elements from arrays. This tutorial covers essential searching and filtering techniques in JavaScript, including methods like filter(), find(), indexOf(), and more, empowering you to handle data manipulation and retrieval effectively.',
  metaKeywords:
    'JavaScript tutorial, searching methods, filtering methods, JavaScript arrays, filter(), find(), indexOf(), front-end development, web development, data manipulation',
  metaOgTitle:
    'JavaScript Searching and Filtering Methods Tutorial: Efficient Data Retrieval and Manipulation',
  metaOgUrl: 'https://www.webschooljs.com/javascript/searching-and-filtering',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSSearchingAndFilteringPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Searching and Filtering in JS"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Searching and Filtering in javascript means searching in a string/array datatype.
        And we have few javascript built in methods for both searching and filtering.
        <br/>
        Imagine a scenario where we need to build a feature doing both searching and filtering, then below methods comes handy.
        <i>All the methods can be used for both <b>array</b> or <b>strings</b> in the same way.</i>
        The methods we will study are <b>filter(), find(), findLast(), findIndex(), indexOf(), lastIndexOf()</b> and 
        <b>includes()</b>.
        <br/>
        <br/>
        <b>filter()</b>: <b>filter()</b> creates a brand-new array with  every element that passes a particular condition. A callback function that should return <b>true</b> or <b>false</b> values for each element is accepted as an argument. The elements that return <b>true</b> are in the new array. 
        <br/>
        Example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={filtrArrSnippet} />

      <Text
        content={`
        <br/>
        <b>find()</b>: The first element in the array that satisfies a certain criterion is returned by the <b>find()</b> method. The first element that the callback function returns <b>true</b> for is what is returned. It accepts a callback function.
        <br/>
        Example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={findArrSnippet} />

      <Text
        content={`
        <br/>
        <b>findLast()</b>: The first element whose value meets the supplied testing function is returned by the findLast() method, which iterates the array in reverse order. Undefined is returned if no elements pass the testing method.
        <br/>
        Example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={findLastArrSnippet} />

      <Text
        content={`
        <br/>
        <b>findIndex()</b>: The first entry in the array that satisfies a specific condition is returned by the findIndex() method's index. Once a callback function has been passed, the index of the first element for which it returns <b>true</b> is returned.
        And if we find the index then we can easily find the element on that index by <b>arr[indx]</b>, where arr is the array and <b>indx</b> is the index that we find with this method.
        <br/>
        Example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={findIndexArrSnippet} />

      <Text
        content={`
        <br/>
        <b>indexOf()</b>: 
        The index of the first instance of a specified element in an array is returned by the <b>indexOf()</b> method. If the element cannot be found, the method returns -1.
        <br/>
        Example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={indexOfArrSnippet} />

      <Text
        content={`
        <br/>
        <b>lastIndexOf()</b>: The <b>lastIndexOf()</b> function returns the index of a specified element's <i>last occurrence in an array</i>. The function returns -1 if the element cannot be found.
        <br/>
        Example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={lastIndexOfArrSnippet} />

      <Text
        content={`
        <br/>
        <b>includes()</b>: TThis method determines whether an array contains a particular element. If the element is found, it returns true; otherwise, it returns false.
        <br/>
        Example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={includesArrSnippet} />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/reduce"
        nextLink="/javascript/sorting-methods"
      />
    </Layout>
  );
};

export default JSSearchingAndFilteringPage;
