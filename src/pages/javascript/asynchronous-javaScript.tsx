import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  fetchAPIGetSnippet,
  setIntervalExSnippet,
  setIntervalSnippet,
  setTimeoutExSnippet,
  setTimeoutSnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Asynchronous JavaScript',
  metaDescription:
    'Master the art of asynchronous JavaScript programming and leverage its power to handle time-consuming tasks and create responsive web applications. This tutorial covers asynchronous concepts, including callbacks, promises, and async/await, enabling you to write efficient and non-blocking code in JavaScript.',
  metaKeywords:
    'JavaScript tutorial, asynchronous JavaScript, callbacks, promises, async/await, front-end development, web development, responsive applications, non-blocking code',
  metaOgTitle:
    'Asynchronous JavaScript Tutorial: Mastering Non-Blocking Code for Responsive Web Applications',
  metaOgUrl: 'https://www.webschooljs.com/javascript/asynchronous-javaScript',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSAsynchronousJavascriptPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Asynchronous Javascript"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        JavaScript itself is a <b>synchronous language,</b> meaning it executes code in a single thread, one statement at a time. 
        <br/>
        <br/>
        However, <i>JavaScript can interact with <b>asynchronous APIs</b> provided by the <b>browser</b>, including those in the <b>BOM(Browser Object Model)</b> and <b>DOM (Document Object Model)</b>, to handle asynchronous operations.</i>
        <br/>
        <br/>
        The BOM does include certain asynchronous methods or functionalities that allow developers to work with asynchronous tasks. For example:

        <br/><br/>
        <b>setTimeout() and setInterval()</b>: These methods allow you to schedule the execution of a function or code snippet after a specified delay or at regular intervals, respectively. They are asynchronous because they don't block the execution of other code while waiting for the specified time to elapse.
        <br/>
        <br/>
        <b>setTimeout()</b> executes a function(block of code) after some duration. It takes 2 arguments, one is callback function and other is delay or duration in milliseconds.<br/>
        Its syntax :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={setTimeoutSnippet} />

      <Text
        content={`<br/>
        And one example also shown in which callback function gets executer after one second or 1000 milliseconds.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={setTimeoutExSnippet} />

      <Text
        content={`<br/>
        <br/>
        <b>setInterval()</b> executes a function(block of code) after regular interval defined by duration. It takes 2 arguments, one is callback function and other is delay or duration in milliseconds.<br/>
        <i>Its syntax is similar to setTimeout function</i> and is written as below :
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={setIntervalSnippet} />

      <Text
        content={`<br/>
        And one example also shown in which callback function gets executer after every one second or 1000 milliseconds.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={setIntervalExSnippet} />

      <Text
        content={`<br/>
        <b>XMLHttpRequest and fetch():</b> These APIs are used for making HTTP requests to retrieve data from a server. They work asynchronously, allowing other JavaScript code to continue executing while waiting for the response from the server.
        <br/>
        The syntax for fetch() API is below, where "url" is like an exact url like google.com and options is an object which takes parameters such as method(GET/POST/PUT/DELETE), headers and body(in case of POST and PUT request). It is widely used API for making an API request.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={fetchAPIGetSnippet} />

      <Text
        content={`<br/>
       <b>geolocation.getCurrentPosition():</b> This method retrieves the device's current geographical location. It uses an asynchronous callback mechanism to provide the location data when available.
        <br/><br/>
        These are just a few examples of how the BOM includes asynchronous methods. It's important to note that the BOM's primary purpose is to provide an interface between JavaScript and the browser, offering access to browser-specific functionality and features. Asynchronous methods within the BOM, along with those in the DOM and other APIs, enable JavaScript to handle time-consuming tasks without blocking the main execution thread, enhancing responsiveness in web applications.
        <br/><br/>
        <i>JavaScript's asynchronous programming paradigm enables actions to be carried out concurrently and independently without delaying the execution of other processes. When dealing with tasks that could take some time to finish, such as reading from a file or getting data from an API, it is especially helpful.</i>
        <br/><br/>
        When using synchronous programming, each task is carried out sequentially, and the program waits for one to finish before going on to the next. Particularly when dealing with time-consuming processes, this may result in blocking and unresponsive behavior.
        <br/><br/>
        <b>Callbacks, promises, and async/await syntax</b> are all concepts introduced by asynchronous programming to address this issue. Let's examine each of these ideas in turn in next pages.
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
        prevLink="/javascript/spread-rest"
        nextLink="/javascript/callback-promise-async-await"
      />
    </Layout>
  );
};

export default JSAsynchronousJavascriptPage;
