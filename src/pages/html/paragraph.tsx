import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, htmlParaTagSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

const HTMLHeading: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
    >
      <Heading
        content="Paragraph Tags ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
        Paragraph or p Tags are <b>semantic tags</b> and used to <b>wrap contents of a webpage</b> or simply a 
        paragraph of content. Here paragraph means the same as paragraph in english language.<br/>
        You can use as many p tag as you want in any html file or webpage.<br/><br/>
        By default font sizes will be smaller, obviously we can increase it by css.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlParaTagSnippet} />

      <Text
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
      />
    </Layout>
  );
};

export default HTMLHeading;