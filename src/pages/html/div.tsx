import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, htmlDivTagSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

const HTMLDiv: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
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
        You can use as many div tag as you want in any html file or webpage.<br/><br/>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlDivTagSnippet} />

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
    </Layout>
  );
};

export default HTMLDiv;
