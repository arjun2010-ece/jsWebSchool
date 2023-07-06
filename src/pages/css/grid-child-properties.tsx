import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, gridLinesSnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import ResponsiveImage from '@/components/responsive-image';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'CSS Grid child properties',
  metaDescription:
    'Unlock the potential of CSS Grid child properties to control the positioning and alignment of grid items. This tutorial explores various CSS Grid child properties, including grid-column, grid-row, and grid-area, enabling you to create dynamic and responsive grid layouts for your web designs.',
  metaKeywords:
    'CSS tutorial, CSS Grid, grid child properties, web design, front-end development, responsive design, grid layout, grid-column, grid-row, grid-column-start, grid-column-end, grid-row-start, grid-row-end, align-self, grid lines',
  metaOgTitle:
    'CSS Grid Child Properties Tutorial: Mastering Positioning and Alignment in Grid Layouts',
  metaOgUrl: 'https://www.webschooljs.com/css/grid-child-properties',
  metaOgImage: '/images/css-logo.jpeg',
};

const CSSGridChildPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Grid child Properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        There are some grid properties which is used on grid childs. 
        These properties are : <br/><br/>
        <ul>
          <li>grid-column (combination of <b>grid-column-start</b> and <b>grid-column-end</b>)</li>
          <li>grid-row (combination of <b>grid-row-start</b> and <b>grid-row-end</b>)</li>
          <li>align-self</li>
        </ul>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading content="Grid Lines" headingType="h6" customStyle={tw`mb-4`} />

      <Text
        content={`Before learning <b>grid-column</b> and <b>grid-rows</b>, we need to understand the 
        concept of grid column lines and grid row lines.
        A quick note is that if
        number of columns is 3 then total grid column lines is 4 and if number of columns is 4 then total 
        grid column lines is 5 meaning total <i>
        grid column lines will always be total number of grid 
        columns + 1
        </i>.
        <br/><br/>
        Same goes for grid row lines, meaning <i>
        total grid row lines will always be total number of grid 
        rows + 1.
        </i>
        <br/>
        If total number of grid rows is 4 then total grid row lines is 5.
        <br/>
        We can understand this visually by seeing the images only as shown below. 
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image basic grid */}
      <ResponsiveImage
        srcUrl="/images/grid-lines.jpg"
        altText="grid lines"
        hideBorders
      />

      <Heading
        content="Grid column and Grid row:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`<b>grid-column</b> is a combination of two properties i.e <i>grid-column-start</i>
        and <i>grid-column-end</i>.<br/>
        Also <b>grid-row</b> is a combination of two properties i.e <i>grid-row-start</i>
        and <i>grid-row-end</i>.
        <span class="block mt-2" />
        Now observe the above grid image. In the grid image, we have 12 grid cells representing 12 grid
        childs.<br/>
        Now focus on grid child with content as "TWO". It is between grid column line 2 and 3. So 
        grid-column-start is 2 and grid-column-end is 3.<br/>
        It is also between grid row line 3 and 4. So grid-row-start is 3 and grid-row-end is 4.
        <br/>
        <i>Any grid child is always between 2 column lines and 2 column rows.</i>.<br/>
        In the above image, all the grid childs are in their default rows and columns.
        <br/><br/>
        We can always change the placement of any grid child by changing the value of grid-columns and
        grid-rows both. Lets understand below.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Playing with the grid lines:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`Now, in the above grid image, we will do some manipulations and put the grid child with
        content as "TWO" between grid column lines 2 and 3 and grid row lines 1 and 2.
        <br/>
        Also we put the grid child with
        content as "SIX" between grid column lines 3 and 4 and grid row lines 1 and 2.
        <span class="block mt-2" />
       Have a look at this snippet how we achieve this and 
       <a href="/images/grid-lines-manipulation.jpg" target="__blank">resultant image</a>
       also to confirm it below:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gridLinesSnippet} />

      <Heading
        content="Align self:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        This property is same as that of flexbox so i will not explain it here as it is done in flexbox page.
        <i>In short, it is used to reset/manipulate the value of align-items on a specific grid child</i>.
        <br/><br/>
        The possible values are : flex-start, flex-end, center, baseline and stretch (all the properties 
        are same as align-items, so i will not explain here).

        <br/><br/>
        <b>Note::</b> <br/>
        For learning to manipulate individual grid child, you need to understand only 3 properties i.e 
        <b>grid-column</b>, <b>grid-row</b> and <b>align-self</b>. <br/>So just follow the formulas and it
        will be good.<br/><br/>
        The below properties are rarely used so untill you master css grid like a pro,
        i suggest you do not go there so i will not explain here also but you always can learn about
        this from <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" target="__blank">official docs</a>
        <br/>
        <ul>
            <li>grid-area</li>
            <li>justify-self</li>
            <li>align-self</li>
            <li>place-self</li>
        </ul>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/css/grid-properties"
        nextLink="/css/overflow-properties"
      />
    </Layout>
  );
};

export default CSSGridChildPropertiesPage;
