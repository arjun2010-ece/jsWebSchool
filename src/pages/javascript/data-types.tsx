import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  coercionSnippet,
  dataTypesSnippet,
  typeOfSnippet,
  typeSnippet,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const JSDataTypesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
    >
      <Heading
        content="Javascript data types :"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        In JavaScript, we deal with data and data can have many types.
        <br/>
        JavaScript has several built-in data types that define the kind of data a variable can hold. Here 
        are the fundamental data types in JavaScript:
        <br/><br/>
        <b>Primitive Data Types:</b><br/>
        <ul>
            <li>
            <b>Boolean:</b> Represents a logical value of either true or false.
            </li>

            <li>
            <b>Number:</b> Represents numeric values, including integers and floating-point numbers.
            </li>

            <li>
            <b>String:</b> Represents sequences of characters enclosed in single or double quotes.
            </li>

            <li>
            <b>Null:</b>  Represents the absence of any object value.
            </li>

            <li>
            <b>Undefined:</b>  Represents a variable that has been declared but not assigned a value.
            </li>
        </ul>
        <br/>
        <b>Complex Data Types:</b><br/>
        <ul>
            <li><b>Object:</b> Represents a collection of key-value pairs, where values can be of any data type.
             Objects are reference types and can be created using object literals {}, the new keyword,
              or constructor functions.</li>
        </ul>
        <br/>
        <b>Special Data Types:</b><br/>
        <ul>
            <li>
                <b>Function:</b> Functions are a type of object and can be assigned to variables or invoked 
                directly.
            </li>
            <li>
                <b>Array:</b> Arrays are objects that store collections of values. They can hold multiple 
                values of any type and are represented using square brackets [].
            </li>
        </ul>
        <br/>
        
        Variables in JavaScript can hold values of any type, and the type of a variable can change as the 
        program is being executed. To identify the type of a value kept in a variable, use the typeof 
        operator. For instance:
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={dataTypesSnippet} codeContainerStyle={tw`mx-8`} />

      <Text
        content={`
        <br/>
        Additionally, JavaScript provides various methods and operators for working with different data 
        types, such as string concatenation, arithmetic operations, type conversions, and more. 
        Understanding and utilizing JavaScript's data types is crucial for effective programming and data 
        manipulation.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Type coercion and conversion:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        Type coercion and conversion are techniques used in JavaScript to change the type of a value from 
        one data type to another. While they may seem similar, there is a distinction between the two:
        <br/>
        <ol>
            <li>
                Type Coercion:<br/>
                Type coercion refers to JavaScript's automatic conversion of values from one type to 
                another when performing operations. It occurs implicitly, without explicit instructions 
                from the developer. JavaScript attempts to make sense of the operation by converting the
                 value(s) to compatible types. For example:
            </li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={coercionSnippet} codeContainerStyle={tw`mx-8`} />

      <Text
        content={`
        <br/>
        In this case, the number 5 is coerced into a string before concatenating it with the string "10". 
        Type coercion can lead to unexpected results and should be used with caution to avoid potential 
        bugs.
        <br/>
        <br/>
        <ol start="2">
            <li>
                Type Conversion:<br/>
                Type conversion, on the other hand, involves explicitly converting values from one type 
                to another using built-in functions or operators. Developers have control over the
                 conversion process and can ensure that it behaves as expected. Some commonly used type 
                 conversion methods in JavaScript include:
                 <ul>
                    <li><b>String() :</b> Converts a value to a string representation.
                    </li>
                    <li><b>Number() :</b> Converts a value to a numeric representation.
                    </li>
                    <li><b>Boolean() :</b> Converts a value to a boolean representation.
                    </li>
                    <li><b>parseInt() :</b> Converts a string to an integer.
                    </li>
                    <li><b>parseFloat() :</b> Converts a string to a floating-point number.
                    </li>
                    <li><b>toString() :</b>Converts a value to its string representation.
                    </li>
                 </ul>
            </li>
        </ol>
        For example:
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={typeSnippet} codeContainerStyle={tw`mx-8`} />

      <Text
        content={`
        <br/>
        Type conversion allows for controlled manipulation of data types and is useful in scenarios where 
        specific type requirements need to be met or when performing explicit conversions for calculations
         or comparisons.
        <br/>
        <br/>

        It's important to understand the difference between type coercion and type conversion in 
        JavaScript to write code that behaves as intended and to prevent unexpected results or bugs. 
        Explicitly performing type conversions can provide clearer code and improve code readability.
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Checking data types using the typeof operator:"
        headingType="h6"
        customStyle={tw`mb-4 mt-8 underline`}
      />

      <Text
        content={`
        The typeof operator in JavaScript can be used to find out the data type of a value or variable. 
        The typeof operation gives back a string that represents the type of the operand.
        Here's how you can use it:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={typeOfSnippet} codeContainerStyle={tw`mx-8`} />

      <Text
        content={`<br/>
        Some key points to note about typeof:
        <br/><br/>
        <ul>
            <li>It returns a string representation of the type.
            </li>
            <li>It can be used with literals, variables, and expressions.
            </li>
            <li>It can be used with any JavaScript data type.</li>
            <li>It does not distinguish between different object types other than distinguishing 
            functions.
            .</li>
            <li>It returns "object" for objects, arrays, and null due to historical reasons.
            .</li>
        </ul>
        <br/>
        <b>Limitations:</b> <br/>
        Keep in mind that typeof has certain limitations and may not provide precise information in all 
        scenarios. For example, it treats null and arrays as objects, and it cannot differentiate between 
        different object types (except for functions). To perform more specific type checks, additional 
        techniques such as instanceof, Array.isArray(), or custom checks may be required.
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

export default JSDataTypesPage;
