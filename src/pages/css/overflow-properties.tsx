import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  horizontalOverflowSnippet,
  verticalOverflowSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const CSSOverflowPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
    >
      <Heading
        content="Overflow properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Overflow is a css property which will come into picture only when the contents of an html
        element (for eg, h1) exceeds the size i.e, width and height of it parents.<br/><br/>
        By default, an html element is flexible meaning, you can put as much content in it as you want and
        it will happily accept, accomodate and grow in size and will not let any content overflow.
        <br/><br/>
        <b>overflow</b> property is made of 
        <b>overflow-x</b> and <b>overflow-y</b> meaning in horizontal direction and vertical direction.
        <br/><br/>
        This value of overflow, 
        <span class="px-1" style="border: 1px solid red">
          overflow: auto
        </span>, meaning both overflow-x and overflow-y is <i>auto</i>.
        So either use <i>overflow-x</i> or <i>overflow-y</i> separately depending on need or
        use directly <b>overflow</b> property to set the value of both <i>overflow-x</i> and
        <i>overflow-y</i>.
        <br/><br/>
        Now we will study examples of horizontal overflow and vertical overflow and then the way to fix it
         too.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Horizontal overflow scenario */}
      <Heading
        content="Horizontal overflow scenario :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
         Now lets study a scenario when text overflows horizontally. Just 2 properties can let this happen.
         <span style="border: 1px solid red">width: 200px</span> on a parent container and
         <span style="border: 1px solid red">white-space: nowrap</span> on a child/content wrapper 
         is sufficient to make a text flow beyond the containers set width (of 200px here).
         Here is the html/css code snippet for this scenario;
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={horizontalOverflowSnippet} />

      <Text
        content={`
        <br/>
        <b>Solution:</b> <br/>
        The way to fix it is simply by putting this line of css in the parent container <br/> i.e 
        <span class="px-2" style="border: 1px solid red">overflow-x: auto</span>.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Vertical overflow scenario */}
      <Heading
        content="Vertical overflow scenario :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
       Texts will overflow vertically only when we put a fixed height on parent. Lets see the html/css
       code snippet to study that:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={verticalOverflowSnippet} />

      <Text
        content={`
        <br/>
        <b>Solution:</b> <br/>
        The way to fix it is simply by putting this line of css in the parent container <br/> i.e 
        <span class="px-2" style="border: 1px solid black">overflow-y: auto</span>.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Possible values of overflow property */}
      <Heading
        content="Possible values of overflow property :"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
          Possible values for the overflow property:
          <br/>
          <ol>
            <li>
                <b>visible :</b> This is default value. Contents overflowed outside parent containers
                dimension is visible.
            </li>

            <li>
                <b>hidden :</b> Contents overflowed outside parent containers dimension is hidden.
            </li>

            <li>
              <b>scroll :</b> Contents overflowed outside parent containers dimension is forced inside a 
              parent containers dimension itself by enabling a scrollbar to accomodate the extra content.
            </li>

            <li>
              <b>auto :</b> same as <b>scroll</b>. Only difference is that if content fits with the 
              container no scrollbar is added unlike <b>scroll</b>.
            </li>

            <li>
            <b>overlay :</b> same as <b>scroll</b>. Only difference is that scrollbar is added 
            only when user interacts with the parent container.
          </li>

          </ol>
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

export default CSSOverflowPropertiesPage;
