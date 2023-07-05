import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  marginSnippets,
  paddingSnippets,
  borderSnippet,
  borderRadiusSnippet,
  cssBoxSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'CSS Box model properties',
  metaDescription:
    'Explore the CSS box model properties and elevate your web design capabilities. This comprehensive tutorial covers the box model, including padding, borders, and margins, to help you create visually appealing and well-structured HTML layouts.',
  metaKeywords:
    'CSS tutorial, box model properties, CSS layout, HTML design, front-end development, web design, padding, borders, margins',
  metaOgTitle: 'Mastering CSS Box Model Properties: Create Stunning HTML Layouts',
  metaOgUrl: 'https://jswebschool.com/css/box-model-properties',
  metaOgImage: '/images/css-logo.jpeg',
};


const CSSBoxModelPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Box Model Properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
       Box model properties refers to all the properties that is needed to respect css box model i.e total width of an html element
       is always sum of paddings and border and content width.
       <br/><br/>
        The following properties are grouped into this category are::
        <ol>
          <li>margin</li>
          <li>padding</li>
          <li>border</li>
          <li>border-radius</li>
          <li>box-sizing</li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Margin */}
      <Heading
        content="Margin:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Margin is the space between an html element and its neighbours. As such it does not contribute much in box model, but we
        study this in this category as this property is very similar to padding that we will study next.
        <br/>
        Margin is made up of 4 properties i.e  <b>margin-top, margin-bottom, margin-right, margin-left </b> representing top/bottom/
        right/left space between the html element and its neightbour.
        <br/> <br/> 
        There are 4 ways of writing margin as shown in this snippet, also look at some of the diagram of margin for easy visualization
         here,
        <a href="/images/margin-image.jpg" target="__blank">Look the image  </a>::
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={marginSnippets} />

      <Text
        content={`
         <b>Explanations:</b><br/>
         In the <b>First way</b>, a single margin value represents same margin of 23px, on all the four sides of an html element.
         <br/> <br/>
         In the <b>Second way</b>, two margin values make up the whole margin. The first margin value in this case represents top
         and bottom margin of 23px and second margin value represents right and left margin of 10px. <br/> <br/>

         In the <b>Third way</b>, three margin values make up the whole margin. The first margin value in this case represents top
        margin of 10px and second margin value represents right and left margin of 16px and third margin value represents 
        bottom margin of 8px. <br/> <br/>

        In the <b>Fourth way</b>, Four margin values make up the whole margin. The first margin value in this case represents top
        margin of 10px and second margin value represents right margin of 16px and third margin value represents 
        bottom margin of 8px and fourth margin represents left margin of 12px. It is exactly like a <b>clockwise movement.</b> <br/>
        <br/>
        In the <b>Fifth way</b>, we splitted the margin properties into <b>margin-top, margin-bottom, margin-left and margin-right</b> individual
        properties. We can use one or more margin sub-properties based on our need.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Padding */}
      <Heading
        content="Padding:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Padding is the internal space between an html elements border and its content or content box(where real content exists).
        <br/>
        Padding is made up of 4 properties i.e  <b>padding-top, padding-bottom, padding-right, padding-left </b> representing top/bottom/
        right/left space between an html elements border and its content or content box.
        <br/> <br/> 
        There are 4 ways of writing padding as shown in this snippet, also look at some of the diagram of padding for easy visualization
        here,
       <a href="/images/padding-image.jpg" target="__blank">Look the image  </a>:::
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={paddingSnippets} />

      <Text
        content={`
        <b>Explanations:</b><br/>
        In the <b>First way</b>, a single padding value represents same padding of 23px, on all the four sides of an html element.
        <br/> <br/>
        In the <b>Second way</b>, two padding values make up the whole padding. The first padding value in this case represents top
        and bottom padding of 23px and second padding value represents right and left padding of 10px. <br/> <br/>

        In the <b>Third way</b>, three padding values make up the whole padding. The first padding value in this case represents top
        padding of 10px and second padding value represents right and left padding of 16px and third padding value represents 
        bottom padding of 8px. <br/> <br/>

        In the <b>Fourth way</b>, Four padding values make up the whole padding. The first padding value in this case represents top
        padding of 10px and second padding value represents right padding of 16px and third padding value represents 
        bottom padding of 8px and fourth padding represents left padding of 12px. It is exactly like a <b>clockwise movement.</b> <br/>
        <br/>
        In the <b>Fifth way</b>, we splitted the padding properties into <b>padding-top, padding-bottom, padding-left and padding-right</b> individual
        properties. We can use one or more padding sub-properties based on our need.
        <br/><br/>
        <b>The way to write margin and padding are same. Just remember that margin is the external space between 2 elements, 
        while padding is the internal space within an html element between its content and its border.</b>
  `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Border and border radius */}
      <Heading
        content="Border and border radius:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Border is the boundry of an html element. Beyond its boundry, the element does not exists. There is a rectangular boundry
        around an html elment. The way its written in css is in below snippet, also look at the diagram of border for 
        easy visualization
        here,
       <a href="/images/border-image.jpg" target="__blank">Look the image  </a>. This black color rectangle is the border of html
       elements.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={borderSnippet} />
      <Text
        content={`<br/>
        <b>1px</b> represents <b>border width</b>, you can change it to any pixel value you need. <b>solid</b> represents 
        <b>border style</b>, its other popular values can be dotted, dashed, double etc, to read more on this :
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style" target="__blank">More on borders-style</a>. <br/><br/>
        <b>black</b> represents border color, although you can put green or any color or even hex or rgb color also can be provided here.
        . <br/><br/>
        This is the most preferred way of writing border almost always.
        But border property can be subdivided into smaller properties too, if you are interested, read from official
        documentation here <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" target="__blank">More on borders</a>.

        <br/><br/>
        Now <b>border-radius</b> is used to control the <b>edges of an html element</b>, since all html element looks a rectangular box,
        we can make this little circular if needed too. The way to do this is shown below, also look at the diagram of border-radius for 
        easy visualization
        here,
       <a href="/images/border-radius-image.jpg" target="__blank">Look the image  </a>. This edges shown by arrows are not pointed anymore
       and little circular as we put <b>border-radius: 20px</b> there.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={borderRadiusSnippet} />

      <Text
        content={`<br/>
        In the above snippet, the first one is fine, but a very special case of border radius is, when the width and height is
        of same value (not in percentages, but in px or rem), then a border-radius of <b>50%</b> or <b>100%</b> will make a
        html element full circular.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Box sizing */}
      <Heading
        content="Box sizing:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Box sizing property is what makes an html element follow css box model for consistency in a webpage.
        The default value of box sizing is <b>content-box</b>, which does not follow box model, so we need to put
        <b>box-sizing: border-box</b> to follow box model. The below snippet is always required in css to follow box model.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={cssBoxSnippet} />

       {/* NavigationIcon : Front and Back Link */}
       <NavigationIcon prevLink="/css/dimension-properties" nextLink="/css/positioning-properties"  />
    </Layout>
  );
};

export default CSSBoxModelPropertiesPage;
