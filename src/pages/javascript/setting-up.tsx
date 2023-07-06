import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, basicJsSnippet, basicJsUsageSnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Setting Up',
  metaDescription:
    'Learn how to set up your JavaScript development environment and get ready to write JavaScript code. This tutorial covers the essential steps for setting up JavaScript, including installing a code editor, configuring a web server, and ensuring you have the necessary tools to start coding in JavaScript.',
  metaKeywords:
    'JavaScript tutorial, setting up JavaScript, JavaScript development environment, code editor, web server, front-end development, web development, development tools',
  metaOgTitle:
    'JavaScript Setting Up Tutorial: Getting Your Environment Ready for JavaScript Development',
  metaOgUrl: 'https://www.webschooljs.com/javascript/setting-up',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSSettingUpPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="How to use javascript in browser ?"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        This is the most important thing for a front end developer to know.
        <br/>
        <br/>
        To use javascript with a web browser, we need to follow these steps::<br/>
        
        <ol>
          <li>create an html file (with .html extension)</li>
          <li>Add a script tag just before the closing tag of body tag.
            This tag is used to write javascript code.
          </li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={basicJsSnippet} codeContainerStyle={tw`mx-8`} />

      <Text
        content={`
       <br/>
        <ol start="3">
          <li>In the above script tag(inside html file), either we write custom javascript or we simply
          give the relative path of javascript file and we write our javascript in that file(with .js
            extension). <i>And this is the preferred way of writing javascript in a separate file.</i>
          </li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet
        content={basicJsUsageSnippet}
        codeContainerStyle={tw`mx-8`}
      />

      <Text
        content={`
       <br/>
       A <b>script</b> tag has an opening tag(<b>&lt;script&gt;</b>) and a closing tag
       (<b>&lt;/script&gt;</b>). The opening tag has one very special attribute called 
       <b>src</b> attribute which will contain the relative path of javascript file if we
       are writing javascript in separate file.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Using Node.js for server-side JavaScript in backend"
        headingType="h6"
        customStyle={tw`mb-2`}
      />

      <Text
        content={`
       We can use javascript in the backend also. But backend javascript never runs on browser.
       It runs on Node.js. In the future, we might have courses on nodejs programming too.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Code editors and tools"
        headingType="h6"
        customStyle={tw`mb-2 mt-8`}
      />

      <Text
        content={`
      For running javascript in browser, we do not need any tools. We only need code editors.
      <br/>
      There are many code editors in the market such as vs code, sublime text, webstorm etc, but i
      normally use vscode. It is on of the best code editor for frontend development.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Online tools for javascript */}
      <Heading
        content="Online code editors for writing javascript"
        headingType="h6"
        customStyle={tw`mb-2 mt-12`}
      />

      <Text
        content={`
        Now, we have 2 types of online code editors, first is where we can write algorithm logic or functional code without any DOM related methods(only with map, reduce, filter, for loop kind of logic), then we use <a href="https://replit.com/" target="__blank"><strong>REPL</strong></a>.
        <br/><br/>
        Second is where we write some html (may or may not some css too) and then DOM manipulation with DOM methods such as document.getElementById, document.querySelector, document.createElement etc then we use a very popular online editor  <a href="https://codepen.io/" target="__blank"><strong>CodePen</strong></a>.
        <br/><br/>
        Although we have many more choices but these 2 are the best recommended one.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/javascript" nextLink="/javascript/variables" />
    </Layout>
  );
};

export default JSSettingUpPage;
