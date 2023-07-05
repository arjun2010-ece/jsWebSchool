import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  basicForInSnytaxSnippet,
  forInCodeOutputSnippet,
  forInExampleCodeSnippet,
  forInExampleSnippet,
  forInOutputSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript for...in loop',
  metaDescription:
    'Explore the JavaScript for...in loop and learn how to iterate over the properties of an object. This tutorial covers the usage of the for...in loop, enabling you to traverse and manipulate object properties effectively in JavaScript.',
  metaKeywords:
    'JavaScript tutorial, for...in loop, object properties, JavaScript iteration, front-end development, web development, object manipulation',
  metaOgTitle:
    'JavaScript for...in Loop Tutorial: Exploring Object Iteration in JavaScript',
  metaOgUrl: 'https://jswebschool.com/javascript/for-in-loop',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSForInLoopPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="for...in loop :"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        The for...in loop is a <i>special loop in JavaScript that allows you to iterate over the 
        properties of an object that we will study later</i>. It iterates over the enumerable 
        properties of an object, including both its own properties and those inherited from 
        its prototype chain. <br/> 
        The for...in loop does not guarantee a specific order of iteration.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={basicForInSnytaxSnippet} />

      <Text
        content={`<br/>
        Let's break down each component of the for...in loop:
        <br/>
        <br/>
        <i>Variable: </i>
        This is a variable that represents the name of each property in the object. It takes on the 
        value of each property name in each iteration. For example, let key initializes the key 
        variable with the name of each property in the object.
        <br/>
        <br/>
        <i>Object: </i>
        This is the object over which the loop will iterate. It can be any object, including arrays, 
        objects created with constructors, or objects created using object literals. 
        For example, <b>for (let key in myObject)</b> iterates over the properties of the <b>myObject</b> 
        object.
        <br/><br/>
        The body of the loop is the code block enclosed by curly braces. It contains the code that will
         be run once for each iteration, and each property name in the object is represented by 
         a variable.
         <br/><br/>
        Here's an example that illustrates the for...in loop in action:

        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={forInExampleSnippet} />

      <Text
        content={`<br/>
        In this example, the for...in loop iterates over the properties of the person object. 
        In each iteration, the key variable takes on the name of each property in the person object. 
        We can then use the bracket notation (person[key]) to access the corresponding value of each 
        property.
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

      <CodeSnippet content={forInOutputSnippet} />

      <Text
        content={`<br/>
        This is because the for...in loop iterates over the properties of the person object, and for each 
        property, it prints the property name (key) followed by a colon and the corresponding value 
        (person[key]).
        <br/>
        <br/>

        It's important to note that the for...in loop iterates over all enumerable properties, 
        including those inherited from the prototype chain. If you only want to iterate over an 
        object's own properties, you can use the hasOwnProperty() method within the loop to check 
        if the property is directly owned by the object.
        <br/>
        <br/>

        The for...in loop is particularly useful when working with objects and need to perform 
        operations on each property dynamically. However, it's important to exercise caution and 
        ensure that the object being iterated over does not contain unexpected enumerable properties 
        from its prototype chain. 
        <br/>
        <br/>
        <i>Keep in mind that the for...in loop should not be used to iterate over arrays. For arrays, 
        the for...in loop may not guarantee the correct order of iteration and may include additional
         properties that are not array elements. Instead, you should use the for...of loop or array 
         iteration methods like forEach() or map() when working with arrays.</i>
         <br/>
         <br/>
         Let's create a simple program that calculates the total score of a student by iterating over 
         the subject scores using a for...in loop. Here's the code:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={forInExampleCodeSnippet} />

      <Text
        content={`<br/>
        In this example, we have an object scores that contains the subject names as properties and their 
        corresponding scores as values. We want to calculate the total score by iterating over these 
        subject scores using a for...in loop.
        <br/>
        <br/>
        The for...in loop iterates over each property of the scores object, and in each iteration, 
        the subject variable takes on the name of each property. We can then use the bracket notation 
        (scores[subject]) to access the corresponding score value.
        <br/>
        <br/>
        The loop adds the score of each subject to the totalScore variable using the += operator. 
        After the loop finishes, we display the result using console.log().
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

      <CodeSnippet content={forInCodeOutputSnippet} />

      <Text
        content={`<br/>
        This is because the loop iterates over the subject scores in the scores object and calculates 
        the total score by adding up all the scores (90 + 85 + 95 + 80 = 350).
        <br/><br/>
        The for...in loop allows you to dynamically iterate over the properties of an object, making 
        it useful for situations where you need to perform operations on each property. However, 
        remember that the order of iteration is not guaranteed, and it includes all enumerable
         properties, including those inherited from the prototype chain.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/for-loop"
        nextLink="/javascript/functions"
      />
    </Layout>
  );
};

export default JSForInLoopPage;
