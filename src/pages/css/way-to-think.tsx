import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';

const CSSWayToThinkPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
    >
      <Heading
        content="Way to think in CSS or while writing css ?"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Now this topic is <b>extrememly important</b> for you to understand. And without this, you will read and write a lot
        of css but will never fully grasp how to write it properly.
        <br/><br/>
        <ol type="1">
            <li>
              <b>Element for which you are targeting to write css is block level element, 
              inline element or inline-block level element</b>. Once you determine that you will know whether margin/padding/width/height
              properties
              can be applied on a html tag or not and if it starts everytime on a new line or two html elements can sit side by side
              together or not. If you forgot then refresh your memory with this : 
              <a href="/html/block-inline" target="__blank">
              Block vs inline or inline block
              </a>
            </li>
            <li>
              If you need to align a group of elements on right or left or center of a webpage,
              then first you need to wrap those group of elements
              in a div tag and then need to use flex or grid for laying out elements in different columns.
            </li>

            <li>
             Once you are applying css properties on a html element, then remembering those similar properties in a group
             like typography properties
             comes handly and you can decide which one you need.
            </li>
            
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
    </Layout>
  );
};

export default CSSWayToThinkPage;
