import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, outlineSnippet, outlineSyntaxSnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import ResponsiveImage from '@/components/responsive-image';
import styled from 'styled-components';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'CSS Outline properties',
  metaDescription:
    'Master the CSS outline properties and add visual emphasis to your HTML elements. This tutorial covers the various outline properties, including outline-style, outline-color, and outline-width, enabling you to create custom outlines and enhance the visual appeal of your web designs.',
  metaKeywords:
    'CSS tutorial, outline properties, HTML styling, web design, front-end development, visual emphasis, outline-style, outline-color, outline-width',
  metaOgTitle:
    'CSS Outline Properties Tutorial: Adding Visual Emphasis to HTML Elements',
  metaOgUrl: 'https://www.webschooljs.com/css/outline-properties',
  metaOgImage: '/images/css-logo.jpeg',
};

const ButtonWithOutline = styled.button`
  padding: 7px 14px;
  margin-top: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: block;
  border: 0.1px solid grey;

  &:focus {
    outline: 3px solid green;
  }
`;

const CSSOutlinePropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Outline properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Outline is a css property which is very much similar as border property and is written the same
        way : 
        <span class="px-2" style="border: 1px solid black">outline: 1px solid black</span>.
        <br/><br/>
        Whenever we focus on an element then for the purpose of highlighting it, we use <b>outline</b>
        property.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={outlineSnippet} />

      <Text
        content={`<br/>
        Clicking on a button element will have a focus of 1px solid green on the button element.<br/>
        The purpose of using this is to let users know which element has focus currently. It happens also when
        you press tab and different elements get focus and then the applied style displays. <br/> <br/>
        <i>Only difference between <b>border</b> and <b>outline</b> is that outline does not take
        space in the UI and is placed on the top of the html element and outside html elements dimension. 
        </i>
        <br/>
        <br/>
        The general syntax for writing the <b>outline</b> is :
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={outlineSyntaxSnippet} />

      <Text
        content={`<br/>
        <ul>
            <li>
                <b>outline-width :</b> represents width of the outline in two way such as <b>1px</b>
                or <b>3px</b> etc in px values or using predefined values of thin, medium, or thick.
            </li>

            <li>
                <b>outline-style :</b> represents style of the outline. Values such as solid, double,
                 dotted, groove, dashed, ridge are commonly used.
            </li>

            <li>
                <b>outline-color :</b> represents color of the outline. Values such as color keyword
                (e.g  grren, blue etc), hexadecimal value (#234432), RGB value such as rgb(255,123,234)
                are used.
            </li>
        </ul>
        <br/>
        This <b>outline</b> property can be applied on both block or inline or inline-block elements.
        <br/>
        It is worth noting that we do not use this much but very occasionally.
        <br/>
        <br/>
        A simple button element (default or without focus) looks like below:
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <ResponsiveImage
        srcUrl="/images/button.jpg"
        altText="button without focus"
        hideBorders
        boxHeight="200px"
      />

      <Text
        content={`<br/>
        And to see a outline, please click on the below button. 
        Clicking will apply an outline on this button of "3px solid green:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <ButtonWithOutline>Click me</ButtonWithOutline>
      <br />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/css/overflow-properties"
        nextLink="/css/cursor-properties"
      />
    </Layout>
  );
};

export default CSSOutlinePropertiesPage;
