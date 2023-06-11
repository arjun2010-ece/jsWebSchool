import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, displaySnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import ResponsiveImage from '@/components/responsive-image';

const CSSDisplayAndVisibilityPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
    >
      <Heading
        content="Display Properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        We know that by default every html element is either <b>block</b> or 
        <b>inline-block</b> or <b>inline</b> element and that is <b>defined by display 
        property.</b> <br/> <br/>
        We can anytime change an elements type to either inline or block or inline-block
        by the <b>display</b> property. <br/>For ex: if we apply a css property of
        <b>display: block</b> to a <b>span</b> tag (which by default was inline element),
        then span tag will become a block element and all the block element properties such as margin/padding
        , width/height and others will be applicable to this span tag. <br/><br/>
        We can change any elements any type into other type based on our need. Look
        at below snippet to see how its done.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={displaySnippet} />

      <Text
        content={`<br/>
        One of the <b>special usage</b> of display property is <b>display: none</b>, which 
        is used to hide elements on UI (visually you can not see it).
        Also, the element on which it is applied will not render on html document at all
        as if it never existed and hence the space, previously taken by it, will be taken
        by other element, if present because it does not exist.<br/><br/>
        Now look the two images to understand it better::<br/><br/>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`<b>Before applying display: none</b>`}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image */}
      <ResponsiveImage
        srcUrl="/images/display-visible-image.jpg"
        altText="display block"
        boxHeight="200px"
      />

      <Text
        content={`<br/><b>After applying display: none</b>`}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image */}
      <ResponsiveImage
        srcUrl="/images/display-none-image.jpg"
        altText="display none"
        boxHeight="200px"
      />

      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please note that to make some element hide we use <b>display: none</b> and to make it appear again,
        we use <b>display: inline</b> or <b>display: inline-block</b> property based on what was its value
        earlier before applying display: none property.<br/><br/>
        And the major thing to observe is that display has 2 more properties such as :
        <ul>
          <li><b>display: flex</b></li>
          <li><b>display: grid</b></li>
        </ul>
        which we will learn in detail in layout properties section.
        Also for hiding it , we use the same trick of <b>display: none</b>  and to make it reappear as 
        <b>display: flex</b> or <b>display: grid</b>.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Visibilty */}
      <Heading
        content="Visibility:"
        headingType="h6"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
        <b>Visibility</b> property also works similarly as <b>display</b> property. Both hides the element 
        from UI. <b>visibility: hidden</b> will hides the element from only UI but on the html document
        the element will still exist and occupy its space as if it is still there just not visible,
        like a <b>ghost.</b>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`<b>Before applying visibility: hidden</b>`}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image */}
      <ResponsiveImage
        srcUrl="/images/display-visible-image.jpg"
        altText="visibility visible"
        boxHeight="200px"
      />

      <Text
        content={`<br/><b>After applying visibility: hidden</b>`}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image */}
      <ResponsiveImage
        srcUrl="/images/visibility-hidden-image.jpg"
        altText="display none"
        boxHeight="200px"
      />

      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please note that, same trick of display is also applied here, to make some element hide we use
         <b>visibility: hidden</b> and to make it appear again,
        we use <b>visibility: visible</b>, irrespective of element being a block/inline-block/inline
        element or grid/flex type.<br/><br/>
        Also another property <b>opacity: 0</b>, works same as <b>visibility: hidden</b>. We can interact
        with <b>opacity: 0</b> element like, if its a button then by a click but can not do with a 
        <b>visibility: hidden</b> element.
        
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* <Heading
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
      /> */}
    </Layout>
  );
};

export default CSSDisplayAndVisibilityPropertiesPage;
