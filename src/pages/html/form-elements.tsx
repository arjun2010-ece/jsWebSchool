import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, formTagSnippet, basicInputTagSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

const HTMLFormElements: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
    >
      <Heading
        content="Form Elements/Controls ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
            There are many form elements, which is used in a form. Normally a <b>Form</b> is created
            by a <b>&lt;form&gt;</b> tag. Like below:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={formTagSnippet} />

      <Text
        content={`<br/>
            So the form elements that is used inside form tags are :
            <ul>
                <li><b>Input element</b> : Used to make <b>text input, checkbox, radiobox, file select</b></li>
                <li><b>Textarea element</b></li>
                <li><b>Select element</b></li>
                <li><b>button </b>: used to make <b>submit button, reset button and normal button</b></li>
            </ul>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Input element */}
      <Heading
        content="Input element"
        headingType="h5"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
            Input elements or &lt;input&gt; tag are used to make <b>text input, checkbox, radiobox, file select and
            password element</b>.
            <br/>
            Now the way to make a very simple textbox is by this:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={basicInputTagSnippet} />

      <Text
        content={`<br>
            Before moving any further, we need to understand basic <b>attributes</b> on this input
            tag/element.<br/><br/> Since we are using input elements to make <b>text input, checkbox, radiobox, file select and
            password element</b> majorly so the very basic attribute that will exists in every input element ,
            i will explain first (easy to remember too) and then specific attribute for individual input elements.
            <b>Sound right ?</b>
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

export default HTMLFormElements;
