import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, globalVarSnippets, localVarSnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Global vs local variables',
  metaDescription:
    'Understand the difference between global and local variables in JavaScript and learn how to effectively manage variable scope. This tutorial covers the concept of global and local variables, their scopes, and the best practices for variable declaration and usage in JavaScript.',
  metaKeywords:
    'JavaScript tutorial, global variables, local variables, variable scope, JavaScript scope, front-end development, web development, variable declaration',
  metaOgTitle:
    'JavaScript Global vs Local Variables Tutorial: Understanding Variable Scope in JavaScript',
  metaOgUrl: 'https://jswebschool.com/javascript/global-local-variables',
  metaOgImage: '/images/javascript-logo.jpeg',
};

const JSGlobalLocalVariablesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Global vs Local variables :"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        In JavaScript, there are two sorts of variables that have different reach and accessibility: 
        global variables and local variables. How can you work with them?
        <br/>
        <br/>
        <ol>
            <li>Global Variables:
              <br/>
              Since global variables are declared outside of any function or block, they can be accessed 
              from anywhere in your code.
              <br/>
              <br/>
              Without using a specific phrase like var, let, or const, you can declare a variable by 
              simply assigning a value to it. For illustration:

            </li>
        </ol>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={globalVarSnippets} codeContainerStyle={tw`mx-8`} />

      <Text
        content={`
        <br/>
        From anywhere in your code, including functions and blocks,  global variables can be controlled 
        and manipulated.<br/><br/>
        Global variables should normally only be used sparingly because they can result in name conflicts
         and accidental changes, among other potential problems.
        <br/>
        <br/>

        <ol start="2">
            <li>Local Variables:
            <br/>
            Local variables are declared within of a function or block and are only available inside of 
            that particular function or block.
            <br/>
            <br/>
            Use the var, let, or const keyword before the variable name to declare a local variable.
             For instance:
            </li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={localVarSnippet} codeContainerStyle={tw`mx-8`} />

      <Text
        content={`
        <br/>
        Local variables offer encapsulation and prevent unintentional changes from other areas of the 
        code because they are only available within the scope in which they are defined. 
        <br/>
        <br/>
        Each function call creates a new instance of local variables, and they are destroyed when the 
        function execution completes.
        <br/>
        <br/>
        <i>Local variables take precedence over global variables with the same name within their respective 
        scope.</i>
        <br/>
        <br/>
        When working with global and local variables, it's important to consider the following best practices:
        <br/><br/>
        <ul>
            <li>Minimize the use of global variables to avoid naming conflicts and maintain code clarity.
            </li>
            <li>Declare and initialize variables with appropriate scope (global or local) based on their 
            intended usage.
            </li>
            <li>Use local variables whenever possible to limit the scope and prevent unintended 
            modifications.
            </li>
            <li>Avoid polluting the global scope with unnecessary variables.</li>
            <li>Properly name variables to enhance code readability and reduce ambiguity.</li>
        </ul>
        <br/>
        <br/>
        By understanding the concepts of global and local variables and following best practices, you can
         effectively manage variable scope and create more maintainable and robust JavaScript code.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/variables"
        nextLink="/javascript/data-types"
      />
    </Layout>
  );
};

export default JSGlobalLocalVariablesPage;
