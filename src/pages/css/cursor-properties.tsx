import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, cursorSyntaxSnippet, cursorUseCaseSnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const CSSCursorPropertiesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
    >
      <Heading
        content="Cursor properties"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        cursor properties will control how will the mouse cursor look on the screen.
        A basic example usage looks like this:
        <span class="px-2" style="border: 1px solid black">cursor: pointer</span>.
        <br/><br/>
        We can always control how the cursor look from a predefined values it has.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={cursorSyntaxSnippet} />

      <Text
        content={`<br/>
       In the above snippet, we are controlling how the cursor will look along the entire dimension
       of <b>h1</b> or <b>p</b> elements.
        <br/>
        On <b>h1</b> element, it will look like pointer while on <b>p</b> it will look like move. 
        <br/>
        <br/>
        For understanding the whole cursor values and how each one looks, you need to 
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor"
        target="__blank"
        >official docs</a>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        Althought we have a lot of options for cursor values but what if we want a particular image or
        specific icon to be our cursor value.
        <br/>
        In that scenario we can set it with an <b>url()</b> function along with image or icon path
        inside the function. And second value separated by comma is the default cursor value (i.e arrow)
        which is a fallback value in case the image or icon is not read by browser.
        <br/>
        <br/>
        Possible usage of cursor property is on a html button element that looks something like a pointer
        to indicate to user that it is clickable.
        Another use case is an anchor tag, radiobox or checkbox.<br/><br/>
        Have a look at the below snippet for possible usages::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={cursorUseCaseSnippet} />
    </Layout>
  );
};

export default CSSCursorPropertiesPage;
