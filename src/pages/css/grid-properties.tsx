import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  flexGapSnippet,
  gridColumnsSnippet,
  gridColumnsUsageSnippet,
  gridRowsSnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import ResponsiveImage from '@/components/responsive-image';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'CSS Grid properties',
  metaDescription:
    'Master the CSS Grid properties and unlock the power of creating complex and responsive layouts in HTML. This comprehensive tutorial covers grid containers, grid lines, grid tracks, and more, empowering you to design dynamic and visually stunning web pages.',
  metaKeywords:
    'CSS tutorial, CSS Grid properties, grid layout, responsive design, web design, front-end development, grid containers, grid lines, grid tracks, grid-template-columns, grid-template-rows justify-content, align-items, gap, justify-content, align-items',
  metaOgTitle:
    'CSS Grid Properties Tutorial: Creating Dynamic and Responsive Layouts in HTML',
  metaOgUrl: 'https://www.webschooljs.com/css/grid-properties',
  metaOgImage: '/images/css-logo.jpeg',
};

const CSSGridPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="Grid Properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Grid is a <b>layout system</b> and is two dimensional meaning we can layout elments in
        horizontal and vertical directions together.<br/>
        <b>In Grid system (same as flexbox), we have  a grid parent (or container) and grid childs. 
        By applying
        few properties on grid parent, we control how the child will lay on html page.</b> 
        <br/><br/>
        <blockquote>
        Once we apply <span style="border: 1px solid black;" class="px-1">display: grid</span> on a
        parent element, then all its child becomes grid child and then we can control its child
        through some grid properties, defined below
        </blockquote>
        <br/>
        And these properties are applied on its  <b>parent itself</b>. <br/>
        We use some specific and limited properties on its  <b>childs</b>, which we study
        in next page but here we study properties on parents only.<br/> <br/>
        The most common properties always used are: <b>grid-template-columns</b>,
        <b>grid-template-rows</b>
         <b>justify-content</b>, <b>align-items</b> property
         and <b>gap</b> property. <br/> <br/>
         And these <b>justify-content</b> and <b>align-items</b> property are the same as used in flexbox
         in previous section.
        <br/>
        Now grid is a concept of rows and columns. As shown in below, a very basic grid we have drawn with 
        4 rows and 3 columns (although we can draw with any number of rows/columns) looks like this,
        with spaces between them (called gaps/gutters) may or may not exists:: 
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image basic grid */}
      <ResponsiveImage
        srcUrl="/images/basic-grid.jpg"
        altText="basic grid"
        boxHeight="400px"
      />

      <Heading
        content="Grid templates columns:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        Grid template columns is a property which is <b>used to create number of columns in a grid.</b>
        Now since grid is a combination of rows and columns. Now what about rows ??.
        Either we set it with other property (will discuss next), and if not set then number of rows will
        be automatically created ensuring that number of columns (as created above by the property) is always
        respected.<br/>
        For ex: please observe the html snippet below, here once we apply the grid css in it, we will have
        2 grid columns of 400px and 600px. Now regarding number of rows will be 3. Just calculate it in 
        your mind.
        <br/>
        Now you can look at the results of below html css here: 
        <a href="/images/grid-ui.jpg" target="__blank">result</a>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gridColumnsSnippet} />

      <Text
        content={`<br/>
        Now if you see the css and specifically <i>grid-template-columns</i> value that is <b>400px</b>
        and <b>600px</b>, that is a static value so once you squeeze the screen or if you see the UI in
        smaller screen then you will have horizontal scrollbar which is a bad sign.
        <br/><br/>
        <b>To fix that, always use % or fr units for defining column widths.</b><br/>
        <b>Note::</b> <br/>
         If you do not know, how many columns you need to create then in that specific scenario,
         you use :
         <span class="pr-2" style="border: 1px solid black;">
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
         </span>
         <br/>
         <br/>
         Here, <i>repeat()</i> is a function which takes 2 values, first value mean how many times to repeat
         and second value mean the width of each column or row(depend on where it is used).<br/>
         <b>For e.g :</b> <i>grid-template-columns: repeat(2, 300px)</i>, mean create 2 columns of 300px each.
         <br/>Also,
         <i>grid-template-rows: repeat(2, 400px)</i>, mean create 2 rows of 400px each.

         <br/>
         <br/>
         <b>auto-fit</b> keyword automatically generates as many columns as it can respecting the 
         available space. Another keyword used for the same purpose is : <b>auto-fill</b>.

         <br/>
         <br/>

         <b>minmax()</b> is a function that takes 2 values i.e minimum and maximum value. In the above code
         <i>minmax(190px, 1fr)</i> mean the minimum column width is 190px and maximum is 1fr, meaning the 
         maximum available space.

         <br/>
         <br/>

         So now the above function means that create as many columns as possible(auto-fit) respecting the space
         available with a minimum width of 190px and distributing the remaining space evenly 
         using the <b>1fr</b> unit.
         <br/><br/>
         Popular ways of writing is: <br/><br/>
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <Text
        content={`
        The way to write <i>grid-template-columns</i> is by either <b>repeat()</b> function 
        or by directly putting the width value (either in px/rem or fr or percentage or a mix of both)
        separated by a space referrring number of columns and width of each column.
        Some snippets are:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={gridColumnsUsageSnippet} />

      <Text
        content={`<br/>
       I am going to explain one very important concept of <b>fr</b> units.<br/>
       <span class="pr-2" style="border: 1px solid black;">
        grid-template-columns: 1fr 2fr 4fr 
       </span>. <br/>
       Here, how will you understand the space division or width of each columns in fr units.
       Adding 1fr + 2fr + 4fr = 7fr units equalling all the available space i.e 100% so,
       1fr column width = 100%/7 = 14.287% of available space is the width and so 2fr = 28.574% width and 
       4fr = 57.148% width of all available space. Hope you understand the fr units well.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      {/* Grid templates rows */}
      <Heading
        content="Grid templates rows:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        Grid template rows is a property which is <b>used to create number of rows in a grid.</b>
        but it is not used alone. It is used along with <i>grid-template-columns</i>.
        <br/>
        <i>Now we need to be extremely careful while we use grid-template-rows as it will only
        be respected when we calculate and put exact value of grid-template-columns </i>
        <br/>
        For ex: please observe the html snippet below, here we have 6 grid childs, if we define something
        2 rows by <i>grid-template-rows: repeat(2, 300px)</i> of 300px each, then we need to define number
        of columns also by mentally calculating what number of columns will respect 2 rows so,
        it will be 3 columns.
        <br/>
        Now you can look at the results of below html css here: 
        <a href="/images/grid-rows.jpg" target="__blank">result</a>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gridRowsSnippet} />

      <Text
        content={`<br/><br/>
        <blockquote>
        If you do not know, how many rows you need to create then in that specific scenario, 
       well that scenario will never come as you might not know how many columns you need but you will always
       know how many rows you need or it will be automatically created for you.
        </blockquote><br/><br/>
        <i>Always use % or fr units for responsivity and also can use <b>repeat()</b>
        function and <b>minmax()</b> function too for rows.
        </i>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Grid gaps */}
      <Heading
        content="Grid gaps:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        Grid gaps as mentioned in flexbox also is the space between grid columns 
        (column-gap/grid-column-gap) and grid rows (row-gap/grid-row-gap).<br/><br/>
        Please observe that <i>grid-row-gap </i> and <i>grid-column-gap</i> are the old ways of
        providing gaps so new ways are  <i>row-gap </i> and <i>column-gap</i>.
        <br/>
        And we can give both row-gap and column-gap property with a standard property i.e <b>gap</b>.
        Old property name is <b>grid-gap</b>.
        An example can be seen here : <a href="/images/flex-gaps.jpg" target="__blank">Grid gaps</a>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={flexGapSnippet} />

      <Text
        content={`<br/><br/>
       <b>Note::</b><br/>
       For learning grids, you need to understand only 2 properties well, i.e 
       <b>grid-template-columns</b> and <b>grid-template-rows</b> only.
       Rest i.e <b>gap</b> and <b>justify-content</b> and <b>align-items</b> property that is definately 
       used
        here work the same way as it works in flexbox as defined in previous page, so i will not explain
        here that.<br/><br/>
        Also these properties are not needed as it is rarely used and once you are the master of grids
        then you can study all of these from
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" target="__blank">official docs</a>
        <br/>:
        <ul>
          <li>grid-template-areas</li>
          <li>justify-items</li>
          <li>grid-template</li>
          <li>align-content</li>
          <li>place-content</li>
          <li>grid-auto-columns</li>
          <li>grid-auto-rows</li>
          <li>grid-auto-flow</li>
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
        prevLink="/css/flexbox-properties"
        nextLink="/css/grid-child-properties"
      />
    </Layout>
  );
};

export default CSSGridPropertiesPage;
