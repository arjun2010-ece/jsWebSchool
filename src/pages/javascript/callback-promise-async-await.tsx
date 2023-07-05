import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  basicAsyncAwaitSnippet,
  basicCallbackEx,
  basicPromiseSnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Callback, promise and Async/Await',
  metaDescription:
    'Unlock the power of callback functions, promises, and async/await syntax in JavaScript. This comprehensive tutorial covers the concepts and usage of callbacks, promises, and async/await, empowering you to write asynchronous code and handle complex operations with ease.',
  metaKeywords:
    'JavaScript tutorial, callback functions, promises, async/await, asynchronous programming, front-end development, web development, asynchronous code',
  metaOgTitle:
    'Callback, Promise, and Async/Await Tutorial: Mastering Asynchronous JavaScript Programming',
  metaOgUrl: 'https://jswebschool.com/javascript/callback-promise-async-await',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSCallbackPromisesAsyncAwaitPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Callback, Promises and Async/Await"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        We will study Callback, Promises and Async/Await in the below sections and will explain which one came first, what was its shortcoming and which one is the latest way of writing asynchronous code.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      {/* Callback */}
      <Heading
        content="Callback:"
        headingType="h6"
        customStyle={tw`mb-2 mt-8 underline`}
      />

      <Text
        content={`
        <i>In the earlier versions of JavaScript, callbacks were widely used to handle asynchronous operations.</i>
        <br/>
        A callback is a function that is called<i> when an asynchronous task has been performed and is supplied as an argument to another function</i>. The callback function enables you to provide the logic that needs to be carried out when the asynchronous task is complete.<i> Callback hell, or complicated and nested code structures, are a result of poorly managed callbacks.</i>
        <br/><br/>
        Example using callbacks:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={basicCallbackEx} />

      <Text
        content={`<br/>
        In the previous illustration, the callback function <b>manipulateData</b> is used as an argument for the function <b>dataFetch</b>.
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
        <b>Some Scenarios where callback is extremely useful :</b>
        <br/>
        1. Once you fills up the login form and click on Submit button then a callback function helps in redirecting into home or dashboard page. <br/>
        2. Once you click on logout button then a callback function helps in redirecting into login page.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      {/* Promises */}
      <Heading
        content="Promise:"
        headingType="h6"
        customStyle={tw`mb-2 mt-8 underline`}
      />

      <Text
        content={`
        A promise in JavaScript<i> is an object that denotes the value of an <b>asynchronous operation's</b> outcome as well as the operation's ultimate success or failure</i>. <b>
        <br/>
        Compared to callbacks, it offers a simpler and more organized method of controlling asynchronous code.</b>
        <br/><br/>
        One of three states are possible for promises:
        <br/><br/>
        Pending: The initial state of a promise after it is created is Pending. It signifies that the asynchronous activity is ongoing and hasn't been completed or refused.
        <br/><br/>
        Fulfilled: 
        When an asynchronous operation has successfully finished, it is said to be in the fulfilled state. The Promise is changed from being a meaningless promise to one that has a purpose or outcome.
        <br/><br/>
        Rejected: An asynchronous activity is deemed unsuccessful when it encounters an error. An explanation or error message for the rejection is given.
        <br/><br/>
        Here's a basic example of creating and using a Promise:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={basicPromiseSnippet} />

      <Text
        content={`<br/>
        In this example:
        <br/><br/>
        A new Promise is created using the <b>Promise</b> constructor, which takes a callback function with two parameters: <b>resolve</b> and <b>reject</b>. These parameters are functions used to transition the Promise to the fulfilled or rejected states.
        <br/><br/>
        Inside the Promise, an asynchronous operation is performed using <b>setTimeout</b> as an example. After a 2-second delay, the operation is considered completed.
        <br/><br/>
        If the operation is successful, <b>resolve</b> is called with a result value, transitioning the Promise to the fulfilled state. If an error occurs, <b>reject</b> is called with an error message, transitioning the Promise to the rejected state.
        <br/><br/>
        The Promise is then consumed using the <b>.then()</b> and <b>.catch()</b> methods. The <b>.then()</b> method is used to handle the fulfillment state, and the <b>.catch()</b> method is used to handle the rejection state.
        <br/><br/>
        Depending on the state of the Promise, the corresponding callback function is executed. If the Promise is fulfilled, the <b>result</b> value is passed to the <b>.then()</b> callback. If the Promise is rejected, the error message is passed to the <b>.catch()</b> callback.
        <br/><br/>
        Promises provide a more structured and readable way to handle asynchronous operations in JavaScript. They allow you to chain multiple asynchronous operations together using <b>.then()</b> and handle errors using <b>.catch()</b>. 
        <br/>
        <br/>
        Additionally, Promises can be used with <b>async/await</b> syntax, further simplifying the handling of asynchronous code.        
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      {/* Async/Await */}
      <Heading
        content="Async/await"
        headingType="h6"
        customStyle={tw`mb-2 mt-8 underline`}
      />

      <Text
        content={`
        Async/await is a <b>syntactical enhancement(only syntax changes)</b> introduced in ES8 (ES2017) that <b>simplifies working with promises</b>. <i>So async/await is the same as promise just a different way of writing.</i>
        <br/><br/>
        It enables you to create asynchronous code that resembles synchronous code, which makes it simpler to comprehend and maintain. <i>The await keyword is used to delay execution while waiting for a promise to resolve, and the async keyword is used to declare an asynchronous function.</i>
        <br/><br/>
        Example using async/await:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={basicAsyncAwaitSnippet} />

      <Text
        content={`<br/>
        The syntax is much simpler and there is no longer a requirement for explicit <b>.then()</b> and <b>.catch()</b> methods thanks to async/await. You may manage any errors that might arise during the asynchronous procedure by using the <b>try-catch</b> block.<br/>
        And one more trick is always use <b>try-catch</b> block with async/await and that is the way to write code at jobs.

        <br/><br/>
        <b>Some Scenarios where Promise and async/await is extremely useful :</b>
        <br/>
        Since both are same just different way of writing so its useful in similar situations.<br/><br/>
        1. Whenever you are making an API request using fetch or axios.<br/>
        2. Whenever you are making a request to database with or without the use of ORM in backend.
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
        prevLink="/javascript/asynchronous-javaScript"
        nextLink="/javascript/error-handling"
      />
    </Layout>
  );
};

export default JSCallbackPromisesAsyncAwaitPage;
