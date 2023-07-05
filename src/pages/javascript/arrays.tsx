import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  accessArrSnippets,
  arrayFromSnippets,
  constrctrSnippet,
  emptyArrSnippets,
  fillSnippets,
  modifyingArrSnippets,
  sqBrcktSnippet,
  sqrBrcktSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Array',
  metaDescription:
    'Gain a comprehensive understanding of JavaScript arrays and harness their power for data storage and manipulation. This tutorial covers array creation, accessing elements, adding and removing elements, and performing common operations to effectively work with arrays in JavaScript.',
  metaKeywords:
    'JavaScript tutorial, JavaScript arrays, array manipulation, array operations, array methods, front-end development, web development, data storage',
  metaOgTitle:
    'JavaScript Array Tutorial: Exploring Data Storage and Manipulation with JavaScript Arrays',
  metaOgUrl: 'https://jswebschool.com/javascript/arrays',
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
      <Heading content="Arrays :" headingType="h5" customStyle={tw`mb-4`} />

      <Text
        content={`
        In JavaScript, an array is a data structure <i>used to store multiple values in a single variable.
        </i> 
        <br/>
        <br/>
        It is an ordered collection of elements, where each element can be of any data type, such as numbers, strings, booleans, objects, or even other arrays. 
        <br/>
        <br/>
        Arrays are one of the fundamental data types in JavaScript and offer various methods and properties for manipulating and accessing their elements.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Creating and initializing arrays in javascript :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        There are several ways to generate and initialize arrays with JavaScript. Here are a few typical methods:
        <br/>
        <br/>
        <i>Using square brackets []:</i>
        Using square brackets [] and placing the elements inside is the simplest approach to create an array.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={sqBrcktSnippet} />

      <Text
        content={`<br/>
        In this example, we create an array called numbers containing five numeric elements and an array called fruits containing three string elements.
        <br/><br/>
        <i>Using the Array constructor:</i>
        You can make an array by using the Array constructor and passing the elements as parameters.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={constrctrSnippet} />

      <Text
        content={`<br/>
        The Array constructor creates a new array object and initializes it with the provided elements.
        <br/>
        <br/>
        <i>Using the Array.from method:</i>
        The Array.from method allows you to create an array from an iterable object or an array-like structure.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={arrayFromSnippets} />

      <Text
        content={`<br/>
        In this example, we create an array numbers from an array literal, and an array fruits from a string. The resulting arrays contain each element from the source.
        <br/>
        <br/>
        <i>Using the fill method:</i>
        The fill method populates an array with a specified value for all its elements.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={fillSnippets} />

      <Text
        content={`<br/>
        In this example, we create an array numbers with a length of 5 using the Array constructor. The fill method fills all elements of the array with the value 0.
        <br/>
        <br/>
        <i>Creating an empty array:</i>
        You can create an empty array by simply using empty square brackets [] or the Array constructor without passing any arguments.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={emptyArrSnippets} />

      <Text
        content={`<br/>
        These techniques result in empty arrays that you may later fill with elements.
        <br/>
        <br/>
        These are some of the typical JavaScript ways for constructing and initializing arrays. Based on the data at hand and your programming needs, pick the approach that best meets your needs.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Accessing array elements :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        In JavaScript, you can access array elements using zero-based indexing. Array indexing allows you to retrieve and manipulate individual elements within an array. Here's how you can access array elements:
        <br/>
        <br/>
        <i>Using square bracket notation:</i>
        The most common way to access array elements is by using square brackets [] and specifying the index of the element you want to retrieve.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={sqrBrcktSnippet} />

      <Text
        content={`<br/>
        In this example, numbers[0] retrieves the first element of the numbers array, which is 10. Similarly, numbers[2] retrieves the third element, which is 30. Remember that array indexing starts from 0, so the index 0 corresponds to the first element, 1 corresponds to the second element, and so on.
        <br/>
        <br/>
        <i>Modifying array elements:</i>
        You can also use array indexing to modify elements within an array.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={modifyingArrSnippets} />

      <Text
        content={`<br/>
        In this example, fruits[1] modifies the second element of the fruits array. It changes the value from "banana" to "grape". You can assign a new value to a specific index to update the element.
        <br/>
        <br/>
        <i>Accessing elements dynamically:</i>
        You can use variables or expressions inside the square brackets to access array elements dynamically.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={accessArrSnippets} />

      <Text
        content={`<br/>
        In this example, the value of index is initially 2, so fruits[index] retrieves the third element ("orange") from the fruits array. The variable index can be modified to access different elements dynamically. However, be cautious not to go beyond the valid index range, as it will return undefined if the index is out of bounds.
        <br/><br/>
        You should be aware that undefined results will be returned if you attempt to access an element with an index that is not existent in the array. Furthermore, keep in mind that arrays are mutable, allowing you to change their elements by utilizing array indexing.
        <br/><br/>
        Understanding array indexing will let you use JavaScript arrays to obtain and work with their stored elements. 
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/function-scope-closure"
        nextLink="/javascript/array-methods"
      />
    </Layout>
  );
};

export default JSArraysPage;
