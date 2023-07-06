import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import {
  PAGES,
  htmlDivCssSnippet,
  htmlDivPureSnippet,
  htmlDivTagSnippet,
} from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'HTML DIV Tag',
  metaDescription:
    'Learn how to use the HTML `<div>` tag effectively in web design. Our comprehensive tutorial covers the purpose, structure, and styling of `<div>` elements, and how they can be used for layout organization and styling containers. Enhance your HTML and CSS skills and create well-structured and visually appealing web pages with the versatile `<div>` tag.',
  metaKeywords:
    'HTML, `<div>` tag, div tag, html div tag, web design, HTML element, responsive design, structured layouts, layout organization, styling containers, HTML tutorial, CSS styling, web development, frontend development',
  metaOgTitle: 'HTML DIV Tag: Exploring the Fundamentals of Web Page Layout',
  metaOgUrl: 'https://www.webschooljs.com/html/div',
  metaOgImage: '/images/html-logo.png',
};

const HTMLDiv: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="Div Tags ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
        Div Tags are <b>non-semantic tags</b> and used to <b>wrap any content or any section of a webpage</b> 
        In simple terms, div means <b>division</b>. 
        In the past, for developing a webpage, we needed to divide it (like visually separate it not 
        physically..hahhaha) into small sections(like header or 
        navbar or sidebar or footer) and then we develop those small sections individually by wrapping
        it inside a <b>div</b> tag. <br/>
        Nowadays,
        we have <b>header</b> or <b>footer</b> tags like semantic tags for us to use.<br/><br/>
        But still div tag is the most used tag in html as we need to wrap a lot of block level elements to
        apply css or make it look beautiful as per design, also it is needed to wrap contents even inside a 
        semantic tag..
        You can use as many div tag as you want in any html file or webpage.<br/>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Syntax and Usage :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        To use the <strong>&lt;div&gt;</strong> tag, simply include it in your HTML markup with an opening and closing tag.
        <br/>
        Within the <strong>&lt;div&gt;</strong> tags, you can include any other HTML elements, such as text, images, headings, lists, or even other <strong>&lt;div&gt;</strong> tags. The <strong>&lt;div&gt;</strong> tag acts as a container for these elements, allowing you to group and manipulate them together.
         Here's an example: 
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlDivTagSnippet} />

      {/* Styling with CSS */}
      <Heading
        content="Styling with CSS :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        One of the primary purposes of using <strong>&lt;div&gt;</strong> tags is to apply styling using CSS. You can add class or ID attributes to your <strong>&lt;div&gt;</strong> tags to target them specifically in your CSS stylesheets. This allows you to control the layout, positioning, colors, and other visual aspects of the content within the <strong>&lt;div&gt;</strong>.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlDivPureSnippet} />
      <CodeSnippet content={htmlDivCssSnippet} />

      <Heading
        content="Benefits of Using <div> Tags :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        Using <strong> &lt;div&gt;</strong> tags offers several benefits in web development:
        <br/><br/>

        <strong>1. Structure and Organization :</strong> <strong> &lt;div&gt;</strong> tags help create a well-structured and organized layout for your web page, making it easier to manage and maintain.
        <br/><br/>

        <strong>2. Flexibility and Versatility :</strong> <strong> &lt;div&gt;</strong> tags can be used in various ways, such as creating columns, sidebars, headers, footers, or any other structural element you require.
        <br/><br/>
        
        <strong>3. Separation of Concerns :</strong> By separating content into different <strong> &lt;div&gt;</strong> tags, you can apply targeted styling and functionality without affecting other parts of the page.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Best practices */}
      <Heading
        content="Best practices :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        When working with <strong> &lt;div&gt;</strong> tags, it's important to follow these best practices:
        <br/><br/>
        <strong>Semantic HTML :</strong> Use <strong> &lt;div&gt;</strong> tags judiciously and ensure they are used for non-semantic purposes, such as layout and styling, rather than for structural elements like headings or lists.
        
        <br/><br/>
        <strong>Meaningful Class and ID Names:</strong> Choose descriptive class and ID names for your <strong> &lt;div&gt;</strong> tags, making it easier to understand their purpose and differentiate them in your stylesheets.
        
        <br/><br/>
        <strong>Keep Code Readable:</strong> Maintain proper indentation and formatting to improve code readability, especially when nesting multiple <strong> &lt;div&gt;</strong> tags.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please do not forget that div tags are block level element. And if you
        remember, it has top/bottom/right/left extra margins and paddings by default.<br/>
        <b>FYI ::</b> These extra margins and paddings we need to remove from all block elements and
        then only UI will be consistent and follow css box model, obviously when we go to css.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/html/paragraph" nextLink="/html/span" />
    </Layout>
  );
};

export default HTMLDiv;
