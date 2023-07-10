import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  anotherSwitchCaseSnippet,
  basicSwitchSnippet,
  switchCaseExampleSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Javascript Switch Case',
  metaDescription:
    'Master the JavaScript switch case statement and learn how to create multi-branching logic in your code. This tutorial covers the usage of the switch case statement in JavaScript, enabling you to handle multiple conditions and execute different code blocks based on specific cases.',
  metaKeywords:
    'JavaScript tutorial, switch case statement, JavaScript conditions, multi-branching logic, front-end development, web development, decision-making',
  metaOgTitle:
    'JavaScript Switch Case Tutorial: Implementing Multi-Branching Logic in Your Code',
  metaOgUrl: 'https://www.webschooljs.com/javascript/switch-case',
  metaOgImage: 'https://www.webschooljs.com/images/javascript-logo.jpeg',
};

const JSSwitchCasePage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Switch case :"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        The switch statement provides a concise way to handle multiple cases and make decisions based on 
        different values of an expression. <i>It's particularly useful when you have a limited set of 
        possible values and want to avoid lengthy if...else chains.</i>
        <br/>
        <br/>
        The <b>switch</b> statement in JavaScript provides a way to perform different actions based on 
        different 
        conditions. It allows you to compare an expression against multiple values and execute a block of 
        code based on a matching value. Here's the basic syntax of the switch statement:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={basicSwitchSnippet} />

      <Text
        content={`<br/>
        Here's how the switch statement works:
        <br/>
        <br/>
        Once the expression has been evaluated, its value is compared with those of the case clauses.
        <br/>
        <br/>
        Each case clause represents a possible value that the expression can match. If the value in a 
        case clause matches the value of the expression, the corresponding code block is executed.
        <br/>
        <br/>
        If a match is discovered, the case-specific code block is run up until a break statement is 
        reached. The switch block is terminated and the execution of the following code blocks is stopped
         using the break statement. Until a break or the end of the switch block is reached, execution
          will move on to the following case in the absence of a break statement.
        <i> It's important to use the break statement appropriately to control the flow of execution 
        within the switch block.</i>
          <br/>
          <br/>
          Here's an example to illustrate the usage of switch statement:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={switchCaseExampleSnippet} />

      <Text
        content={`<br/>
        In this example, the value of the day variable is compared against different cases. Since day is 
        3, the case 3 matches, and the corresponding code block sets the value of dayName to "Wednesday". 
        The break statement ensures that execution exits the switch block.
        <br/>
        <br/>
        <i>It's important to note that the switch statement compares values using the strict equality operator (===),
        so the values must match both in value and type for a case to be considered a match</i>.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`<br/>
        Let's create a program that determines the animal based on a given animal code, using a JavaScript 
        switch case and document.write to display the result. Since we are using document.write, it means
        we can use this below code along with an html file only and give the path of this js file
        in html file script tag.
        Here's the code:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={anotherSwitchCaseSnippet} />

      <Text
        content={`<br/>
        In this example, the getAnimalName function takes an animalCode as input and returns the 
        corresponding animal name as a string. We use a switch case statement to match the animalCode 
        with the appropriate animal name. If the animalCode doesn't match any of the cases, the default
         case is triggered, and the function returns "Unknown animal".
         <br/><br/>
         To display the result, we use document.write to write the text "The animal is: " 
         concatenated with the animalName returned by the function. This will display the result on the 
         webpage where the JavaScript code is executed.
         <br/><br/>
         Feel free to run the code and change the animalCode variable to see different results displayed 
         using document.write. Note that using document.write directly in production code is generally 
         discouraged as it can overwrite the entire document content if used after the page has finished 
         loading. It's better to manipulate the DOM or use other methods for displaying content.

        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/if-else"
        nextLink="/javascript/for-loop"
      />
    </Layout>
  );
};

export default JSSwitchCasePage;
