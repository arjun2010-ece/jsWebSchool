import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, basicSwitchSnippet, switchCaseExampleSnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const JSSwitchCasePage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
    >
      <Heading
        content="Switch case :"
        headingType="h5"
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
    </Layout>
  );
};

export default JSSwitchCasePage;
