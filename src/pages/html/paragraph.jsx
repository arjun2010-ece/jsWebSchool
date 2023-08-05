import Layout from "@/components/layout";

import globalTheme from "@/styles/theme";
import { PAGES, htmlParaTagSnippet } from "@/utils";
import Heading from "@/components/heading";
import Text from "@/components/text";
import { fluid, remToPx } from "@/styles/Global.style";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "HTML paragraph tag - Unleashing the Power of <p> Tag",
  metaDescription:
    'Master the HTML paragraph tag with our comprehensive tutorial. Learn how to use the "p" tag to structure and format text content in HTML. Discover techniques for styling paragraphs, creating line breaks, and adjusting spacing. Level up your web development skills and create well-formatted and readable paragraphs with the HTML paragraph tag.',
  metaKeywords:
    "HTML, paragraph tag, text formatting, line breaks, spacing, web development, web design, HTML structure, HTML formatting, frontend development, HTML tutorial",
  metaOgTitle: "HTML Paragraph Tag: Structure and Format Text Content",
  metaOgUrl: "https://www.webschooljs.com/html/paragraph",
  metaOgImage: "https://www.webschooljs.com/images/html-logo.png",
};

const HTMLHeading = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="Paragraph Tags ?"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />
      <Text
        content={`
        Paragraph or p Tags are <b>semantic tags</b> and used to <b>wrap contents of a webpage</b> or simply a 
        paragraph of content. Here paragraph means the same as paragraph in english language.<br/>
        You can use as many "p" tag as you want in any html file or webpage.<br/><br/>
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Syntax and Usage :"
        headingType="h6"
        customStyle={{
          marginBottom: "1rem",
          textDecoration: "underline",
          marginTop: "2rem",
        }}
      />

      <Text
        content={`
        To create a paragraph in HTML, simply wrap your text content with the <strong>&lt;p&gt;</strong> opening and <strong>&lt;/p&gt;</strong> closing tags. 
        <br/>
        You can include multiple paragraphs on a page by using additional <strong>&lt;p&gt;</strong> tags.<br/>
        Here's an example:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={htmlParaTagSnippet} />

      <Heading
        content="Formatting text in paragraphs :"
        headingType="h6"
        customStyle={{
          marginBottom: "1rem",
          textDecoration: "underline",
          marginTop: "2rem",
        }}
      />

      <Text
        content={`
        Within a paragraph, you can apply various text formatting options, such as:
        <br/>
        <br/>

        <strong>1. Bold :</strong> To make text bold, enclose it within the <strong>&lt;strong&gt;</strong> or <strong>&lt;b&gt;</strong> tags. 
        <br/> For example :
        <strong>&lt;p&gt;This is &lt;strong&gt;bold&lt;/strong&gt; text.&lt;/p&gt;</strong>.
        <br/>
        <br/>

        <strong>2. Italic:</strong> To italicize text, enclose it within the <strong>&lt;em&gt;</strong> or <strong>&lt;i&gt;</strong> tags. 
        <br/> For example :
        <strong> &lt;p&gt;This is &lt;em&gt;italic&lt;/em&gt; text.&lt;/p&gt; </strong>.
        <br/>
        <br/>

        <strong>3. Underline :</strong> To underline text, enclose it within the &lt;u&gt; tag. 
        <br/> For example :
         <strong> &lt;p&gt;This is &lt;u&gt;underlined&lt;/u&gt; text.&lt;/p&gt; </strong>.
        <br/>
        <br/>

       <strong>4. Strike-through:</strong> To add a strike-through effect to text, enclose it within the 
       <strong>&lt;s&gt;</strong> or <strong>&lt;del&gt;</strong> tags. 
       <br/>
       For example :
       <strong>&lt;p&gt;This is &lt;s&gt;struck-through&lt;/s&gt; text.&lt;/p&gt;</strong>.
        `}
        parentEl="div"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Heading
        content="Best Practices"
        headingType="h6"
        customStyle={{
          marginBottom: "1rem",
          textDecoration: "underline",
          marginTop: "2rem",
        }}
      />

      <Text
        content={`
        When working with paragraph tags, it's important to follow these best practices:
        <br/><br/>
        <strong>Use Semantic Markup:</strong> Ensure that the content within the &lt;p&gt; tags represents a logical and meaningful paragraph.
        <br/><br/>

        <strong>Separate Paragraphs:</strong> Use separate &lt;p&gt; tags for each paragraph to maintain proper structure and readability.
        <br/><br/>
        <strong>Avoid Excessive Formatting:</strong> Limit the use of excessive text formatting within paragraphs to maintain readability and a consistent style across your website.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        HTML paragraph tags are a fundamental element for organizing and displaying textual content on web pages. By using them correctly and adhering to best practices, you can enhance the structure, readability, and accessibility of your web content.
        <br/>
        <b> <br/> <br/>
        Note::</b> <br/>
        Please do not forget that paragraph or para or p tags are block level element. And if you
        remember, it has top/bottom/right/left extra margins and paddings by default.<br/>
        <b>FYI ::</b> These extra margins and paddings we need to remove from all block elements and
        then only UI will be consistent and follow css box model, obviously when we go to css.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/html/heading" nextLink="/html/div" />
    </Layout>
  );
};

export default HTMLHeading;
