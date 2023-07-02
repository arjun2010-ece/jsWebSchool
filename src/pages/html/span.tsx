import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, htmlSpanTagSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

const seo = {
  title: 'span tag',
  metaDescription:
    'Discover the versatility of the HTML "span" tag with our comprehensive tutorial. Learn how to use the "span" tag to apply inline styling, target specific elements, and group inline content. Explore practical examples and best practices for leveraging the power of spans in your HTML code. Level up your web development skills and create customized and fine-grained styling with the HTML "span" tag.',
  metaKeywords:
    'HTML, span tag, inline styling, inline content, inline element, targeting elements, HTML elements, web development, web design, frontend development, HTML tutorial',
  metaOgTitle:
    'HTML Span Tag: Customized Inline Styling and Targeting Elements',
  metaOgUrl: 'https://jswebschool.com/html/span',
  metaOgImage: '',
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
        headingType="h5"
        customStyle={tw`underline mb-4`}
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

      <CodeSnippet content={htmlSpanTagSnippet} />

      <Text
        content={`
        <b> <br/> <br/>
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
    </Layout>
  );
};

export default HTMLSpan;
