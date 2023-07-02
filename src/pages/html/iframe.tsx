import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, iframeTagSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

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
        Iframe is an html tag than can load other html files/pages in the same document.
        Normally we can use this tag to embed video (the most popular use), advertisement, google maps, 
        etc.
        <br/><br/>
        The way to use this is::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={iframeTagSnippet} />
      {/* <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please do not forget that paragraph or para or p tags are block level element. And if you
        remember, it has top/bottom/right/left extra margins and paddings by default.<br/>
        <b>FYI ::</b> These extra margins and paddings we need to remove from all block elements and
        then only UI will be consistent and follow css box model, obviously when we go to css.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      /> */}
    </Layout>
  );
};

export default HTMLIframe;
