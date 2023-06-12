import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';

const CSSPositioningPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
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
         Relative position, when applied on an element moves the element from its current position.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />


      {/* Margin
      <Heading
        content="Margin:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        Margin is the space between an html element and its neighbours. As such it does not contribute much in box model, but we
        study this in this category as this property is very similar to padding that we will study next.
        <br/>
        Margin is made up of 4 properties i.e  <b>margin-top, margin-bottom, margin-right, margin-left </b> representing top/bottom/
        right/left space between the html element and its neightbour.
        <br/> <br/> 
        There are 4 ways of writing margin as shown in this snippet, also look at some of the diagram of margin for easy visualization
         here,
        <a href="/images/margin-image.jpg" target="__blank">Look the image  </a>::
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={marginSnippets} /> */}
    </Layout>
  );
};

export default CSSPositioningPropertiesPage;
