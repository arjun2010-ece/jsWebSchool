import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  basicTransitionSnippets,
  transitionExampleFiveSnippets,
  transitionExampleFourSnippets,
  transitionExampleOneSnippets,
  transitionExampleSevenSnippets,
  transitionExampleSixSnippets,
  transitionExampleThreeSnippets,
  transitionExampleTwoSnippets,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'CSS transition basics and examples',
  metaDescription:
    'Learn how to create captivating CSS transitions with our step-by-step CSS transitions tutorial.',
  metaKeywords:
    'CSS Transitions, CSS Tutorial, Web transitions, css effects',
  metaOgTitle: 'CSS transition basics and examples',
  metaOgUrl: 'https://www.webschooljs.com/css/transition-properties',
  metaOgImage: 'https://www.webschooljs.com/images/css-logo.jpeg',
};

const CSSTransitionPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="CSS Transition and Animation Properties"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content="CSS animations and transitions are powerful tools that allow web developers to create engaging and interactive visual effects on their websites. They help enhance user experience and bring life to static elements on the page. Let's dive into the details of CSS animations and transitions.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading content="CSS Transition:" headingType="h2" />

      <Text
        content="CSS transitions <b>allow smooth changes between different property values over a specified duration</b>. They are triggered when a property changes its value, and you can define the transition effect to make the change more visually appealing. The syntax for defining a transition is as follows:
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={basicTransitionSnippets} />

      <Text
        content="<br/>
        <b>property:</b> Specifies the CSS property to which the transition should be applied. You can use any CSS property that has a measurable intermediate state, such as <b>width, height, background-color, opacity</b>, etc.
        <br/><br/>
       <b> duration:</b> Specifies the time taken for the transition to complete, usually in seconds (<b>s</b>) or milliseconds (<b>ms</b>).
       <br/><br/>
       <b>timing-function:</b> Defines the acceleration or deceleration of the transition. It controls the intermediate values of the property during the transition. Common values include <b>ease</b> (default), <b>linear, ease-in, ease-out, ease-in-out,</b> and more.
       <br/><br/>
       <b>delay:</b> Optional. Defines a delay before the transition starts, specified in seconds (<b>s</b>) or milliseconds (<b>ms</b>).
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 1: Buttons background color transitions between blue and red"
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={transitionExampleOneSnippets} />

      <Text
        content="<br/>
        In this example, when you hover over the button element, it will smoothly transition from a blue background color to a red background color over 0.3 seconds with an ease timing function.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 2: Simple Fade-In/Fade-Out of html element"
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={transitionExampleTwoSnippets} />

      <Text
        content="<br/>
        This will create a smooth fade-in effect when hovering over the element and a fade-out effect when not hovering.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 3: Slide-In of html element from the Left:"
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={transitionExampleThreeSnippets} />

      <Text
        content="<br/>
        This will slide the element in from the left when hovering over it. It is used to expand a banner normally on a website."
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 4: Color Change of html element:"
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={transitionExampleFourSnippets} />

      <Text
        content="<br/>
        This will smoothly change the background color of the element when hovering over it."
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 5: zoom of html element:"
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={transitionExampleFiveSnippets} />

      <Text
        content="<br/>
        This will zoom/scale the element slightly larger when hovering over it."
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 6: Rotation of html element:"
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={transitionExampleSixSnippets} />

      <Text
        content="<br/>
        This will rotate the element by 45 degrees when hovering over it."
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 7: Width Change of html element:"
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={transitionExampleSevenSnippets} />

      <Text
        content="<br/>
        This will smoothly change the width of the element when hovering over it.
        <br/><br/><br/>
        These are just a few examples of the many animations you can create with CSS transitions. By using different CSS properties and timing functions, you can achieve a wide range of visual effects to enhance your web pages and user interactions.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/css/grid-child-properties" nextLink="/css/animation-properties" />
    </Layout>
  );
};

export default CSSTransitionPage;
