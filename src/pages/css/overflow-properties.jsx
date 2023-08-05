import Layout from "@/components/layout";

import {
  PAGES,
  horizontalOverflowSnippet,
  verticalOverflowSnippet,
} from "@/utils";
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from "@/styles/Global.style";
import Heading from "@/components/heading";
import Text from "@/components/text";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "CSS Overflow properties",
  metaDescription:
    "Explore the CSS overflow properties and gain control over content overflow in HTML elements. This tutorial covers the different overflow properties, such as overflow-x and overflow-y, allowing you to handle overflowing content and create scrollable areas within your web designs.",
  metaKeywords:
    "CSS tutorial, overflow properties, HTML styling, web design, front-end development, content overflow, overflow-x, overflow-y, scrollable areas",
  metaOgTitle:
    "CSS Overflow Properties Tutorial: Controlling Content Overflow in HTML Elements",
  metaOgUrl: "https://www.webschooljs.com/css/overflow-properties",
  metaOgImage: "https://www.webschooljs.com/images/css-logo.jpeg",
};

const CSSOverflowPropertiesPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Overflow properties"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Text
        content={`
        Overflow is a css property which will come into picture only when the contents of an html
        element (for eg, h1) exceeds the size i.e, width and height of it parents.<br/><br/>
        By default, an html element is flexible meaning, you can put as much content in it as you want and
        it will happily accept, accomodate and grow in size and will not let any content overflow.
        <br/><br/>
        <b>overflow</b> property is made of 
        <b>overflow-x</b> and <b>overflow-y</b> meaning in horizontal direction and vertical direction.
        <br/><br/>
        This value of overflow, 
        <span class="px-1" style="border: 1px solid red">
          overflow: auto
        </span>, meaning both overflow-x and overflow-y is <i>auto</i>.
        So either use <i>overflow-x</i> or <i>overflow-y</i> separately depending on need or
        use directly <b>overflow</b> property to set the value of both <i>overflow-x</i> and
        <i>overflow-y</i>.
        <br/><br/>
        Now we will study examples of horizontal overflow and vertical overflow and then the way to fix it
         too.
        `}
        parentEl="div"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* Horizontal overflow scenario */}
      <Heading
        content="Horizontal overflow scenario :"
        headingType="h6"
        customStyle={{
          textDecoration: "underline",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      />

      <Text
        content={`
         Now lets study a scenario when text overflows horizontally. Just 2 properties can let this happen.
         <span style="border: 1px solid red">width: 200px</span> on a parent container and
         <span style="border: 1px solid red">white-space: nowrap</span> on a child/content wrapper 
         is sufficient to make a text flow beyond the containers set width (of 200px here).
         Here is the html/css code snippet for this scenario;
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={horizontalOverflowSnippet} />

      <Text
        content={`
        <br/>
        <b>Solution:</b> <br/>
        The way to fix it is simply by putting this line of css in the parent container <br/> i.e 
        <span class="px-2" style="border: 1px solid red">overflow-x: auto</span>.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* Vertical overflow scenario */}
      <Heading
        content="Vertical overflow scenario :"
        headingType="h6"
        customStyle={{
          textDecoration: "underline",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      />

      <Text
        content={`
       Texts will overflow vertically only when we put a fixed height on parent. Lets see the html/css
       code snippet to study that:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={verticalOverflowSnippet} />

      <Text
        content={`
        <br/>
        <b>Solution:</b> <br/>
        The way to fix it is simply by putting this line of css in the parent container <br/> i.e 
        <span class="px-2" style="border: 1px solid black">overflow-y: auto</span>.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* Possible values of overflow property */}
      <Heading
        content="Possible values of overflow property :"
        headingType="h6"
        customStyle={{
          textDecoration: "underline",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      />

      <Text
        content={`
          Possible values for the overflow property:
          <br/>
          <ol>
            <li>
                <b>visible :</b> This is default value. Contents overflowed outside parent containers
                dimension is visible.
            </li>

            <li>
                <b>hidden :</b> Contents overflowed outside parent containers dimension is hidden.
            </li>

            <li>
              <b>scroll :</b> Contents overflowed outside parent containers dimension is forced inside a 
              parent containers dimension itself by enabling a scrollbar to accomodate the extra content.
            </li>

            <li>
              <b>auto :</b> same as <b>scroll</b>. Only difference is that if content fits with the 
              container no scrollbar is added unlike <b>scroll</b>.
            </li>

            <li>
            <b>overlay :</b> same as <b>scroll</b>. Only difference is that scrollbar is added 
            only when user interacts with the parent container.
          </li>

          </ol>
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/css/animation-properties"
        nextLink="/css/outline-properties"
      />
    </Layout>
  );
};

export default CSSOverflowPropertiesPage;
