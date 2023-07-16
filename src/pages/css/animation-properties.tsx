import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  animExampleFiveSnippets,
  animExampleFourSnippets,
  animExampleOneSnippets,
  animExampleSixSnippets,
  animExampleThreeSnippets,
  animExampleTwoSnippets,
  basicAnimationSnippets,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'CSS Animation basics and examples',
  metaDescription:
    'Learn how to create captivating CSS animations with our step-by-step CSS animations tutorial.',
  metaKeywords:
    'CSS Animation, CSS Tutorial, Web Animation, Keyframe Animation',
  metaOgTitle: 'CSS Animation basics and examples',
  metaOgUrl: 'https://www.webschooljs.com/css/animation-properties',
  metaOgImage: 'https://www.webschooljs.com/images/css-logo.jpeg',
};

const CSSAnimationPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="CSS Animation:"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content="CSS animations provide more control over the animation process by allowing you to define keyframes, which are intermediate stages of an animation. Keyframes specify how the element should look at different points during the animation. The animation then smoothly transitions between these keyframes over the specified duration. The syntax for defining a CSS animation is as follows:
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={basicAnimationSnippets} />

      <Text
        content="<br/>
        <b>animation-name:</b> Specifies the name of the keyframe animation. The keyframes with the same name will be used for the animation.
        <br/><br/>
        <b>duration:</b> Specifies the total time taken for one iteration of the animation, usually in seconds (<b>s</b>) or milliseconds (<b>ms</b>).
        <br/><br/>
        <b>timing-function:</b> Defines the acceleration or deceleration of the animation, similar to transitions.
        <br/><br/>
        <b>delay:</b> Optional. Defines a delay before the animation starts, specified in seconds (<b>s</b>) or milliseconds (<b>ms</b>).
        <br/><br/>
        <b>iteration-count:</b> Specifies the number of times the animation should run. Common values include <b>infinite</b> (default) for continuous looping or a specific number for a limited number of loops.
        <br/><br/>
        <b>direction:</b> Specifies whether the animation should play in the normal direction (<b>normal</b>), reverse direction (<b>reverse</b>), alternate direction (<b>alternate</b>), or alternate reverse direction (<b>alternate-reverse</b>) on each iteration.
        <br/><br/>
        <b>fill-mode:</b> Defines what styles are applied to the element before and after the animation. Common values are <b>forwards, backwards, both,</b> and <b>none</b>.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 1: Slide in of html element from left side."
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={animExampleOneSnippets} />

      <Text
        content="<br/>
        In this example, the element will slide in from the left side (starting position at <b>transform: translateX(-100%)</b>) to its original position (<b>transform: translateX(0)</b>) over 1 second with an ease-in-out timing function.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 2: Bouncing ball animation of html element."
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={animExampleTwoSnippets} />

      <Text
        content="<br/>
        This will create a bouncing effect for an element with the class <b>bouncing-ball</b>.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 3: Rotating Spinner animation of html element."
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={animExampleThreeSnippets} />

      <Text
        content="<br/>
        This will create a rotating spinner effect for an element with the class <b>spinner</b>.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 4: Fading In and Out Slideshow animation of html element."
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={animExampleFourSnippets} />

      <Text
        content="<br/>
        This will create a slideshow effect where the elements fade in and out at regular intervals.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 5: Floating Clouds animation of html element."
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={animExampleFiveSnippets} />

      <Text
        content="<br/>
        This will create a floating effect for elements with the class <b>cloud</b>.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example 6: Typing Text animation of html element."
        headingType="h6"
        customStyle={tw`mt-8`}
      />

      <CodeSnippet content={animExampleSixSnippets} />

      <Text
        content="<br/>
        This will create a typewriter effect for elements with the class <b>typewriter</b>, making the text appear as if it is being typed.
        <br/><br/>
        These are just a few examples of CSS animations. CSS animations provide a powerful way to add engaging and interactive effects to your web pages, and there are countless possibilities for creative animations depending on your needs and imagination.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Key Differences between CSS Transitions and CSS Animations:"
        headingType="h6"
        customStyle={tw`mt-8 underline`}
      />

      <Text
        content="
        <b>CSS Transitions</b> are triggered when a property changes its value, and they provide a smooth transition between the old and new values. They are best suited for simple changes like hover effects, color transitions, and basic animations.
        <br/><br/>
       <b>CSS Animations</b>, on the other hand, allow you to create complex animations by defining keyframes with intermediate states. They give more control over the animation process and are suitable for advanced animations with multiple steps or complex motion.
       <br/><br/>
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/css/transition-properties"
        nextLink="/css/overflow-properties"
      />
    </Layout>
  );
};

export default CSSAnimationPropertiesPage;
