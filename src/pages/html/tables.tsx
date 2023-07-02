import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import {
  PAGES,
  htmlTableBasicSnippet,
  htmlTableUsageSnippet,
  htmlTableHeadSnippet,
  htmlTableBodySnippet,
  htmlTableBorderSnippet,
  htmlTableColRowSpanSnippet,
} from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';
import ResponsiveImage from '@/components/responsive-image';

const seo = {
  title: 'HTML Tables',
  metaDescription:
    'Master the creation and styling of HTML tables with our comprehensive tutorial. Learn how to structure tabular data using the "table", "tr", and "td" tags. Explore various attributes and techniques for adding headers, captions, borders, and responsive behavior to your tables. Level up your web development skills and create well-organized and visually appealing tables with HTML.',
  metaKeywords:
    'HTML, tables, HTML tables, tabular data, table structure, table tags, table attributes, table styling, table headers, table captions, responsive tables, web development, web design, HTML tutorial, frontend development',
  metaOgTitle:
    'HTML Tables: Structuring and Styling Tabular Data',
  metaOgUrl: 'https://jswebschool.com/html/tables',
  metaOgImage: '',
};

const HTMLTables: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="Tables"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
          Tables are used to group informations in various rows and columns together.
          The basic table looks like this::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlTableBasicSnippet} />

      <Text
        content={`
        <br/> <br/>
        It looks so complex, Is not it ? <br/>
        <b>&lt;table&gt;</b> tag has 3 childs : <b>thead, tbody</b> and <b>tfoot</b>, where <b>tfoot</b>
        is rarely used so in practice, we use only <b>thead</b> and <b>tbody</b>. <br/>
        So now it looks something like this ::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlTableUsageSnippet} />

      <Text
        content={`
        <br/> <br/>
        As <b>thead</b>  represents the header of the table, it will wrap only one row (tr) inside it.
        And again this <b>tr</b> will wrap as many <b>th</b> as it needs column header.
        <b>th</b> means header cells and it exists in thead.
        In terms of code, kindly have a look below::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlTableHeadSnippet} />

      <Text
        content={`
        <br/> <br/>
        <b>tbody</b>  represents the body of the table, it will wrap as many rows as it needs (tr) inside it.
        And again this <b>tr</b> will wrap as many <b>td</b> as it needs column headers data.
        <b>td</b> means data cells and it exists in tbody.
        In terms of code, kindly have a look below::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlTableBodySnippet} />

      <Text
        content={`
        <br/> <br/>
        Now we understood the tables and how to write it. But we need to understand some specific attributes 
        on table tag and what is the purpose of it.
            <ul>
              <li>border attribute and border-collapse styling to collapse double borders is the firsr
              and very important concept in html table.</li>
              <li><b>colspan attribute :</b> If this attribute is used on a <b>th</b> or <b>td</b> cells then
              those cells will merge those columns as one column.<br/>
              <b>e.g :</b> colspan = "4" will merge 4 cells(th/td) into one cell. And this property always used
              on th/td only.
              </li>

              <li><b>rowspan attribute :</b> If this attribute is used on a <b>th</b> or <b>td</b> cells then
              those cells will merge those rows as one row.<br/>
              <b>e.g :</b> rowspan = "4" will merge 4 cells(th/td) into one cell. And this property always used
              on td only.
              </li>
              <li><b>cellpadding attribute :</b> This attribute is applied on a table tag and it will give padding
              to all the th/th cells.
              </li>
              <li><b>cellspacing attribute :</b> This attribute is applied on a table tag and it will give spaces/margin
              between different cells.
              </li>
            </ul>
            <br/><br/>
            Now below we will see examples of all of the above attributes in action::
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Example of border attribute and border-collapse styling"
        headingType="h5"
        customStyle={tw`underline my-4`}
      />

      <CodeSnippet content={htmlTableBorderSnippet} />

      <Text
        content={`
        <br/> <br/>
        Now focus that on table tag, we have <b>border="1"</b>, meaning border of table is set to 1px,
        and then you see a double border. Once you apply a styling of <b>border-collapse: collapse</b>
        then double borders are collapsed.
        <br/>
        <b>Note :</b><br/> Here we are using html style attribute to do styling, but in practice we write
        this style in a css file.<br/>
        I am attaching 2 images here , one for double border and then collapse of double borders, which is what
        we want.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image */}
      <ResponsiveImage
        boxHeight="300px"
        srcUrl="/images/table-borders.jpg"
        altText="table borders"
        hideBorders={true}
      />
      {/* Responsive image */}
      <ResponsiveImage
        boxHeight="400px"
        srcUrl="/images/table-borders-collapse.jpg"
        altText="table borders collapse"
        hideBorders={true}
      />

      <Heading
        content="Example of colspan and rowspan attribute"
        headingType="h5"
        customStyle={tw`underline my-4`}
      />
      <Text
        content={`
        We can use colspan and rowspan attribute separately also, based on businedd requirement or figma design.
        But here i will show you both used together and explain you in detail. 
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={htmlTableColRowSpanSnippet} />

      {/* Responsive image */}
      <ResponsiveImage
        boxHeight="400px"
        srcUrl="/images/table-col-row-span.jpg"
        altText="table colspan and rowspan"
        hideBorders={true}
      />

      <Text
        content={`
       As it is very simple to understand, here in the 3rd row(tr), we have only one td, but in thead, the maximum
       columns we have is 3, so we are trying to merge 3 columns cells into one with <b>colspan = "3"</b> attribute.
       <br/><br/>
       Now as for rowspan usage, in the first row in tbody the attribute <b>rowspan = "2"</b>, will merge 2 
       row cells into one:: row 1 cell 1 and row 2 cell 1 are merged into one cell row 1 cell 1.
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

export default HTMLTables;
