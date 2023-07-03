import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, iframeSimpleTagSnippet, iframeTagSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Html iframe tags',
  metaDescription:
    'Learn how to effectively use HTML iframe tags to embed external content in your web pages. Our comprehensive tutorial covers the syntax, attributes, and best practices for using iframes. Discover how to embed videos, maps, documents, and more. Enhance your web development skills and create interactive and engaging web pages with HTML iframes.',
  metaKeywords:
    'HTML, iframe tags, embedding content, web development, web design, videos, maps, documents, interactive web pages, HTML tutorial, frontend development',
  metaOgTitle: 'HTML iframe Tags: Embed External Content in Your Web Pages',
  metaOgUrl: 'https://jswebschool.com/html/iframe',
  metaOgImage: '',
};

const HTMLIframe: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="iframe Tags ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
        Iframe is an html tag than can load other html files/pages in the same document. It stands for inline frame.
        Normally we can use this tag to embed video (the most popular use), advertisement, google maps, 
        etc.
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
        To use the <strong>&lt;iframe&gt;</strong> tag, you need to specify the source URL of the content you want to embed. Here's an example:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={iframeSimpleTagSnippet} />

      <Text
        content={`<br/>
        You can also adjust the width and height attributes of the <strong>&lt;iframe&gt;</strong> tag to control the size of the embedded content:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={iframeTagSnippet} />

      {/* Security Considerations */}
      <Heading
        content="Security Considerations :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-12`}
      />

      <Text
        content={`
        When using the <strong>&lt;iframe&gt;</strong> tag, it's important to consider security implications, especially when embedding content from external sources. Cross-site scripting (XSS) attacks and other security vulnerabilities can arise if the embedded content is not trusted. Make sure to only embed content from reliable sources and consider implementing content security policies to mitigate security risks.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsiveness and Accessibility */}
      <Heading
        content="Responsiveness and Accessibility :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-12`}
      />

      <Text
        content={`
        To ensure a responsive design, you can use CSS media queries and percentage-based widths for the <strong>&lt;iframe&gt;</strong> tag. This allows the embedded content to adapt and resize based on the user's device or screen size.
        <br/><br/>
        It's also important to consider accessibility when using iframes. Provide alternative content or text descriptions for the embedded content so that users with disabilities can understand and interact with the page effectively.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Best Practices */}
      <Heading
        content="Best Practices :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-12`}
      />

      <Text
        content={`
        When working with <strong>&lt;iframe&gt;</strong> tags, keep the following best practices in mind:
        <br/><br/>
        
        <strong>1. Choose Trusted Sources:</strong> Only embed content from trusted sources to mitigate security risks.
        <br/><br/>
        <strong>2. Set Appropriate Dimensions:</strong> Set width and height attributes to provide optimal dimensions for the embedded content.
        <br/><br/>
        <strong>3. Consider Accessibility:</strong> Include alternative content or text descriptions for the iframe to ensure accessibility.
        <br/><br/>
        <strong>4. Optimize for Responsiveness:</strong> Use CSS techniques, such as media queries, to make the embedded content responsive across different devices and screen sizes.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        The <strong>&lt;iframe&gt;</strong> tag is a powerful tool for embedding external content within your web pages. By using it responsibly and following best practices, you can enhance your website's functionality, incorporate multimedia elements, and provide a seamless user experience.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/html/tables" nextLink="/html/form-elements" />
    </Layout>
  );
};

export default HTMLIframe;
