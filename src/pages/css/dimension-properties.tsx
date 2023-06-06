import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  widthSnippets,
  minWidthSnippets,
  maxWidthSnippets,
  heightSnippets,
  minHeightSnippets,
  maxHeightSnippets,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const CSSDimensionPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
    >
      <Heading
        content="Dimension Properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
       Dimension means width and height. All the css properties that are used to change widths and heights of html elements
       (block/inline block) are grouped into
       dimension properties group.
       <br/><br/>
        The following properties are grouped into this category are::
        <ol>
          <li>width</li>
          <li>min-width</li>
          <li>max-width</li>
          <li>height</li>
          <li>min-height</li>
          <li>max-height</li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Width */}
      <Heading
        content="Width:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Width properties is used to set the width of a block (or inline block) elements. If you remember, by default it takes the 
        whole width i.e 100% of its parent container or 100% of webpage (meaning it starts from left side of webpage and ends in 
        right side of webpage), so we can limit its width as per our needs.
        <br/>
        2 things to keep in mind:
        <ul>
          <li>If width is set in percentage, it means relative to its parent container(any block element). And if no parent is
          there in html file then its relative to body tag, which is the global parent of all element.</li>
          <li>If width is in px or rem then its not relative and its the exact width from extreme left to that width, element
          exists.</li>
        </ul>
        <br/> 
        Look at the below snippet to see how it is used:
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={widthSnippets} />

      {/* Min Width */}
      <Heading
        content="Min Width:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Min Width properties is used to set the minimum width of a block (or inline block) elements. By default, a block level element 
        is very flexible and takes the whole width. If we squeeze the browser window, the width of block level element will also squeeze
        (reduce). But the min-width property if we set it then it will not allow the element to reduce its width 
        lower than min-width even if we squeeze the browser
        a lot.
        <br/>
        Lets understand it with an example. If we set a min-width of 320px on an h1 element, it means if we squeeze the browser width, 
        the element will squeeze till 320px. But if we squeeze the browser below 320px ex: 300px then the h1 element width will not
        get squeezed or reduced below 
        320px and its width will still be 320px, but there will be an horizontal scroll.<br/>
        If you take the width more than 320px to any width then h1 width will be normal block level width i,e 100%.
        <br/> 
        Look at the below snippet to see how it is used:
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={minWidthSnippets} />

      {/* Max Width */}
      <Heading
        content="Max Width:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Max Width properties is used to set the maximum width of a block (or inline block) elements. By default, a block level element 
        takes the whole available width i.e 100% of its parent or webpage. But we can limit its width by max-width property, meaning
        even if we display our webpage on a very big screen like 2400px , its width will not be default width i.e 100% but the set 
        maximum width.
        <br/>
        Lets understand it with an example. If we set a max-width of 1280px on an h1 element, it means if we see that element in 
        1560px screen, the h1 element will always be 1280px. If we see it on a larger screen of 2400px, its width will still be
        1280px.<br/>
        If you squeeze the screen or see the h1 element in a screen less than 1280px e.g 900px, the block element h1 will take the 100%
        width and it will happen to any lower width as we did not set its min-width in this case.
        Look at the below snippet to see how it is used:<br/>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={maxWidthSnippets} />

      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please note that min-width and max-width are used to control the width property of a block(or inline block) element
         on a small screen(mobile screen, for min-widths) or a larger screen (for max width).
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Height */}
      <Heading
        content="Height:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Height properties is used to set the height of a block (or inline block) elements. If you remember, by default it takes 
         as much height as is its content. 
        <br/>
        3 things to keep in mind:
        <ul>
          <li>Mostly the height of an element is always set in pixel or rem value, if it does not have any parent(not talking
            about body tag in this case)</li>
          <li>We do not use percentage value for height for an element if it does not have any parent, because it does not
          work.</li>
          <li>If the parent container of an element has a height in pixel or rem, then the height of 100% to
          the child element will make its height same as its parent and percentage will work in this case.</li>
        </ul>
        <br/> 
        Look at the below snippet to see how it is used:
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={heightSnippets} />


      {/* Min Height */}
      <Heading
        content="Min Height:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Min Height properties is used to set the minimum height of a block (or inline block) elements. It means, by default the 
        height of the element will be the min-width.
        <br/>
        Lets understand it with an example. If we set a min-height of 80px on an h1 element, it means that on any screen, its height 
        will always be 80px.
        Since we always need to keep responsivity of screen in mind, and responsivity is almost always related with width of screen.
        So, we will not talk about reducing or increasing the height of any screen. 
        <br/> 
        Look at the below snippet to see how it is used:
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={minHeightSnippets} />

         {/* Max Height */}
         <Heading
        content="Max Height:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Max Height properties is used to set the maximum height of a block (or inline block) elements. It means, by default the 
        height of the element will always be its content height but if the content is too much and its height exceeds the
        max height then content will overflow and then we need to apply overflow property of css as <b>overflow: scroll</b> or <b>
        overflowY: scroll</b>  to create a scrollbar so that all its contents will always be inside its max height.
        <br/>
        The two property is always used together:: <b>max height</b> and <b>overflow</b>. But this max-height property is rarely used.
        <br/> 
        Look at the below snippet to see how it is used:
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={maxHeightSnippets} />
    </Layout>
  );
};

export default CSSDimensionPropertiesPage;
