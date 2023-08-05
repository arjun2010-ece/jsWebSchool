import Layout from "@/components/layout";

import {
  PAGES,
  colorSnippets,
  fontFamilySnippets,
  fontSizeSnippets,
  fontStyleSnippets,
  fontWeightSnippets,
  letterWordSpacingSnippets,
  lineHeightSnippets,
  opacitySnippets,
  textAlignSnippets,
  textDecorationsSnippets,
  textTransformSnippets,
} from "@/utils";
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from "@/styles/Global.style";
import Heading from "@/components/heading";
import Text from "@/components/text";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "CSS Typography properties",
  metaDescription:
    "Unlock the power of CSS typography properties and elevate the visual appeal of your web typography. This comprehensive tutorial covers CSS typography properties such as font-family, font-size, font-weight, and text-align, enabling you to create beautifully designed and readable text on your web pages.",
  metaKeywords:
    "CSS tutorial, typography properties, web typography, front-end development, web design, font-family, font-size, font-weight, font-style, color, text-align, text-decoration, text-transform, line-height, letter-spacing, word-spacing, opacity",
  metaOgTitle:
    "CSS Typography Properties Tutorial: Enhance Web Typography for Stunning Designs",
  metaOgUrl: "https://www.webschooljs.com/css/typography-properties",
  metaOgImage: "https://www.webschooljs.com/images/css-logo.jpeg",
};

const CSSTypographyPropertiesPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Typography Properties"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Text
        content={`
       Typography means texts and everything related with texts such as color , text size(font size), thickness of letters of texts 
       (font weight) etc. In css, all the css properties that are used to change different aspects of texts are grouped into
       typography properties group.
       <br/><br/>
       If you remember all of this properties, then anytime you need to make changes in text, everything will come handy to you.
        <br/><br/>
        The following properties are grouped into this category are::
        <ol>
          <li>font-family</li>
          <li>font-size</li>
          <li>font-weight</li>
          <li>font-style</li>
          <li>color</li>
          <li>text-align</li>
          <li>text-decoration</li>
          <li>text-transform</li>
          <li>line-height</li>
          <li>letter-spacing</li>
          <li>word-spacing</li>
          <li>opacity</li>
        </ol>
        `}
        parentEl="div"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* Font Family */}
      <Heading
        content="Font Family:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Font family means family of fonts and fonts mean how a character or texts look.
        Different font family will make the texts look slightly or more different.
        <br/>
        <ul>
          <li>
           <b>Serif :</b> This font will have small decorative line at the ends of characters.
          </li>
          <li>
           <b>sans-serif :</b> This font will not have small decorative line at the ends of characters.
          </li>
          <li>
          <b>Cursive :</b> This font mimic hand writings
         </li>
        </ul>
        <br/> 
        Some of the other font family examples are ::  <br/>
        <b>Times New Roman, Arial, Verdana, Helvetica etc.</b>
      
        `}
        parentEl="div"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={fontFamilySnippets} />

      <Text
        content={`<br/>
      In the .css file, we will set a font-family as shown in above snippet. If  font family property is set to 3 fonts such as 
      (Arial, Helvetica, sans-serif) then the browser will try to set the first font i.e Arial. If its not present then it will try
       Helvetica. and if its not present then it will try sans-serif. <br/><br/>
       In h1, h2, h3, h4, h5,h6, the font family set is "Lucida Console", "Courier New", monospace. Please observe that Lucida Console
       font is made of 2 words and that is why we have them inside double quote.<br/>
       Now to observe different font families, please click on this link <a href="https://fonts.google.com/" target="__blank">
       Font Family</a>.
        `}
        parentEl="div"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* Font Size */}
      <Heading
        content="Font Size:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Font size means size of texts. The default font size in an html file is <b>16px</b>.
        For ex: for setting a font size of 18px and 22px in two para tags, we do it like below and its results can be seen here
        <a href="/images/font-size-image.jpg" target="__blank">Look the results</a>:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={fontSizeSnippets} />

      {/* Font Weight */}
      <Heading
        content="Font Weight:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Font weight is used for setting the thickness of each character. Normally the values are multiple of 100, where 400 is normal font and
        700 means bold font.  Its values can be also : lighter, normal, bold, bolder too.
        Either we can set its value by a multiple of 100 or by texts such as lighter, normal, bold, bolder.<br/><br/>
        <b>Quick Tip: </b> The thicker the characters in a text, the higher the font-weight value greater than 400 such as 500, 600,
        700 or 900 max. Or bold or bolder for maximum thickness. Look at some of the examples here:
        <a href="/images/font-weight-image.jpg" target="__blank">Look the results</a>
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={fontWeightSnippets} />

      {/* Font Style */}
      <Heading
        content="Font Style:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Font style means the way each character looks like either normal or italic or oblique. Italic and oblique styling are 
        slanted texts styling.
        For ex: for setting a font style, we do it like below and its results can be seen here
        <a href="/images/font-style-image.jpg" target="__blank">Look the results</a>:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={fontStyleSnippets} />

      {/* Color property */}
      <Heading
        content="Color:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Color means the the foreground color or the color of texts. Normally we have foreground color and background color.
        Background color is the color of elements(block/inline/inline-block) but not of texts and is not a typographic property so 
        we will not cover it here.
        Plus there is a lot more to learn for different ways of setting a color here : <a target="__blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">
        More on colors</a>. <br/>
        For ex: for setting a color, we do it like below, Look at some of the examples here:
        <a href="/images/color-image.jpg" target="__blank">Look the results</a>:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={colorSnippets} />

      {/* Text Align property */}
      <Heading
        content="Text Align:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Text Align property always works on block level element and/or inline-block elements but never on inline elements.
        Since block level elements start from left side and end with right side of webpage. And normally texts does not necessarily 
        takes the full width of block level elements so we have ample space to move the texts right side or center or left(which is
        by default).
        For ex: for setting a text-align, we do it like below, Look at some of the examples here:
        <a href="/images/text-align-image.jpg" target="__blank">Look the results</a>:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={textAlignSnippets} />

      {/* Text decoration property */}
      <Heading
        content="Text decoration:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Text Decoration property does specific decorations on the texts such as overline, underline, line-through or a combination of
        more than one decoration such as (underline line-through) etc.
        For ex: for setting a text-decorations, we do it like below and its results can be seen here
        <a href="/images/text-decoration-image.jpg" target="__blank">Look the results</a>:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={textDecorationsSnippets} />

      {/* Text Transform property */}
      <Heading
        content="Text transform:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Text transform property makes the text either fully <b>uppercase or lowercase or make it capitalise</b>.
        For ex: for setting a text-transform, we do it like below and its results can be seen here
        <a href="/images/text-transform-image.jpg" target="__blank">Look the results</a>:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={textTransformSnippets} />

      {/* Line Height property */}
      <Heading
        content="Line Height:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Remember, the texts that we write is inside a content box, which is inside an element box. So line height is what increase the 
        height of that content box. As a result, the distance between each line becomes bigger as we increase the line height.
        <br/>
        For ex: for setting a line-height, we do it like below and its results can be seen here
        <a href="/images/line-height-image.jpg" target="__blank">Look the results</a>:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={lineHeightSnippets} />

      {/* Letter Spacing and word spacing  property */}
      <Heading
        content="Letter Spacing and word spacing:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
       Letter spacing means the spaces between each characters and word spacing means the spaces between each words.
       And we can customise those using the css property : <b>letter-spacing and word-spacing</b>
         as shown in below snippet . Also look at 
         <a href="/images/letter-spacing-image.jpg" target="__blank">letter spacing example</a> and 
         <a href="/images/word-spacing-image.jpg" target="__blank">word spacing example</a> too. 
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={letterWordSpacingSnippets} />

      {/* Opacity */}
      <Heading
        content="Opacity:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Opacity comes from the english word opaque meaning how much percentage of texts are visible in an element.
        It starts from <b>0 (Not visible at all)</b> and ends to <b>1(visible as normal)</b>. And any number in between like 0.3, 
        0.5 meaning 30% visible 
        or 50% visible only.  
        as shown in below snippet . Also look at some of the examples of opacity here,
        <a href="/images/opacity-image.jpg" target="__blank">Look the results</a>:
        :
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={opacitySnippets} />

      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please do not forget that without learning/remembering all of this, if you move to next properties, you will end up
        knowing something but once you start designing webpage with css, you will not be able to do it effectively. 
        This is the key to learn css.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/css/units-measurement"
        nextLink="/css/dimension-properties"
      />
    </Layout>
  );
};

export default CSSTypographyPropertiesPage;
