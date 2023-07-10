import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  constSnippet,
  letSnippet,
  letconstSnippet,
  varHoistedSnippet,
  varSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Variables',
  metaDescription:
    'Understand the fundamentals of JavaScript variables and learn how to declare, assign, and manipulate values in your code. This tutorial covers the concept of variables in JavaScript, including variable declaration, variable types, scope, and best practices for variable naming and usage.',
  metaKeywords:
    'JavaScript tutorial, JavaScript variables, variable declaration, variable assignment, variable manipulation, variable scope, front-end development, web development',
  metaOgTitle:
    'JavaScript Variables Tutorial: Understanding Variable Declaration and Manipulation',
  metaOgUrl: 'https://www.webschooljs.com/javascript/variables',
  metaOgImage: 'https://www.webschooljs.com/images/javascript-logo.jpeg',
};

const JSVariablesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading content="Variables :" headingType="h1" customStyle={tw`mb-4`} />

      <Text
        content={`
        A variable in JavaScript is a named container that contains a value. Data that may be retrieved and changed throughout the application is stored there. JavaScript variables are dynamic, which means they may store a variety of values, including integers, texts, booleans, objects, and even functions.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Variables declaration using var, let and const :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8`}
      />

      <Text
        content={`
        JavaScript lets you declare variables using three different keywords: var, let and const.
        <br/>
        <br/>
        <b>var :</b>
        Before ES6, JavaScript used the var keyword to declare variables.
        Depending on where they are declared, variables declared with var are function-scoped or 
        globally scoped.
        They are hoisted to the top of their scope and can be accessed before they are declared. 
        Variables declared with var can be reassigned and re-declared within the same scope. 
        For example:

        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={varSnippet} codeContainerStyle={tw`mx-2`} />

      <Text
        content={`
       <br/>
       In the above example, the variable x is declared with var inside the if block. Since var 
       variables are not block-scoped, the outer x is also affected by the reassignment inside the block.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        <b>let :</b>
        The let keyword was introduced in ECMAScript 6 (ES6) and is used to declare block-scoped variables.
        Variables declared with let can be reassigned a new value, but their scope is limited to the block 
        in which they are defined. <i>A block is typically denoted by a pair of curly braces {}.</i> 
        For example:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={letSnippet} codeContainerStyle={tw`mx-2`} />

      <Text
        content={`
       <br/>
       In the above example, the variable x is declared with let inside the if block. This creates a new x 
       variable that shadows the outer x variable within the block. 
       Once the block ends, the inner x variable is no longer accessible.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        <b>const :</b>
        The const keyword is also introduced in ES6 and is used to declare block-scoped variables that 
        are meant to be constant (i.e., their value cannot be reassigned). Variables declared with const 
        must be assigned a value when they are declared, and attempting to reassign them will result in an
        error. For example:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={constSnippet} codeContainerStyle={tw`mx-2`} />

      <Text
        content={`
       <br/>
       In the above example, PI is declared as a constant variable with the value 3.14. Any attempt to 
       reassign PI will throw an error.
       <br/><br/>

       It is generally recommended to use let or const instead of var in modern JavaScript code. 
       let and const provide better scoping rules and help prevent certain types of programming errors. 
       Additionally, using const for variables that shouldn't be reassigned helps make the code more 
       readable and maintainable.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Variable naming conventions and best practices"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        When naming variables in JavaScript, it is important to follow certain naming conventions and 
        best practices to write clean and readable code. Here are some common practices and guidelines 
        for variable naming:<br/><br/>
        <ol>
            <li>
            Use descriptive names: Choose variable names that are meaningful and describe the purpose or 
            content of the variable. This makes your code more readable and helps other developers 
            understand the intent of your code. For example, instead of using x or temp, use names like 
            count, userName, or isLogged.
            </li>

            <li>
            Follow camelCase: In JavaScript, it is common to use camelCase for variable names. Start 
            with a lowercase letter and capitalize the first letter of each subsequent word. For example:
             firstName, totalAmount, isLoggedIn.
            </li>

            <li>
            Avoid reserved keywords: Do not use reserved keywords as variable names. JavaScript has 
            reserved keywords that have special meaning and functionality in the language. Using them 
            as variable names will cause syntax errors. For example, var, function, if, while, and true 
            are reserved keywords.
            </li>

            <li>
            Avoid single-letter names: Unless they are used in a very limited scope (e.g., loop counters),
             try to avoid single-letter variable names as they can be ambiguous and make the code harder
              to understand.
            </li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Variable scope and hoisting"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        <b>Scope of Variable :</b><br/>
        Variable scope refers to the region of a program where a variable is accessible or visible. 
        In JavaScript,
        variables have different scopes, which determine where they can be accessed and used.
        <br/><br/>
        <ol>
            <li>
           Global Scope:
           Variables with a global scope are those that are defined outside of any function or block. 
           They are reachable in every part of the program, including functions and blocks. If utilized 
           carelessly, global variables can cause problems because they can be modified by any portion of
            your program and can be accessed from anywhere in your code.
            </li>

            <li>
            Function Scope: Variables declared within a function have function scope. They are only 
            accessible within that specific function and cannot be accessed from outside the function or 
            other functions. Function scope provides encapsulation and allows for the creation of local 
            variables that are only relevant to a particular function.
            </li>

            <li>
            Block Scope: Variables declared with let or const within a block (delimited by curly braces 
            {}) have block scope. Block scope was introduced in ECMAScript 6 (ES6) and provides better
                control and isolation of variables within a block. Block-scoped variables are only 
                accessible within the block they are defined in or within nested blocks.
        </li>
        </ol>
        <br/><br/>
        <b>Variable Hoisting: :</b><br/>
        Variable declarations (but not initializations) are hoisted to the top of their respective scopes 
        during the compilation process in JavaScript. This implies that variables may be used before they 
        are explicitly declared in your code.
        <br/>
        It's crucial to remember that only declarations—not initializations or assignments—are hoisted. 
        To further understand how hoisting functions, let's look at some examples:
        <br/>
        <br/>
        <ol>
            <li>Using var:</li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={varHoistedSnippet} codeContainerStyle={tw`mx-8`} />

      <Text
        content={`<br/>
        In this example, the variable x is hoisted to the top of its scope, which is the global scope. 
        However, the initialization (x = 5) happens at the original position. So, even though x is accessible 
        before its declaration, its value is undefined until the line of assignment is executed.
        <br/>
        <br/>
        <ol start="2">
            <li>Using let and const:</li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={letconstSnippet} codeContainerStyle={tw`mx-8`} />

      <Text
        content={`<br/>
        With let and const, hoisting still occurs, but unlike var, variables declared with let and const 
        are not initialized to undefined at the top of the scope. As a result, trying to access a variable 
        before its declaration results in a ReferenceError.
        <br/>
        <br/>
        To avoid confusion and unexpected behavior, it is considered a best practice to always declare 
        variables at the beginning of their respective scope, regardless of hoisting.
        <br/>
        <br/>
        <b>Why hoisting is so important to understand ???</b>
        <i>
        Understanding variable scope and hoisting is essential for writing predictable and maintainable 
        JavaScript code. It helps you manage variable accessibility and ensures that your variables are 
        properly declared and initialized before use.
        </i>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/setting-up"
        nextLink="/javascript/global-local-variables"
      />
    </Layout>
  );
};

export default JSVariablesPage;
