import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, boxModelSnippet, cssBoxSnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Working with the CSS Box Model: Practical Usage and Best Practices',
  metaDescription:
    'Learn the fundamentals of the CSS box model and how it affects the layout of your HTML elements. This tutorial covers the box model properties, including margin, padding, border, and content, to help you design and structure your web pages effectively',
  metaKeywords:
    'CSS tutorial, box model, CSS layout, HTML design, front-end development, web design, margin, padding, border, content',
  metaOgTitle: 'CSS Box Model Tutorial: Mastering Layout Design in HTML',
  metaOgUrl: 'https://www.webschooljs.com/css/box-model',
  metaOgImage: 'https://www.webschooljs.com/images/css-logo.jpeg',
};

const CSSBoxModelPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="CSS Box Model?"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
       Box model is a css concept and a very important concept in css and mostly related with layout of html elements.<br/><br/>
       An html element  = content box + padding (inner space between content and border) + border.
       Also an html elements looks like a <b>rectangular box</b>.
       <br/><br/>
       At this phase we need to understand 4 concepts::
       <ul>
         <li>Content/Content Box : It is the actual content or text of the html element.</li>
         <li>Padding : It is empty space between content and border of an html element.</li>
         <li>Border : It is line that represents the final boundry of an html element. Beyond it, element does not exists.
         Inside the border, we will have content and padding.
         </li>
         <li>Margin : It is space between 2 nearby html element or space between borders of 2 nearby html elements.</li>
       </ul>
       <b>Padding means internal space and margin means external space.</b> <br/> <br/>
       Box model says : <br/>
       The width of an html element, once set <b>= content width + padding right and left +  border width right and left,
       no matter if you increase the padding or border size (content width will decrease then to compensate for that), the element
       width will always be the set width </b>
        <br/> and <br/>
       the height of an html element, once set <b>= content height + padding top and bottom +  border height top and bottom,
       no matter if you increase the padding or border height (content height will decrease then to compensate for that), the element
       height will always be the set height .</b>
        <br/><br/>
        And the box model in css is implemented by <span style="border: 1px solid red">box-sizing: border-box</span>. <br/><br/>
        The default html element with respect to margin and padding and border looks something like this as shown below:
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={boxModelSnippet} />

      <Heading
        content="Why we needed a css box model?"
        headingType="h5"
        customStyle={tw`mb-4 underline mt-8`}
      />
      <Text
        content={`
        By default an html element does not follow box model as default css property for box sizing is 
        <span style="border: 1px solid red">box-sizing: content-box</span>, which means that once you set a width property of 500px,
        then it is set to <b>Content box</b> in the above UI. And if you set padding-right and padding-left as 20px and also if
        you set the border-right-width and border-left-width also as 5px then the total width of that html element
        <b> = 500px width + (20*2) padding right and left + (5*2) border right width and left width</b>
        <b> = 550px</b>. <br/>
        And this is what becomes the total width of an html element, on the contrary we initially set the width as 500px, which should happen
        . And to fix this inconsistency, we use box model meaning once we set the width as 500px then it becomes the total width of an 
        html element
        (and not of content box), and if you apply padding right/left and/or border width left/right then this increases widths 
        will definately count
        but it will reduce the width of content box (or it will squeeze it). Thus set width will always be the fixed width of an html 
        element even if you provide padding or border or not.
        <b>Thats how we provide consistency.</b>
        <br/><br/>
        We provide consistency by putting this line of code in css file on top of the file. It removes additional margin and padding that
        block or inline-block elements has and makes all the elements follow box model.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={cssBoxSnippet} />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/css/way-to-think"
        nextLink="/css/units-measurement"
      />
    </Layout>
  );
};

export default CSSBoxModelPage;
