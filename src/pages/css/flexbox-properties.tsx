import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  flexGapSnippet,
  flexGrowSnippet,
  flexShrinkSnippet,
  flexSnippet,
  negativeOrdersSnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import ResponsiveImage from '@/components/responsive-image';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'CSS Flexbox properties',
  metaDescription:
    'Learn how to create flexible and responsive layouts with CSS Flexbox properties. This comprehensive tutorial covers the key concepts of Flexbox, including container and item properties, enabling you to build dynamic and adaptive web designs.',
  metaKeywords:
    'CSS tutorial, Flexbox properties, responsive layouts, web design, front-end development, CSS styling, flexible containers,  flex containers, flex items, flex-direction, justify-content, align-items, gap, row-gap, column-gap, flex-wrap, align-self,order, flex-grow, flex-shrink, flex, adaptive designs',
  metaOgTitle:
    'CSS Flexbox Properties Tutorial: Building Dynamic and Responsive Web Layouts',
  metaOgUrl: 'https://www.webschooljs.com/css/flexbox-properties',
  metaOgImage: '/images/css-logo.jpeg',
};

const CSSFlexboxPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Flexbox Properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Flexbox is a <b>layout system</b> very much like grid system (going to study next).<br/>
        It is one directional at a time, either horizontal or vertical but not both together.
        Layout system means how will you lay various html elements on a webpage to make it look beautiful
        and look like your design.
        <br/>
        <b>In flexbox system, we have  a flex parent (or container) and flex childs. By applying
        few properties on flex parent, we control how the child will lay on html page.</b> 
        <br/><br/>
        <blockquote>
        Once we apply <span style="border: 1px solid black;" class="px-1">display: flex</span> on a
        parent element, then all its child becomes flex child and then we can control its child
        through some flex properties, defined below
        </blockquote>
        <br/>
        And these properties are applied on its  <b>parent itself</b>. <br/>
        The most common properties always used are: <b>flex-direction</b>,
         <b>justify-content</b> and <b>align-items</b> property. <br/><br/>
         By default when we apply <span style="border: 1px solid black;" class="px-1">display: flex</span> on
         a parent, a default <span style="border: 1px solid black;" class="px-1">flex-direction: row</span> is
         also applied by browser, meaning that all the flex child should be placed horizontally or in x-axis.
         
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Flex direction */}
      <Heading
        content="Flex direction :"
        headingType="h6"
        customStyle={tw`mb-4 underline`}
      />

      <Text
        content={`
         <b>flex-direction</b> property is responsible for placing the flex childs either horizontally 
         (or horizontal reverse)
         or vertically (or vertically reverse). Its possible values are : <b>row </b>(horizontally), 
         <b>column</b> (vetical), <b>row-reverse </b> (horizontal reverse), 
         <b>column-reverse</b> (vertical reverse).<br/>
         In the below image, <b>row</b> is the default value so elements will layout from left to right.
         <b>row-reverse</b> is exactly opposite of <b>row</b>, meaning elements will layout from right to left.
         Same goes for <b>column</b> and <b>column-reverse</b> but in vertical direction.
         <b>column</b> will layout elements from top to bottom while <b>column-reverse</b> will layout 
         elements from bottom to top.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image Flex direction */}
      <ResponsiveImage
        srcUrl="/images/flex-direction.jpg"
        altText="Flex direction"
        boxHeight="400px"
      />

      {/* Justify content */}
      <Heading
        content="Justify content :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline `}
      />

      <Text
        content={`
         <b>justify-content</b> property is responsible for laying the flex child in different ways on main-axis.
         If <b>flex-direction: row</b>, then main-axis is horizontal axis.
         If <b>flex-direction: column</b>, then main-axis is vertical axis.
         <br/>
         Its possible values are : <b>space-between</b>, <b>space-around</b>, <b>space-evenly</b>,
         <b>center</b>, <b>flex-start</b> and <b>flex-end</b> (placed in order of mostly used to least 
          used).
        <br/><br/>
         In the below image, <b>flex-start</b> is the default value so elements will layout on main axis
         side by side on left side. <br/> <b>space-between</b> is the most used value meaning all the child elements will have
         <b>equal space between them</b> and first & last element will go to each extreme corner of its parent and
         remaining child will sit at equal space from each corner.
         <br/> <b>space-around</b> is the second most used value meaning all the child elements will have
         <b>equal space in front and back of child element</b>. In the below image, each arrow represents equal space in
         the front and back of child element.
         <br/> <b>space-evenly</b> is used sometimes and it means all the child elements will have
         equal space <b>around child element</b>. In the below image, each arrow represents equal space around
          child element.
          <br/> <b>center</b> is also most used value and it means all the child elements will move to center
          of its parent element.
          <br/> <b>flex-end</b> is rarely used value and it means all the child elements will move to right side
          of its parent element.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      {/* Responsive image justify-content */}
      <ResponsiveImage
        srcUrl="/images/justify-content.jpg"
        altText="justify content"
        boxHeight="550px"
        hideBorders
        removeTopSpace
      />

      {/* Align items */}
      <Heading
        content="Align items :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline `}
      />

      <Text
        content={`<b>align-items</b> property is responsible for laying the flex child in different ways on cross-axis.
         If <b>flex-direction: row</b>, then main-axis is horizontal axis and cross-axis is vertical axis.
         If <b>flex-direction: column</b>, then main-axis is vertical axis and cross-axis is horizontal axis.
         <br/>
         Its possible values are : 
         <b>center</b>, <b>flex-start</b>, <b>flex-end</b>, <b>stretch</b> and <b>baseline</b> (placed 
          in order of mostly used to least used).
          <br/>
        In the below image, <b>normal</b> is the default value so elements will layout as it is. <br/> 
        <b>center</b> is the most used value meaning all the 
         child elements will sit at the center of cross axis. <br/>
         <b>stretch</b> is also the most used value meaning all the 
         child elements will stretch to a value equal to the whole height of its parent.
         <b>flex-start</b> is sometimes used meaning all the 
         child elements will sit at the top edge of its parent (considering a box has right, left, top and bottom).
         <b>flex-end</b> is sometimes used meaning all the 
         child elements will sit at the bottom edge of its parent (considering a box has right, left, top 
          and bottom).<br/>
          Please note that the above flex-start & flex-end value will behave like that for flex-direction: row
          scenario, if it is column then flex-start and flex-end will mean left edge and right edge of the box.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image align items */}
      <ResponsiveImage
        srcUrl="/images/align-items.jpg"
        altText="align items"
        boxHeight="500px"
        hideBorders
        removeTopSpace
      />

      {/* Gap */}
      <Heading
        content="Gap, Row gap, Column gap :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline `}
      />

      <Text
        content={`<b>gap</b> property is the combination of row-gap and column-gap property.
        row-gap is the space between flex childs in 2 rows and column-gap is the space between flex childs 
        in 2 columns. An example can be seen here : <a href="/images/flex-gaps.jpg" target="__blank">flex gaps</a>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={flexGapSnippet} />

      {/* Flex wrap */}
      <Heading
        content="Flex wrap :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline `}
      />

      <Text
        content={`<b>flex-wrap</b> property decides if the flex childs will wrap and break into
        next row when the available width of flex parent decreases or on small width screen.
        <i>This property is very useful, if not set then it will create a horizontal scrollbar,
        which is a bad sign</i> .
        The way to use is : <span class="px-2" style="border: 1px solid black" >flex-wrap: wrap</span>.
        An example can be seen here : <a href="/images/flex-wrap.jpg" target="__blank">flex wrap</a>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Child properties items */}
      <Heading
        content="Properties applied on flex child element :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline `}
      />

      <Text
        content={`
        All the properties used above are applied on flex parents, but very less number of properties
        are dedicated on flex child elements.<br/> <br/>
        <blockquote>
          Think of it as we can apply a common property on all child elements consistently,
          but what if we need to apply a little different styling on some specific flex child elements.
        </blockquote>
        <br/>
        These properties are : <b>align-self</b>, <b>order</b>, <b>flex-grow</b>, <b>flex-shrink</b>
        and <b>flex</b>.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Align Self  */}
      <Heading
        content="Align Self :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        <b>align-self</b> is the most commonly used property on a specific (not all) flex child to override the 
        applied <b>align-items</b> property on a parent.<br/>
        <b>align-items</b> applies the same property on all the child elements and align-self override it
        on specific flex child.
        <br/> <br/>
        The possible values are : <b>flex-start</b>, <b>flex-end</b>, <b>center</b>,
        <b>baseline</b> and <b>stretch</b> (all the properties are same as <i>align-items, so i will not 
          explain here</i>)
          <br/><br/>
          Please have a look at this below image, where <i>align-items : stretch</i> is applied on all flex child
          but on 3rd flex child, we have applied a <i>align-self: center</i>.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image align self */}
      <ResponsiveImage
        srcUrl="/images/align-self-1.jpg"
        altText="align self"
        boxHeight="300px"
        hideBorders
        removeTopSpace
      />

      {/* Order  */}
      <Heading
        content="Order :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        <b>order</b> is the property by which we can change the order of flex childs appearance.
        Meaning we can move the second child and make it the last element in the flex container or make
        it any element, may be first or third or anything.
        <br/> <br/>
        The way to use is that flex childs are ordered relative to each other. If you want to make
        drastic changes in the placement of flex childs then, you need to apply <b>order</b> property
        on different childs.
        Please observe the two images, one is default ordering:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      {/* Responsive image order */}
      <ResponsiveImage
        srcUrl="/images/default-order.jpg"
        altText="order"
        hideBorders
        removeTopSpace
      />

      <Text
        content={`
        And the other is change by order property.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image order */}
      <ResponsiveImage
        srcUrl="/images/order-1.jpg"
        altText="order"
        hideBorders
        removeTopSpace
      />

      <Text
        content={`
        If you use <b>order</b> on only one element/child, then it will take only 2 possible values i.e   
         -1 (make it the first element) or 1 (make it the last element).
        <br/>
        So there is 2 system of using it, one is <b>Minus one system</b> and other is <b>Plus 1 system</b>, which means either
        we use -1, -2, -3, -4, etc for putting the order or we use 1, 2, 3, 4, etc for putting the order.
        <br/><br/>
        Now imagine we have a code snippet like this :: 
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={negativeOrdersSnippet} />

      <Text
        content={`<br/> 
       Now imagine we use an <i>order</i> value of 1 in para element(whose class is "c"), then it is moved
       in the last and becomes the last child. Have a look at this picture::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image order */}
      <ResponsiveImage
        srcUrl="/images/order-first.jpg"
        altText="order"
        hideBorders
        removeTopSpace
      />

      <Text
        content={`<br/> 
       Now, if we want to make the second para element (whose class is "b") as the last element,
       then we use <i> order: 2 </i>. Same goes for  para element whose class is "e".
       Please notice that putting order as 2 will make it the second element with respect to the element
       whose order is set as 1 and so order 3 will make it 3rd element with respect to 
       the element whose order is set as 1. <br/>
       Have a look at this picture::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image order */}
      <ResponsiveImage
        srcUrl="/images/order-second.jpg"
        altText="order"
        hideBorders
        removeTopSpace
      />

      <Text
        content={`<br/> 
      Same goes for Minus one system, where <i>order: -1</i> on a child, will
      make it the first element. And then if we put <i>order: -2</i> or -3 or any negative number,
      then it will become second or third element with respect to the first element
      but<b> on a negative axis meaning from right to left, e.g -3, -2, -1 etc</b>.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Flex Grow  */}
      <Heading
        content="Flex Grow :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={` 
          <b>flex-grow</b> is a property which allows a flex child to take as much remaining space as is
          available in parent container.<br/>
          If <span style="border: 1px solid black;" class="px-2">flex-grow: 1</span> on all flex childs, 
          then all the elements will occupy same space in parent container. 
          If <span style="border: 1px solid black;" class="px-2">flex-grow: 2</span> or 3 or 4 etc,
           on a specific flex child, 
          then that element will occupy  2 times or 3 times or 4 times the space available (compared to other
            child) in parent 
          container. 
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={flexGrowSnippet} />

      {/* Flex Shrink  */}
      <Heading
        content="Flex Shrink :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={` 
          <b>flex-shrink</b> is a property which allows a flex child to shrink if possible in parent 
          container.<br/>
          If <span style="border: 1px solid black;" class="px-2">flex-shrink: 1</span> on all flex childs, 
          then all the elements will occupy minimum space in parent container. 
          If <span style="border: 1px solid black;" class="px-2">flex-shrink: 2</span> or 3 or 4 etc,
           on a specific flex child, 
          then that element will shrink  2 times or 3 times or 4 times compared to other
            child in parent 
          container. <br/><br/>
          <b>Default value of flex-grow and flex-shrink is 0.</b>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={flexShrinkSnippet} />

      {/* Flex   */}
      <Heading
        content="Flex :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={` 
          <b>flex</b> is a property which is a combination of 3 properties such as 
          <b>flex-grow</b>, <b>flex-shrink</b> and <b>flex-basis</b>
          <br/>
          In short, flex-basis decides the default size or width of an flex child.
          <br/><br/>
          The default value of  flex is : <span style="border: 1px solid black;" class="px-2">flex: 0 1 auto</span>,
          meaning flex-grow is 0, meaning never grow even if space is available inside parent.
          flex-shrink is 1 meaning inside the flex container, always occupy the minimum space available.
          And flex-basis is auto meaning the flex child will have its width and size decided by its content.
          <i>It is recommended to use <b>flex</b> property only and not a separate flex-grow, flex-shrink or
          flex-basis property.</i><br/><br/>
          There are 3 famous use case of <b>flex</b> property.
          <ul>
            <li>When you want any flex child or sidebar for example to be of always fixed width(400px),
            never grow, never shrink and
            irrespective of the screen size, then we use 
            <span style="border: 1px solid black;" class="px-2">flex: 0 0 400px</span>
            </li>
            <li>When you want any flex child or sidebar for example to be of width(300px) minimum
            and 400px maximum,
           then we use 
            <span style="border: 1px solid black;" class="px-2">flex: 0 0 400px</span> and
            <span style="border: 1px solid black;" class="px-2">min-width: 300px;</span> and
            <span style="border: 1px solid black;" class="px-2">max-width: 400px;</span> 
            </li>

            <li>When you want any flex child or content section for example to be of 
            variable width meaning taking all the available space inside parent,
            irrespective of the screen size, then we use 
            <span style="border: 1px solid black;" class="px-2">flex: 1</span> and 
            <span style="border: 1px solid black;" class="px-2">overflow-x: auto</span>.
            The overflow property ensures that if there is more content then there will be a horizontal sidebar
            to accomodate that but its total width will never go more than its parent. 
            </li>
          </ul>

          <br/>
          The below snippet is an example of a 3 column layout with sidebar, content and another sidebar forming
          the 3 columns and the usage of flex property too.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={flexSnippet} />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/css/background-border-properties"
        nextLink="/css/grid-properties"
      />
    </Layout>
  );
};

export default CSSFlexboxPropertiesPage;
