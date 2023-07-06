import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  defaultAbsoluteSnippet,
  fixedsnippet,
  relativeNotAppliedSnippet,
  relativetAppliedSnippet,
  specialRelAbsnippet,
  stickySnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'CSS Positioning properties',
  metaDescription:
    'Master the CSS positioning properties and gain full control over element placement in HTML. This tutorial covers the different positioning techniques, including static, relative, absolute, and fixed positioning, empowering you to create complex and responsive layouts for your web pages.',
  metaKeywords:
    'CSS tutorial, positioning properties, HTML styling, web design, front-end development, element placement, static positioning, relative positioning, absolute positioning, fixed positioning, sticky positioning',
  metaOgTitle:
    'CSS Positioning Properties Tutorial: Mastering Element Placement in HTML',
  metaOgUrl: 'https://www.webschooljs.com/css/positioning-properties',
  metaOgImage: '/images/css-logo.jpeg',
};

const CSSPositioningPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Positioning Properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
       Before understanding positioning properties, we need to understand the concept of normal flow of elements in a webpage.
       It is top down flow or a stack like flow but downwards. Here is an image to understand this::
       <a href="/images/normal-flow-image.jpg" target="__blank">Look at the image  </a>.
       <br/><br/>
       Now by looking at the above image you understood, how the html elements are laid out on a webpage.
       Now positioning is what takes the element (on which it is applied) out of this top down or stack like flow and
       places it in front or on backside of the above element. Look at the below image to understand, how elements look,
       when positioning is applied on this:
       <a href="/images/positioning-image.jpg" target="__blank">Look at the image  </a>. In this image the html element is taken out of normal
       flow and kept in front of all other elements.<br/><br/>
        There are different positioning properties for different purposes and usage and are grouped into this category are::
        <ol>
          <li>Static</li>
          <li>Relative</li>
          <li>Absolute</li>
          <li>Fixed</li>
          <li>Sticky</li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Static position */}
      <Heading
        content="Static position:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        If we have not applied any css position property, then the default position property on all html elements
        is static position that makes the element flow in a stack like flow. If we specify position static then also, it
        will not make any changes on html document flow.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Relative position */}
      <Heading
        content="Relative position:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
         Relative position, when applied on an element <b>moves the element from its current position</b> 
         and makes it out of normal document flow (of stack like flow) and places the element on top of
         other normal elements. And the element below it in normal flow does not get moved at all if
         positioned element is moved but get possibly overlapped(or not depending on top/bottom/right/left
          values).<br/><br/>
          Possible attributes of <b>absolute position</b> are ::<br/>
         <b>top</b> value moves the element from its current position by that much value pushing 
        towards bottom (here 2 rem).<br/>

         <b>bottom</b> value moves the element from its current position by that much value pushing
         towards top.<br/>

         <b>right</b> value moves the element from its current position by that much value pushing 
        towards right.<br/>

         <b>left</b> value moves the element from its current position by that much value pushing 
        towards left.<br/>

          A snippet of html css in normal flow looks like this and just 
           have a look at this 
           <a href="/images/normal-flow.jpg" target="__blank">resultant UI</a>
          ::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={relativeNotAppliedSnippet} />

      <Text
        content={`<br/>
         Now, upon applying a position relative on <b>h1</b> element, it will be pushed below
         from its position on <b>p</b> element.
          A snippet of css in relative position looks like this and just 
           have a look at this 
           <a href="/images/relative-position.jpg" target="__blank">resultant UI</a>
          ::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={relativetAppliedSnippet} />

      <Text
        content={`<br/>
          Hope you learned <i>relative</i> positioning well.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Absolute position */}
      <Heading
        content="Absolute position:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Absolute position, when applied on an element <b>moves the element from normal document flow in such a 
        way that by default it places it on top left of viewport. And the element below it changes its position
        and also moves up to take the place of positioned element as if it was the first element.</b>
        <br/>
        Possible attributes of <b>absolute position</b> are ::<br/>
         <b>top</b> value moves the element from its current position by that much value pushing 
        towards bottom (here 2 rem).<br/>

         <b>bottom</b> value moves the element from its current position by that much value pushing
         towards top.<br/>

         <b>right</b> value moves the element from its current position by that much value pushing 
        towards right.<br/>

         <b>left</b> value moves the element from its current position by that much value pushing 
        towards left.<br/>
        
        A snippet of css in position absolute looks like this and just 
        have a look at this 
        <a href="/images/default-absolute.jpg" target="__blank">resultant UI</a>
          ::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={defaultAbsoluteSnippet} />

      <Text
        content={`<br/>
          <b>Please note that with absolute position you can place any html element anywhere on
          a webpage but always with respect to the browser and it is very special</b>.
          Another <b>popular</b> usecase of absolute position is with respect to relative position
          which we will discuss in below section.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* special case of relative and absolute position */}

      <Heading
        content="Special case of relative and absolute position:"
        headingType="h6"
        customStyle={tw`underline mt-8 mb-4`}
      />

      <Text
        content={`Whenever we want to position an element inside  another element not with respect to
        viewport then we use a combination of relative and absolute position.<br/>
        So the trick is : 
        <i>relative position is applied to a parent and absolute position is applied to child
        element.</i> and child element will always rotate inside the parent container.
        Have a look at this
        <a href="/images/special-case.jpg" target="__blank">resultant image</a>::
        <br/>
        <br/>
        A very simple snippet looks like this:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={specialRelAbsnippet} />

      {/* Fixed Position */}
      <Heading
        content="Fixed Position:"
        headingType="h6"
        customStyle={tw`underline mt-8 mt-4`}
      />

      <Text
        content={`Position fixed when applied will make the element fixed on the browser and even when we 
        scroll the webpage, it will still be on the same place on the webpage always visible.
        <br/>
        <br/>

        Possible attributes of <b>fixed position</b> are ::<br/>
        <b>top</b> value moves the element from its current position by that much value pushing 
       towards bottom (here 2 rem).<br/>

        <b>bottom</b> value moves the element from its current position by that much value pushing
        towards top.<br/>

        <b>right</b> value moves the element from its current position by that much value pushing 
       towards right.<br/>

        <b>left</b> value moves the element from its current position by that much value pushing 
       towards left.<br/>
      
        A very simple snippet looks like this:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={fixedsnippet} />

      <Text
        content={`<br/>
        <i>
        Also remember that special case of relative and absolute work the same way if we replace
        relative with fixed position and keep child as absolute. Then absolute will rotate inside
        fixed parent element.
        </i>
        <br/>
        <b>Please not that that when we want some element to be always fixed with respect
        to viewport then we use this positioning.</b>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Sticky Position */}
      <Heading
        content="Sticky Position:"
        headingType="h6"
        customStyle={tw`underline mt-8 mt-4`}
      />

      <Text
        content={`Position sticky when applied will make the element scroll on the browser until the top/bottom
        /right/left value and then stick on the browser. All the other element is scrollable except
        this sticky positioned element.
        <br/>
        <br/>

        Possible attributes of <b>sticky position</b> are ::<br/>
        <b>top</b> value moves the element from its current position by that much value pushing 
       towards bottom (here 2 rem).<br/>

        <b>bottom</b> value moves the element from its current position by that much value pushing
        towards top.<br/>

        <b>right</b> value moves the element from its current position by that much value pushing 
       towards right.<br/>

        <b>left</b> value moves the element from its current position by that much value pushing 
       towards left.<br/>
      
        A very good use case with a simple snippet looks like this:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={stickySnippet} />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/css/box-model-properties"
        nextLink="/css/display-visibility-properties"
      />
    </Layout>
  );
};

export default CSSPositioningPropertiesPage;
