import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  promiseHandleErrorsSnippet,
  throwExceptionsSnippet,
  tryCatchExSnippet,
  tryCatchHandleErrorsSnippet,
  tryCatchSnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Error Handling',
  metaDescription:
    'Learn the best practices of error handling in JavaScript and ensure robustness in your code. This tutorial covers various error handling techniques, including try-catch blocks and error objects, empowering you to handle and manage errors effectively in your JavaScript applications.',
  metaKeywords:
    'JavaScript tutorial, error handling, JavaScript errors, try-catch blocks, error objects, front-end development, web development, code robustness',
  metaOgTitle:
    'JavaScript Error Handling Tutorial: Best Practices for Robust Code',
  metaOgUrl: 'https://jswebschool.com/javascript/error-handling',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSErrorHandlingPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Error Handling"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Error handling in JavaScript involves identifying and managing errors that occur during the execution of a program to prevent crashes and handle exceptional situations gracefully. JavaScript provides various mechanisms for error handling, including try...catch statements, throwing and catching exceptions, and handling asynchronous errors.
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
        content="try...catch:"
        headingType="h6"
        customStyle={tw`mb-2 mt-8 underline`}
      />

      <Text
        content={`
        <b>By containing the code that can result in an error within a try block</b>, the try...catch statement enables you to handle synchronous/asynchronous problems. The matching catch block is invoked whenever an error arises inside the try block, enabling you to gently address the error.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={tryCatchSnippet} />

      <Text
        content={`<br/>
        Here's an example:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={tryCatchExSnippet} />

      <Text
        content={`<br/>
        In this example, the catch block will execute since dividing by zero throws an error. The error object provides information about the error, such as its type and message.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      {/* Throwing Exceptions */}
      <Heading
        content="Throwing Exceptions:"
        headingType="h6"
        customStyle={tw`mb-2 mt-8 underline`}
      />

      <Text
        content={`
        The keyword throw can be used to manually throw exceptions. 
        You can create your own unique error conditions and manage them by throwing an exception by using try...catch blocks or allowing them to propagate up the call stack.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={throwExceptionsSnippet} />

      {/* Handling Asynchronous Errors */}
      <Heading
        content="Handling Asynchronous Errors:"
        headingType="h6"
        customStyle={tw`mb-2 mt-8 underline`}
      />

      <Text
        content={`
        Some errors occur during API requests or setInterval/setTimeout callback methods and that can be handled in a different way.<br/>
        Asynchronous approaches such as Promises and async/await have their own way to handle errors.
        <br/><br/>
        The <b>.catch()</b> method of Promises can be used to handle errors:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={promiseHandleErrorsSnippet} />

      <Text
        content={`
        <br/>
        Try...catch can be used with async/await to manage asynchronous errors:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={tryCatchHandleErrorsSnippet} />

      <Text
        content={`
        <br/>
        In the above example, any error occurring within the try block, such as network errors(API request error) or JSON parsing errors, will be caught in the catch block.
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
        prevLink="/javascript/callback-promise-async-await"
        nextLink="/javascript/dom-manipulation"
      />
    </Layout>
  );
};

export default JSErrorHandlingPage;
