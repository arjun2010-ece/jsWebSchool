import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import {
  PAGES,
  htmlCssSpanTagSnippet,
  htmlSpanAccessibilitySnippet,
  htmlSpanTagSnippet,
  htmlStSpanTagSnippet,
} from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'HTML <span> Unleashed: Unveiling Hidden Styling Potential for Text',
  metaDescription:
    'Discover the versatility of the HTML "span" tag with our comprehensive tutorial. Learn how to use the "span" tag to apply inline styling, target specific elements, and group inline content. Explore practical examples and best practices for leveraging the power of spans in your HTML code. Level up your web development skills and create customized and fine-grained styling with the HTML "span" tag.',
  metaKeywords:
    'HTML, span tag, inline styling, inline content, inline element, targeting elements, HTML elements, web development, web design, frontend development, HTML tutorial',
  metaOgTitle:
    'HTML Span Tag: Customized Inline Styling and Targeting Elements',
  metaOgUrl: 'https://www.webschooljs.com/html/span',
  metaOgImage: 'https://www.webschooljs.com/images/html-logo.png',
};

const HTMLSpan: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="Span Tags ?"
        headingType="h1"
        customStyle={tw`mb-4`}
      />
      <Text
        content={`
        Span Tags are <b>non-semantic tags</b> and used to <b>wrap few words for styling purposes</b> 
        Normally we use span tags inside a block element such as <b>p</b> tags.
        But we could use span tag separately too.
        You can use as many span tag as you want in any html file or webpage.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Syntax and Usage */}
      <Heading
        content="Syntax and Usage :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        To use the <span> tag, simply include it in your HTML markup with an opening and closing tag. 
        You can use the <span> tag to wrap individual words, characters, or inline elements within a larger block of text. <br/>
        Here's an example:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlSpanTagSnippet} />

      {/* Styling with CSS */}
      <Heading
        content="Styling with CSS :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        The primary purpose of using <strong>span</strong> tags is to apply styles to specific portions of text or inline elements using CSS. By assigning class or ID attributes to <strong>span</strong> tags, you can target them in your CSS stylesheets and modify their appearance.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlStSpanTagSnippet} />
      <CodeSnippet content={htmlCssSpanTagSnippet} />

      <Text
        content={`
       <br/>
       The <strong>span</strong> tag is commonly used in conjunction with CSS properties like color, font-weight, text-decoration, and background-color to add emphasis or visually distinguish certain elements within a paragraph or sentence.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Accessibility and Semantic Use */}
      <Heading
        content="Accessibility and Semantic Use :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        While the <strong>span</strong> tag doesn't have any inherent semantic meaning, it can be useful for accessibility purposes when used with appropriate ARIA attributes. By adding ARIA roles and properties to <span> tags, you can improve the accessibility and screen reader experience for users with disabilities.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlSpanAccessibilitySnippet} />

      {/* Best practices */}
      <Heading
        content="Best practices :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        When working with <strong>span</strong> tags, it's important to follow these best practices:
        <br/><br/>

        <strong>Use for Inline Elements :</strong> <strong>span</strong> tags are designed to target and style inline elements. Avoid using them for larger blocks of content or structural elements, as other HTML tags are more suitable for those purposes.
        <br/><br/>

        <strong>Meaningful Class and ID Names :</strong> Choose descriptive class and ID names for your <strong>span</strong> tags to ensure clarity and maintainable code.
        <br/><br/>

        <strong>Keep Code Readable :</strong> Use <strong>span</strong> tags judiciously and avoid excessive nesting to keep the code readable and maintainable.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        The <span> tag is a valuable tool for applying styles or behaviors to specific portions of text or inline elements. By using <span> tags appropriately and in combination with CSS, you can add emphasis, modify appearance, and enhance the accessibility of your web content.
        <br/><br/>
        <b> 
        Note::</b> <br/>
        Please do not forget that span tags are <b>inline</b> element. And if you
        remember, it has right/left extra margins and paddings by default but does not have top/bottom 
        margin/paddings and we can not set it by css even.<br/>
        <b>FYI ::</b> These extra margings and paddings we need to remove from all span elements and
        then only UI will be consistent and follow css box model, obviously when we go to css.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/html/div" nextLink="/html/unordered-ordered" />
    </Layout>
  );
};

export default HTMLSpan;
