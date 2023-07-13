import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import Link from 'next/link';
import {
  PAGES,
  moreAttributesLink,
  htmlTagcodeSnippet,
  htmlElementcodeSnippet,
  idCodeSnippet,
  idNotUniqueSnippet,
  classSnippet,
  hrefSnippet,
  titleSnippet,
  styleAttributeSnippet,
} from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';
import styled from 'styled-components';
import NavigationIcon from '@/components/navigationIcon';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: underline;
`;

const seo = {
  title: 'HTML Tags vs Elements vs attributes',
  metaDescription:
    'Understand the differences between HTML tags, elements, and attributes with our comprehensive tutorial. Learn the role of tags in defining the structure and content of web pages, the purpose of elements as instances of tags, and the use of attributes to provide additional information or modify the behavior of elements. Level up your web development skills and gain a clear understanding of HTML tags, elements, and attributes.',
  metaKeywords:
    'HTML, tags, elements, attributes, web development, web design, HTML structure, HTML syntax, frontend development, HTML tutorial',
  metaOgTitle:
    'HTML Tags vs Elements vs Attributes: Understanding the Fundamentals',
  metaOgUrl: 'https://www.webschooljs.com/html/tags-elements',
  metaOgImage: 'https://www.webschooljs.com/images/html-logo.png',
};

const BlockInlinePage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="HTML Tags vs Elements ?"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content="At this point we were supposed to learn block vs inline vs inline block elements.
        But before anything we need to learn about difference between <b>Html tags and html elements.</b>
        <br/><br/>
        <b>Both are very similar, except one very small difference:: html tags with contents is called html 
        elements.</b> <br/> Now the question arises, what is html tags and how its written ? <br/>
        Html tags as explained previously is the smallest block/unit of html which when repeated one or 
        multiple times, form a whole webpage.

        Now observe HTML tags and HTML elements below.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <Text
        content="Html tag example ::"
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlTagcodeSnippet} />
      <Text
        content={`<br/>
        <b>Note:</b><br/>
        These 5 dots you see inside tags mean nothing or empty spaces. <br/><br/>
        Now tags has an opening and closing, called as opening tag and closing tag. Opening tag
        (&lt;h1&gt;) and closing tag(&lt;/h1&gt;). And between opening and closing tag, we put contents,
        that we display on HTML or on UI.<br/> 
        The way to write it is:: <br/>
        <b>Opening tag: </b> Between two angle brackets we put the name of tag e.g h1 or p (&lt;h1&gt;)<br/>
        <b>Closing tag: </b> Between two angle brackets and forward slash, we put the name of tag 
        e.g h1 or p (&lt;/h1&gt;)
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content="Html Element example ::"
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlElementcodeSnippet} />

      <Text
        content="Now if you see this code snippet and compare this with html tag snippet above, you find that here
        we have content unlike in html tags. So <b>now you understand the difference.</b>"
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* HTML attributes */}
      <Heading
        content="HTML Attributes ?"
        headingType="h5"
        customStyle={tw`underline`}
      />

      <Text
        content="HTML attributes are additional informations or features that an html elements can have.
        <br/>
        Now lets have a look on some basic attributes:<br/>
        <ul>
          <li>id</li>
          <li>class</li>
          <li>href</li>
          <li>title</li>
          <li>style</li>
        </ul>
        <br/>

        Some examples of tags with id attribute::
        "
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      {/* ID attribute */}
      <Heading
        content="ID Attributes"
        headingType="h6"
        customStyle={tw`underline mt-4`}
      />

      <CodeSnippet content={idCodeSnippet} />
      <Text
        content="<br/>ID attribute can be used in any html tag/elements. But please observe that ID attribute
        is very unique and one type of ID can not be repeated in the same HTML file.
        <br/><br/>
        Below is not possible as the ID is not unique. The ID <b>content</b> is there in p tag and 
        div tag too and hence is not unique
        <br/>"
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={idNotUniqueSnippet} />
      <Text
        content="<br/><b>Note::</b><br/>
        Now we put ID in html elements because we want to either manipulate it though javascript or if we 
        want to apply css. Thats the purpose of using ID attribute."
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Class attribute */}
      <Heading
        content="Class Attributes"
        headingType="h6"
        customStyle={tw`underline mt-4`}
      />
      <Text
        content="Class attribute can be used in any html tag/elements. But please observe that class 
        attribute is not unique and one type of class can be repeated in the same HTML file multiple times.
        <br/><br/>
        Some examples of html class attributes::"
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={classSnippet} />

      <Text
        content="<br/><b>Note::</b><br/>
        Please observe that we use <b>class</b> attribute to mostly apply same kind of styles to 
        multiple html elements and sometimes to apply javascript, although very less."
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Href attribute */}
      <Heading
        content="Href Attributes"
        headingType="h6"
        customStyle={tw`underline mt-4`}
      />
      <Text
        content="Href attribute can be used only in anchor tag to move between multiple html files for 
        navigation or to move from current html file to external url.
        <br/>
        Examples of <b>href</b> attributes::"
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={hrefSnippet} />

      {/* Title attribute */}
      <Heading
        content="Title Attributes"
        headingType="h6"
        customStyle={tw`underline mt-4`}
      />
      <Text
        content="Title attribute can be used in any html elements/tags. The purpose of using it is that 
        when you hover over that element (in which you used title attibute), the title value is visible on UI
        or browser. <br/>
        Either you use the same title attribute or different, it does not matter. But keep in mind that 
        you use title attribute to convey some kind of meaning, if you want to use it.
        <br/>
        Examples of <b>title</b> attributes::"
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={titleSnippet} />

      {/* Style attribute */}
      <Heading
        content="Style Attributes ?"
        headingType="h6"
        customStyle={tw`underline mt-4`}
      />

      <Text
        content={`
        This style attribute is used for styling html elements in html file itself, without the need for doing it
        in .css file (which is the preferred way). And we hardly do styling with style attribute. But look at the below example
        how it is used.<br/>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={styleAttributeSnippet} />

      <Text
        content={`<br/>
       Please observe that inside html file, we write styles with single/double quote and each style separated by a semicolon such as 
       color and text-align are separated in h1 above.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content="<br/><b>Note::</b><br/>
        Now html attributes are not at all limited to only these 5 defined above. Its huge and you can study
        more about this in this below link::"
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <StyledLink href={moreAttributesLink} target="_blank">
        More attributes
      </StyledLink>

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon  prevLink="/html/setting-up" nextLink="/html/block-inline" />
    </Layout>
  );
};

export default BlockInlinePage;
