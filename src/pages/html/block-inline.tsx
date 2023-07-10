import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import ResponsiveImage from '@/components/responsive-image';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Block vs Inline block vs Inline',
  metaDescription:
    'Learn the differences and best use cases for HTML display properties: block, inline block, and inline. Understand how these properties affect the layout and behavior of elements on your webpage. Discover when to choose each display property to create visually appealing and responsive designs.',
  metaKeywords:
    'HTML tutorial, block display, inline block, inline display, CSS, web development, web design, layout properties, responsive design, HTML, CSS, Block, Inline-block, Inline, display properties, layout, CSS tutorial, web development, frontend development, CSS comparison',
  metaOgTitle:
    'Mastering HTML Display Properties: Block vs Inline Block vs Inline',
  metaOgUrl: 'https://www.webschooljs.com/html/block-inline',
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
        content="Block vs Inline block vs inline Elements"
        headingType="h1"
        customStyle={tw`mb-4`}
      />
      <Text
        content="
         Now this one is the most import topic, if you miss this or did not understand it properly, then 
         you will not be able to write css properly or for writing better css, you need to remember this well.
         So you got the message.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Block elements */}
      <Heading
        content="Block elements"
        headingType="h6"
        customStyle={tw`underline my-4`}
      />
      <Text
        content="
        <b>Block elements</b> are those html tags/elements which occupies whole space from left side of webpage to
         to the right side of webpage horizontally. <br/>
         Normally, block level elements are like rectangles.
         More than one block elements if side by side present, by default are stacked vertically 
         (you can change this by applying css obviously).
         Every block elements always starts on a new line.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image */}
      <ResponsiveImage
        srcUrl="/images/block_elements.jpg"
        altText="Block elements"
      />

      <Text
        content="<br/>
        <b>Note:: <br/></b>
        <b>If the images is not clear, kindly make a right click on image and open it in new tab for more 
        clarity</b>.<br/> Look at this above diagram, on a webpage, 2 block level elements sits vertically and 
        takes whole horizontal spaces or width.
        More than that it has below properties::
        <ul>
            <li>By default it takes full width but we can set its width and height property in css.</li>
            <li>We can set its right, left, top, bottom margins and paddings properties in css.</li>
        </ul>
        <b>Examples</b>:: All semantic tags(header, footer, nav, main, section, aside, article), div, p, ul, ol, li, h1,h2
        h3...h6 <br/><br/>
        <b>Note::</b><br/>
        If you do not know how to identify an html tag as block element or not then simply put a border property
        on that html element as <b>border: 1px solid black</b> and observe whether it starts from left side and goes
        to extreme right covering whole row or width or not. It it does then its block element.
        <br/>
        <b>You need to remember these features if you want to master css otherwise you will be stuck.</b>
        "
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Inline elements */}
      <Heading
        content="Inline elements"
        headingType="h6"
        customStyle={tw`underline my-4`}
      />
      <Text
        content="
        <b>Inline elements</b> are those html tags/elements which occupies only as much space as is its content. <br/>
         More than one inline elements normally sit side by side on the same line. 
         (you can change this by applying css obviously).
         If one block element and one inline elements are present then Block element will start on a new line.
         And once it finishes then inline element will start on another line as block elements by default takes
         whole line or horizontal row.
         And interestingly an inline element can exists inside a block level elements.<br/>
         Please observe the whole diagram for a lot of combination of cases for understanding better.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image */}
      <ResponsiveImage
        srcUrl="/images/inline_elements.jpg"
        altText="Inline elements"
        boxHeight="400px"
      />

      <Text
        content="<br/>
        <b>Note:: <br/></b>
        <b>If the images is not clear, kindly make a right click on image and open it in new tab for more 
        clarity</b>.<br/><br/>
        Please observe that even when there is a space in the same line or row as inline element, block 
        element if present will always start on a new line.<br/>
        More than that its most important other features are:
        <ul>
            <li>we can never set its width and height property in css. If we change it to block by
            <b>display:block</b> css property then we can set its width and height. But then again it will
             no 
            longer be an inline element and will be changed to block with that css property.</li>
            <li>We can always set its right and left margins and paddings properties in css but never its 
            top and bottom margins and paddings.</li>
        </ul>
        <b>Note::</b><br/>
        <b>You need to remember these features if you want to master css otherwise you will be stuck.</b>

        <br/><br/>
        <b>Examples::</b> span, anchor tag, strong tag, em tag, b tag etc.
        "
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Inline-block elements */}
      <Heading
        content="Inline-block elements"
        headingType="h6"
        customStyle={tw`underline my-4`}
      />
      <Text
        content="We have the best of both the worlds i.e inline-block element which has properties from
        inline as well as block elements.<br/>
        <b>Inline-block elements</b> are those html tags/elements which occupies only as much space as is 
        its content (property coming from inline elements) plus we can set its width and height and all 
        its margins and paddings (property coming from block level elements). <br/>
         More than one inline-block elements normally sit side by side on the same line. 
         (you can change this by applying css obviously).
         <br/>
         <b>Examples::</b> img tag.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content="<b>Note::</b><br/>
        This topic is so important that you can not learn css without knowing this thing by heart.
        Most importantly, you need to remember how these 3 elements behave as well as whether
        width and height can be set in which element and margin and paddings (which side of margin and padding 
        works) can be set or not. I hope you got the message. <br/> <br/>
        <b>Almost all the HTML tags mostly 90% are block level elements, 7-8% inline and 1% is inline-block 
        elements.</b>
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        nextLink="/html/semantic-tags"
        prevLink="/html/tags-elements"
      />
    </Layout>
  );
};

export default BlockInlinePage;
