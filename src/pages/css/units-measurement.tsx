import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, remFontSizeSnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const CSSUnitsOfMeasurementsPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
    >
      <Heading
        content="Units of measurements"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Since we design a webpage in css by putting width and height and margin and paddings and borders
        and many other properties, we need to tell the browser how much long will be the height or how
        much wide will be the width or how much space will be considered margin or padding.
        <br/>
        Web browsers do not understand the normal measurement units of length such as kilometer or meter
        or centimeter. <br/> 
        The smallest unit of measurement is pixel(px) which is a single dot or smallest
        dimension of smallest addressable element on a screen.
        <br/>
        We have 2 types of units for measurement such as:
         <br/><br/>
        <ul>
          <li>Absolute units of measurement such as px</li>
          <li>Relative units of measurement such as % or vw or vh or rem or em</li>
        </ul>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Absolute Units of measurements"
        headingType="h6"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        <b>px</b> is used to define font size, width , height, margin, padding, border etc.
        It always set a fixed value so irrespective of screen size (big or small), it will be of
        fixed size so it will not be responsive.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Relative Units of measurements"
        headingType="h6"
        customStyle={tw`mb-4 mt-8`}
      />

      <Text
        content={`
        <b>rem or em</b> is always relative to px. and it is the font size of root element i.e html tag.
        <br/>
        By default, <span class="pr-2" style="border: 1px solid black;"> 1rem = 16px</span>.
        But we can always change this value by below snippet such as :
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={remFontSizeSnippet} />

      <Text
        content={`<br/>
            Now, once we change it in html tag itself then putting any value either of width or height
            or margin or anything in <b>rem</b> unit becomes much easy.<br/>
            Kindly observe that if you need to put a font size for example of 18px then you simply
            need to put 1.8rem or if 28px then 2.8 rem. Calculation  becomes easy mentally and this is
            very widely used <b>trick</b> if you want to change the default font size of 18px.
            <br/>
            If you do not change this, then putting a font size of 16px is equal to 1 rem and 28px will
            be 16/28 = 0.57rem.

            <br/><br/>
            Now vw stands for viewport width and vh stands for viewport height.
            And <b>Viewport</b> means the the entire UI you see on the browser without any scroll.
            And hence same way viewport width is the width you see on browser without any horizontal
            scrollbar and viewport height is the height you see on browser without any vertical
            scrollbar.
            <br/><br/>
            Now we have percentage units also, which only works on widths and not on heights.
            By default any block level elements width is always 100% unless you reduce it.
            So we can reduce it by percentage unit also like 20% or 38% or 70% etc.<br/>
            This percentage unit is used to make a website responsive and mostly used for defining widths.
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

export default CSSUnitsOfMeasurementsPage;
