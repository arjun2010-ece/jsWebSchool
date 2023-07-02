import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import {
  PAGES,
  htmlOrderedListSnippet,
  htmlOrderedListSyntaxSnippet,
  htmlUnorderedListSyntaxSnippet,
} from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

const seo = {
  title: 'HTML Unordered / Ordered list',
  metaDescription:
    'Master the creation of unordered and ordered lists in HTML with our comprehensive tutorial. Learn how to use the "ul" and "ol" tags to structure and organize content into bullet-pointed or numbered lists. Explore list item ("li") tags, nested lists, and various attributes for customizing list styles. Level up your web development skills and create well-structured and visually appealing lists with HTML unordered and ordered lists.',
  metaKeywords:
    'HTML, unordered list, ordered list, ul tag, ol tag, li tag, nested lists, list styles, web development, web design, frontend development, HTML tutorial',
  metaOgTitle:
    'HTML Unordered / Ordered List: Structuring and Organizing Content',
  metaOgUrl: 'https://jswebschool.com/html/unordered-ordered',
  metaOgImage: '',
};

const HTMLUnorderedOrderedLists: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="Unordered vs ordered lists ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
        There are two types of lists in HTML : Ordered List and Unordered list.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="ordered lists Tag"
        headingType="h6"
        customStyle={tw`underline`}
      />

      <Text
        content={`
        <b>Ordered list is a collection of items in a particular order.</b> <br/>

        Normally in day to day life we see that orders are given to a collection of items in the below 
        way:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlOrderedListSnippet} />

      <Text
        content={`
        Now we have five ways of giving orders to a list::
         <ul>
            <li>With numbers (type="1")</li>
            <li>With uppercase letters (type="A")</li>
            <li>With lowercase letters  (type="a")</li>
            <li>With uppercase roman numbers (type="I")</li>
            <li>With lowercase roman numbers (type="i")</li>
         </ul>
         <br/>
         Now the way to use it is below::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlOrderedListSyntaxSnippet} />

      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please do not forget that ordered list or ol tag are block level element. And if you
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

      {/* Unordered Lists */}

      <Heading
        content="Unordered lists Tag"
        headingType="h6"
        customStyle={tw`underline`}
      />

      <Text
        content={`
        <b>Unordered list (defined by ul tag) is a collection of items without any order identified by bullets in front
        of list items normally.</b> <br/>

        These unordered lists can be displayed in 4 ways based on the style of list item marker  
        <br/>
        <br/>
        1. <b>disc</b> - it will show bullets in front of list item (default behaviour) <br/>
        2. <b>circle</b> - it will show circle in front of list item <br/>
        3. <b>square</b> - it will show square in front of list item <br/>
        4. <b>none</b> - it will show nothing in front of list item <br/> <br/>

        So the way to use it in html itself is shown below. But keep it in mind, we change this property 
        normally through css but here we are applying css through a style attribute, changing
        <b>list-style-type</b> property to either disc or circle or square or none.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlUnorderedListSyntaxSnippet} />

      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please do not forget that Unordered list or ul tag are block level element. And if you
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

export default HTMLUnorderedOrderedLists;
