import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import {
  PAGES,
  formTagSnippet,
  basicInputTagSnippet,
  fileUploadSnippet,
  radioBoxSnippet,
  textInputSnippet,
  textAreatSnippet,
  selectTagSnippet,
  buttonTagSnippet,
} from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

const seo = {
  title: 'HTML Forms Elements',
  metaDescription:
    'Learn how to utilize HTML form elements effectively with our comprehensive tutorial. Discover the various form input types, including text fields, checkboxes, radio buttons, select menus, and more. Explore form validation techniques and understand how to handle form submissions. Level up your web development skills and create interactive and user-friendly forms with HTML.',
  metaKeywords:
    'HTML, forms, form elements, input types, text fields, checkboxes, radio buttons, select menus, form validation, form submissions, web development, web forms, frontend development, HTML tutorial, interactive forms',
  metaOgTitle: 'HTML Forms Elements: Building Interactive Web Forms',
  metaOgUrl: 'https://jswebschool.com/html/form-elements',
  metaOgImage: '',
};

const HTMLFormElements: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
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
                <li><b>Input element</b> : Used to make <b>text input, password input, checkbox, radiobox, file select</b></li>
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

      <Text
        content={`<br>
        Please observe that all of this attributes are optional and upto developer to use as per his needs. <br/>
          The most common attribute on all <b>input</b> element is :
          <ul>
          <li>
            <b>type :</b> It will define what kind of element it will be. Its value can either be : text or password or button or checkbox or radio or number or button or reset or submit or range or tel or
            file or color or date.
          </li>
          <li>
            <b>name :</b> The name of input element.
          </li>
          <li>
            <b>value :</b> The value of input element, initially empty string but on typing or clicking radiobox or checkbox
             it will contain the typed value or radio box value or checkbox value.
          </li>
          </ul>
           
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Specific attribute for text input element and password input element"
        headingType="h5"
        customStyle={tw`underline mt-4`}
      />

      <Text
        content={`
          The specific attribute on <b>&lt;input type="text"&gt;</b> and <b>&lt;input type="password"&gt;</b> element is :
          <ul>
            <li>
              <b>size :</b> It will define the width of input element in terms of number of characters it can type without sliding 
              the characters left. Obviously we can type any number of characters here.
            </li>
            <li>
              <b>maxlength :</b> The maximum number of characters we can type.
            </li>
          </ul>
           
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={textInputSnippet} />

      {/* Radio box and Checkbox */}
      <Heading
        content="Specific attribute for radio input element and Checkbox input element"
        headingType="h5"
        customStyle={tw`underline mt-4`}
      />

      <Text
        content={`
          The specific attribute on <b>&lt;input type="radio"&gt;</b> and <b>&lt;input type="checkbox"&gt;</b> element is :
          <ul>
            <li>
              <b>checked :</b> If you make this attribute true then radio box or checkbox will be checked else will be unchecked.
            </li>
          </ul>
           
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={radioBoxSnippet} />

      {/* File upload */}
      <Heading
        content="Specific attribute for file upload input element"
        headingType="h5"
        customStyle={tw`underline mt-4`}
      />

      <Text
        content={`
          The specific attribute on <b>&lt;input type="file"&gt;</b> element is :
          <ul>
            <li>
              <b>accept :</b> it will define the type of file browser will accept.<br/>
              e.g: <br/>
              <b>image/*</b> : Accepts all image types.<br/>
              <b>image/jpg</b> : Accepts only jpg image type.<br/>
              <b>image/png</b> : Accepts only png image type.<br/>
            </li>
            
          </ul>
           
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={fileUploadSnippet} />

      {/* TextArea element */}
      <Heading
        content="Textarea element"
        headingType="h5"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
          Textarea elements or &lt;textarea&gt; tag are used to make <b>textarea element</b>.
          We use this textarea tag when the input element is insufficient for our use. As with textarea tag we can type text in multiple
          rows and more content than input element. I hope you understood the difference too.
            <br/>
            The most common attribute on all <b>textarea</b> element is :
            <ul>
              <li>
                <b>name :</b> The name of textarea element.
              </li>
              <li>
                <b>value :</b> The value of textarea element, initially empty string but on typing 
                it will contain the typed value.
              </li>
              <li>
                <b>rows :</b> It will define the number of rows of textarea (can be visible in UI).
              </li>
              <li>
                <b>cols :</b> It will define the number of columns of textarea (can be visible in UI).
              </li>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={textAreatSnippet} />

      {/* Select box element */}
      <Heading
        content="Select element"
        headingType="h5"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
          Select elements or &lt;select&gt; tag are used to make <b>select dropdown element</b>.
          We use this Select tag when we need a dropdown in our UI and if we want to choose one out of many items mostly or
          if you want to choose multiple items.
            <br/>
            The most common attribute on all <b>select</b> element is :
            <ul>
              <li>
                <b>name :</b> The name of select element.
              </li>
              <li>
                <b>multiple :</b> If set to true, multiple elements can be selected in dropdown.
              </li>
            </ul>
            <br/>
            Now select element wraps multiple option tag to represent multiple options, which can be selected and forms the items 
            of dropdown.
            <br/>
            The most common attribute on all <b>option</b> element is :
            <ul>
              <li>
                <b>value :</b> The value that will be selected if clicked upon in select element.
              </li>
              <li>
                <b>selected :</b> If set to true, that option elements will be selected from dropdown.
              </li>
            </ul>
            <br/>
            Now the way to write is::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={selectTagSnippet} />

      {/* Button element */}
      <Heading
        content="Button element"
        headingType="h5"
        customStyle={tw`underline mt-8`}
      />

      <Text
        content={`
          Button elements or &lt;button&gt; tag is used to make a button.
            <br/>
            Now there are many ways of making a button in html.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={buttonTagSnippet} />

      <Text
        content={`<br/>
          Now i will explain only one here, which can be little tricky. 
          <ul>
            <li>
              <b>&ltinput type="button"&gt; :</b> It will create a button and the attribute "value" will be the label of button.
              As with the "name" attribute, it is naming that input element.
            </li>
            <li>
            <b>&ltinput type="submit"&gt; :</b> It will create a very special submit button that is used to submit form values to 
            server and the attribute "value" will be the label of button.
            As with the "name" attribute, it is naming that input element.<br/>
            Even <b>&lt;button type="submit"&gt; </b> does the same task.
          </li>
          <li>
            <b>&ltinput type="reset"&gt; :</b> It will create a very special reset button that is used to reset form values and
             the attribute "value" will be the label of button.
            As with the "name" attribute, it is naming that input element.<br/>
            Even <b>&lt;button type="reset"&gt; </b> does the same task.
          </li>
          </ul>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please do not forget that <b>&lt;input&gt;, &lt;button&gt; , &lt;textarea&gt; or &lt;select&gt;</b> tags are inline block level 
        elements. And if you
        remember, these  are those html tags/elements which occupies only as much space as is 
        its content (property coming from inline elements) plus we can set its width and height and all 
        its margins and paddings (property coming from block level elements). <br/>
         More than one inline-block elements normally sit side by side on the same line. 
         (you can change this by applying css obviously).
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
