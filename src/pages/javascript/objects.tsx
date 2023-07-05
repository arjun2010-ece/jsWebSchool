import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  deleteObjSnippet,
  objDestrctSnippets,
  objLiteralSnippet,
  objModfySnippet,
  objOutptSnippet,
  personObjAssignSnippets,
  personObjEntriesSnippets,
  personObjKeysSnippets,
  personObjValsSnippets,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Objects',
  metaDescription:
    'Explore JavaScript objects and unlock their potential for data organization and manipulation. This tutorial covers the concept of objects in JavaScript, including object creation, properties, methods, and how to work with objects to store and retrieve structured data in your JavaScript applications.',
  metaKeywords:
    'JavaScript tutorial, JavaScript objects, object creation, object properties, object methods, data organization, data manipulation, front-end development, web development',
  metaOgTitle:
    'JavaScript Objects Tutorial: Exploring Data Organization and Manipulation',
  metaOgUrl: 'https://jswebschool.com/javascript/objects',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSObjectsPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Objects : creation and manipulation in javascript"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        <i>In JavaScript, objects are the most important and widely used data type and is used to store and manipulate collections of key-value pairs.</i> 
        <br/>
        <br/>
        Objects can be created using the : <br/>
        1) Object literal syntax {},  <br/>
        2) The <b>new</b> keyword with a constructor function, or  <br/>
        3) by extending existing object prototypes.
        <br/><br/>
        Here's an example of creating an object using the object literal syntax:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={objLiteralSnippet} />

      <Text
        content={`<br/>
        In this example, we create an object named <b>person</b> with properties such as <b>name, age,</b> and <b>city</b>. Each property consists of a key-value pair, where the key is a string (or symbol in ES6+) and the value can be of any data type, including other objects, functions, or arrays.
        <br/>
        <br/>
        To access the properties of an object, you can use dot notation (<b>object.property</b>) or square bracket notation 
        ( <b>object['property']</b> ):
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={objOutptSnippet} />

      <Text
        content={`<br/>
        You can dynamically add or modify an object's properties as well:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={objModfySnippet} />

      <Text
        content={`<br/>
        If you want to remove a property from an object, use the <b>delete</b> keyword:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={deleteObjSnippet} />

      <Text
        content={`<br/>
        Additionally, JavaScript comes with a wide range of built-in functions and methods for altering objects. 
        The object is a list of key-value pairs that are separated by colons(:), so please be mindful of that.
        <br/>
        Typical examples include:

        <br/>
        <br/>
        <b>Object.keys(obj) :</b> <br/>
        Each key for the object is returned in an array by the function <b>Object.keys(obj)</b>.
        
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />
      <CodeSnippet content={personObjKeysSnippets} />

      <Text
        content={`<br/>
        <b>Object.values(obj) :</b> <br/>
        An array holding a list of all the values for the object is returned by the function <b>Object.values(obj)</b>.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />
      {/* values */}
      <CodeSnippet content={personObjValsSnippets} />

      <Text
        content={`<br/>
        <b>Object.entries(obj) :</b> <br/>
        The function <b>Object.entries(obj)</b> returns a key-value pair in an array of arrays.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={personObjEntriesSnippets} />

      <Text
        content={`<br/>
        <b>Object.assign(target, ...sources) :</b> <br/>
        You can copy properties from one or more source objects to a destination object using the "assign" method.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={personObjAssignSnippets} />

      <Text
        content={`<br/>
        <b>Object.freeze(obj) :</b> <br/>
        <b>Object.freeze(obj)</b> prevents the addition, modification, or removal of an object's properties.
        <br/>
        <br/>
        <b>Object.seal(obj) :</b> <br/>
        Using the <b>Object.seal(obj)</b> method, you can seal an object to stop alterations and the addition of new attributes.
        <br/>
        <br/>
        <b>Object.create(proto, [propertiesObject]) :</b> <br/>
        Calling <b>Object.create(proto, [propertiesObject])</b> creates a new object with the provided prototype object and any additional optional properties.
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
        content={`<br/>
        These are just a few examples of how objects can be created and manipulated in JavaScript. Objects are versatile and powerful in JavaScript, allowing you to represent complex data structures and build robust applications.
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
        content="Objects destructuring"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        Object destructuring means breaking the object into its individual properties and objects specific value can be accessed by its corresponding key variable. It looks something like this.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={objDestrctSnippets} />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/sorting-methods"
        nextLink="/javascript/spread-rest"
      />
    </Layout>
  );
};

export default JSObjectsPage;
