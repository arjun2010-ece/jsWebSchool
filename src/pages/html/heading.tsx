import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, htmlHeadingsTagSnippet } from '@/utils';
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
        content="Heading Tags ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
        Heading Tags are <b>semantic tags</b> and used to wrap heading or subheading of a webpage as well 
        as heading of a section or sub-section or a paragraph or literally any contents that needs 
        heading/subheading.
        <br/><br/>
        Based on priority, like for heading of a webpage, we will use <b>h1</b> tag.
        Normally we have only one <b>h1</b> tag in a webpage. Then sub-headings can be wrapped with
        <b>h2</b> tags. Then inside sub-headings, we can have many sections or articles, where we could use
        any of <b>h3</b> or <b>h4</b> or <b>h5</b> or <b>h6</b>
        tags. <br/>
        If you have many <b>headings or nested headings</b>, then based on priority, you could arrange 
        your headings. <b>h1</b> tag has highest fontsize around 40px and as we go from <b>h1</b> tag to
        <b>h6</b> tag, fontsize will be smaller and so is the heading.<br/><br/>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <Heading content="Heading 1" headingType="h1" />
      <Heading content="Heading 2" headingType="h2" />
      <Heading content="Heading 3" headingType="h3" />
      <Heading content="Heading 4" headingType="h4" />
      <Heading content="Heading 5" headingType="h5" />
      <Heading content="Heading 6" headingType="h6" />

      <CodeSnippet content={htmlHeadingsTagSnippet} />

      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please do not forget that all the headings tag from h1 to h6 are block level element. And if you
        remember, it has top/bottom/right/left extra margins and paddings by default.<br/>
        <b>FYI ::</b> These extra margings and paddings we need to remove from all block elements and
        then only UI will be consistent and follow css box model, obviously when we go to css.
        
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
    </Layout>
  );
};

export default HTMLHeading;
