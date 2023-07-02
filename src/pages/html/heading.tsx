import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, htmlHeadingsTagSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

const seo = {
  title: 'HTML Heading Tags',
  metaDescription:
    'Learn how to effectively use HTML heading tags with our comprehensive tutorial. Understand the purpose and hierarchy of heading tags (H1-H6), and how to structure your content using appropriate headings. Discover the impact of heading tags on SEO and accessibility. Level up your HTML skills and create well-organized and semantic web pages with heading tags.',
  metaKeywords:
    'HTML, heading tags, h1, h2, h3, h4, h5, h6, web development, web design, SEO, accessibility, semantic HTML, HTML structure, HTML tutorial, frontend development',
  metaOgTitle:
    'HTML Heading Tags: Structure Your Headings and Contents Effectively',
  metaOgUrl: 'https://jswebschool.com/html/heading',
  metaOgImage: '',
};

const HTMLHeading: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
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
        parentEl="p"
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

      <Heading
        content="Why should we use Heading Tags ?"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-12`}
      />
      <Text
        content={`
        Heading tags serve several purposes in web development.
        <br/><br/>
        <strong>1. Semantic structure :</strong>
        Heading tags give a web page a semantic structure and help search engines and assistive technologies understand the hierarchy and meaning of the content.
        <br/><br/>

        <strong>2. Accessibility :</strong>
        Well-structured headings improve accessibility for users of screen readers and other assistive technologies. Headings make it easier to navigate your page. 
        <br/><br/>
        <strong>3. Visual Styling :</strong> Heading tags also offer default visual styling, allowing web browsers and CSS stylesheets to apply appropriate formatting automatically.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Best Practices"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-12`}
      />

      <Text
        content={`
        It's crucial to use heading tags in accordance with some best practices.
        <br/><br/>
        <strong>1. Sequential orders :</strong>
        Heading tags are used in a sequential manner, beginning with the 
        <strong>&lt;h1&gt;</strong> for
        main title and concluding with subheadings and lower-level headings.
        <br/><br/>
        <strong>2. Don't skip levels :</strong>
        Avoid skipping heading levels (such as from <strong>&lt;h1&gt;</strong> to <strong>&lt;h3&gt;</strong>). It's crucial to have a logical and consistent structure.
        <br/><br/>
       <strong>3. Main heading :</strong> <br/>
       The main subject or page title should be represented by exactly one heading on each page.
        <br/><br/>
        <strong>4. Use descriptive text :</strong>
        Write clear, short headlines that adequately summarize the section's content.  
        
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`By using heading tags correctly, you can improve the structure, accessibility, and styling of your web pages. Headings play a vital role in organizing content and providing a better user experience. Remember to use them appropriately and adhere to best practices for optimal results.<br/><br/>
        <b> 
        Note::</b> <br/>
        Please do not forget that all the headings tag from h1 to h6 are block level element. And if you
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
