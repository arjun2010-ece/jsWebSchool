import Layout from "@/components/layout";

import {
  PAGES,
  bgAttachmentSnippet,
  bgColorSnippet,
  bgImageSnippet,
  bgPositionSnippet,
  bgRepeatSnippet,
} from "@/utils";
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from "@/styles/Global.style";
import Heading from "@/components/heading";
import Text from "@/components/text";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "CSS Background & border properties",
  metaDescription:
    "Discover the power of CSS background and border properties in this comprehensive tutorial. Learn how to apply stunning backgrounds and borders to your web elements, and explore various styling techniques to enhance your web design.",
  metaKeywords:
    "CSS tutorial, background properties, border properties, web design, styling techniques, front-end development, CSS backgrounds, CSS borders",
  metaOgTitle: "Mastering CSS Background & Border Properties Tutorial",
  metaOgUrl: "https://www.webschooljs.com/css/background-border-properties",
  metaOgImage: "https://www.webschooljs.com/images/css-logo.jpeg",
};

const CSSBackgroundBorderPropertiesPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Background & Border Properties"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Heading
        content="Background Properties:"
        headingType="h6"
        customStyle={{ textDecoration: "underline" }}
      />

      <Text
        content={`
        We have 6 background properties and <b>background</b> is a shorthand for all of those properties.
        <br/><br/>
        The 6 background properties are::
        <ol>
          <li>
            <b>background-color</b>
          </li>

          <li>
            <b>background-image</b>
          </li>

          <li>
            <b>background-repeat</b>
          </li>

          <li>
            <b>background-attachment</b>
          </li>

          <li>
            <b>background-position</b>
          </li>
        </ol> 
        `}
        parentEl="div"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        Lets talk about <b>background color</b> property. It is used to set the background color of html element.
        It can be set either with <b>background</b> property or <b>background-color</b> as shown in below 
        snippet and check their  <a target="__blank" href="/images/bg-color-image.jpg">results in this image</a>.

        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={bgColorSnippet} />

      <Text
        content={`<br/><br/>
        Secondly, <b>background image</b> property is used to set the background image of html element.
        It can be set either with <b>background</b> property or <b>background-image</b> as shown in below 
        snippet and check their  <a target="__blank" href="/images/lighthouse-image.jpg">results in this image</a>.
        <br/><br/>
        <b>Just remember</b>, the background will be set with a <b>url</b> function and inside this function
        we will paste the relative or remote url inside a <b>double/single quote</b>.<br/><br/>
        And the default behaviour of background image is that once set, it will repeat the images both vertically
        and horizontally and its placed on top left by default of an html element.
        Now, repeating images is something we never want, so we have another property to fix that (background-repeat),
        And its placement can be improved with background-position property.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={bgImageSnippet} />

      <Text
        content={`<br/><br/>
        Thirdly, <b>background repeat</b> property is used to avoid the default repeating of background image
        horizontally and vertically in html element or repeating only horizontally or repeating vertically.
        It can be set either with <b>background</b> property or <b>background-repeat</b> as shown in below 
        snippet and check their  <a target="__blank" href="/images/bg-no-repeat-image.jpg">results in this image</a>.
        <br/><br/>
        The <b>background-repeat</b> property has many values but most importantly : <b>no-repeat</b> (not repeating
          horizontally and vertically), <b>repeat-x</b> (repeating only in horizontal direction, x-axis) and 
          <b>repeat-y</b> (repeating only in vertical direction, y-axis)
        
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={bgRepeatSnippet} />

      {/* Background attachment */}

      <Text
        content={`<br/><br/>
        Next, <b>background attachment</b> property decides whether the background image will be fixed or scroll
        when we scroll the page.
        It can be set either with <b>background</b> property or <b>background-attachment</b> as shown in below 
        snippet.
        <br/><br/>
        The <b>background-attachment</b> property has many values but most importantly : <b>fixed</b> 
        (bg image will be fixed at its place, when page is scrolled) and <b>scroll</b> (bg image will scroll when page is scrolled).
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={bgAttachmentSnippet} />

      {/* Background Position */}
      <Text
        content={`<br/><br/>
        Lastly, <b>background position</b> property is used to set the background image position in the html element.

        It can be set either with <b>background</b> property or <b>background-position</b> as shown in below 
        snippet.
        <br/><br/>
        The <b>background-attachment</b> property has many values and we need to understand how this value is 
        set,
        for ex: defining any position we need x-coordinate and y-coordinate to properly locate it.<br/><br/>
        So for understanding this we need to understand it with respect to x-coordinate(right/left) and 
        y-coordinate (top/bottom ) if both values are given else if only one value is given then
        it means center of that edge unless "center" is mentioned.
        <br/>
        <b>background-position: x-coordinate y-coordinate</b> <br/><br/>
        <ol>
          <li>The first way in below snippet, has position as only top, it means the "top center" or center of top edge.
          and have a <a target="__blank" href="/images/bg-pos-top.jpg">look in this image to visually understand this</a>.
          </li>

          <li>The Second way in below snippet, has position as only left, it means the "left center" or center of
          left edge.
          and have a <a target="__blank" href="/images/bg-pos-left.jpg">look in this image to visually understand this</a>.
          </li>

          <li>The Third way in below snippet is very special, has position as only center, it means the 
          "center center" or center of element(rectangular box).
          and have a <a target="__blank" href="/images/bg-pos-center.jpg">look in this image to visually understand this</a>.
          </li>

          <li>The Fourth way has 2 values meaning x & y coordinate. It has position as <b>20% 70%</b>, meaning
          from x axis its 20% and from y axis its 70% of space covered.
          and have a <a target="__blank" href="/images/bg-pos-percnt.jpg">look in this image to visually understand this</a>.
          </li>

          <li>The Fifth way has 2 values meaning x & y coordinate along with edges value, so little
          complex but easy to understand. It has position as <b>bottom 48px right 95px</b>, meaning
          from bottom edge move 48px towards center of element(rectangular box) and from right edge move 95px
          towards center of element(rectangular box).
          and have a <a target="__blank" href="/images/bg-pos-bottom-right.jpg">look in this image to visually understand this</a>.
          </li>
          <li>And same goes for sixth way, except its defined in percentages.
          </li>
        </ol>
        `}
        parentEl="div"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={bgPositionSnippet} />

      <Heading
        content="Border Properties:"
        headingType="h6"
        customStyle={{ textDecoration: "underline", marginTop: "2rem" }}
      />

      <Text
        content={`
        Border is the boundry of an html element.
        We have 3 border properties such as : <b>border-width</b>,  <b>border-style</b> and
        <b>border-color</b>
        <br/><br/>
        <b>border-width</b> : Width of border. <br/>
        <b>border-style</b> : style of border such as solid, dotted etc <br/>
        <b>border-color</b> : color of border such as black, green, #e23e23, rcb(234,123,543) etc <br/>
        <br/>
        In short, all three is popularly set with a single border property as:
        <b>border: 3px solid black</b>, <br/>
        where <b>border-width : 3px</b>, <b>border-style : solid</b> and <b>border-color : black</b>.

        <br/><br/>
        Also we can set border on a particular edge of an html element only and not on all the edges (as it is a rectangular box) like
        <b>border-right</b>, <b>border-left</b>, <b>border-top</b> and <b>border-bottom</b>. <br/>
        e.g: <b>border-right: 2px solid black;</b>.
        <br/><br/>
        To learn more about borders, you can study here, <a target="__blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/border">
        more on borders</a>.
        <br/>
        Also look at the image of borders <a href="/images/border-image.jpg" target="__blank">here </a>. This black color rectangle is the border of html
        elements.
        `}
        parentEl="div"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/css/display-visibility-properties"
        nextLink="/css/flexbox-properties"
      />
    </Layout>
  );
};

export default CSSBackgroundBorderPropertiesPage;
