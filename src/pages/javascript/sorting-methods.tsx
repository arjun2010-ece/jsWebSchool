import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  sortArrObjAscSnippet,
  sortComparatorArrSnippet,
  sortSimpleArrSnippet,
  sortSimpleComparatorArrSnippet,
  sortSimpleComparatorDescArrSnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Sorting methods',
  metaDescription:
    'Master JavaScript sorting methods and learn how to organize arrays in ascending or descending order. This tutorial covers the essential sorting methods in JavaScript, including sort(), reverse(), and custom sorting functions, empowering you to efficiently sort and arrange your data using JavaScript.',
  metaKeywords:
    'JavaScript tutorial, sorting methods, JavaScript arrays, sort(), reverse(), custom sorting, data organization, front-end development, web development',
  metaOgTitle:
    'JavaScript Sorting Methods Tutorial: Organizing Arrays with Ease',
  metaOgUrl: 'https://www.webschooljs.com/javascript/sorting-methods',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSSortingPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Sorting methods in JS"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
       Sorting methods are used to sort an <b>array</b>(of numbers/strings/characters) or <b>strings</b> in either <b>ascending</b> or <b>descending</b> order. Also an array of objects can be sorted based on some property.<br/>
       The popular method in javascript for this purpose is <b>sort()</b> but which has its disadvantages also as it can
       provide wrong results sometimes too so to be absolutely sure that sorting work as expected, we will use
       sort function with a comparator callback something like this
       <b>sort(comparatorFunction)</b>, which can be used for both ascending and descending order perfectly.<br/>
       <i>It changes the same array so it does not return a new array.</i>
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
        content="Sort() without comparator callback causing error:"
        headingType="h6"
        customStyle={tw`mb-4 mt-12 underline`}
      />

      <Text
        content={`
       I will show 2 examples, one which is working and other which is causing error as it is not sorting
       in proper ascending order. Because of this error we will not use
       this approach in our day to day code but use sort with a comparator function, which we study next.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={sortSimpleArrSnippet} />

      <Heading
        content="Sort() with comparator callback function:"
        headingType="h6"
        customStyle={tw`mb-4 mt-12 underline`}
      />

      <Text
        content={`
        Sort() with comparator callback function will look something like below for both ascending order and descending order.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={sortComparatorArrSnippet} />

      <Heading
        content="Sorting an array of numbers/strings/characters in ascending order:"
        headingType="h6"
        customStyle={tw`mb-4 mt-12 underline`}
      />

      <Text
        content={`
        Sorting an array with a comparator callback function with various examples are shown below.
        <br/>
        For sorting an array of numbers, it is very simple but for sorting an array of characters or strings its little different
        in the way that in the return statement of comparator callback we return <b> a.localeCompare(b)</b> instead of
        <b>a - b</b>.
        <br/><br/>
        We could not do it with <b>a - b</b> in case of strings as it will take ASCII value of strings and then subtract and hence will not give correct value. <br/> 
        Thus a new function <b> localeCompare</b> will be used to correctly sort characters or strings.

        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={sortSimpleComparatorArrSnippet} />

      <Heading
        content="Sorting an array of numbers/strings/characters in descending order:"
        headingType="h6"
        customStyle={tw`mb-4 mt-12 underline`}
      />

      <Text
        content={`
        For sorting an array of numbers, it is very simple, as only the return statement will be <b>b - a</b> here and for characters/strings we use
        <b>localCompare</b>.
        <br/>
        Basically for ascending and descending almost everything is same except the <i>return statement of comparator callback
        function.</i>
        <br/><br/>
        <u>For array of numbers</u>
        <br/>
        <i>Return statement of comparator callback function in Ascending order </i> :
         <b>a - b</b>
         <br/>
         <i>Return statement of comparator callback function in Descending order </i> :
         <b>b - a</b>
         <br/>
         <br/>
         <u>For array of characters/strings</u>
        <br/>
        <i>Return statement of comparator callback function in Ascending order </i> :
         <b>a.localCompare(b)</b>
         <br/>
         <i>Return statement of comparator callback function in Descending order </i> :
         <b>b.localCompare(a)</b>
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={sortSimpleComparatorDescArrSnippet} />

      <Heading
        content="Sorting a collection of items(array of objects) in ascending order:"
        headingType="h6"
        customStyle={tw`mb-4 mt-12 underline`}
      />

      <Text
        content={`
        Sorting an array of numbers/characters/string is same as array of object except arguments <b>a</b> and <b>b</b> in comparator callback function in array of object case means an <b>object</b> and hence need to <i>specify by which property sorting should happen</i>.<br/>
        <i>Basically sorting in this case is by objects property itself and same goes for descending order too.</i>
        <br/><br/>
        In this below example, objects in students array is sorted in ascending order by <b>age</b> property meaning the object with minimum age should come first then next bigger and so on.
        <br/>
        Also please note that while sorting an array of object by string property we are using <b>localCompare</b>.
       
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={sortArrObjAscSnippet} />

      <Heading
        content="Sorting a collection of items(array of objects) in descending order:"
        headingType="h6"
        customStyle={tw`mb-4 mt-12 underline`}
      />

      <Text
        content={`
        Now i will not give example for this case as for descending order, just change:
        <br/>
        <br/>
        <i>in case of sorting(desc) by number property of object, use:</i> <b>b - a</b> 
        <br/>
        <i>in case of  sorting(desc) by string property of object, use:</i> <b>b.localCompare(a)</b> 
       
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
        prevLink="/javascript/searching-and-filtering"
        nextLink="/javascript/objects"
      />
    </Layout>
  );
};

export default JSSortingPage;
