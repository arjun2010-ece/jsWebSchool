import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Exploring Essential Javascript Operators: An In-Depth Look at Expressions',
  metaDescription:
    'Master JavaScript operators and learn how to perform various operations on values and variables. This tutorial covers JavaScript operators, including arithmetic, assignment, comparison, logical, and more, empowering you to manipulate and combine values effectively in your JavaScript code',
  metaKeywords:
    'JavaScript tutorial, JavaScript operators, arithmetic operators, assignment operators, comparison operators, logical operators, front-end development, web development, value manipulation',
  metaOgTitle:
    'JavaScript Operators Tutorial: Performing Operations on Values and Variables',
  metaOgUrl: 'https://www.webschooljs.com/javascript/operators',
  metaOgImage: 'https://www.webschooljs.com/images/javascript-logo.jpeg',
};

const JSDataTypesPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
      seo={seo}
    >
      <Heading
        content="Javascript Operators :"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        In JavaScript, operators are symbols or keywords that perform operations on operands (values or 
        variables) and produce a result. JavaScript provides a wide range of operators that can be 
        used for arithmetic, assignment, comparison, logical operations, and more. Here's an overview 
        of the main categories of JavaScript operators:
        <br/>
        <br/>
        <ol>
            <li>
            <b>Arithmetic Operators:</b><br/>
              <ul>
                <li>Addition (+), subtraction (-), multiplication (*), and division (/) operators perform 
                basic mathematical operations on numbers.
                <br/>
                <b>E.g:</b> <br/>
                A = 10 <br/>
                B = 20 <br/>
                A + B = 30 <br/>
                A - B = -10 <br/>
                A * B = 200 <br/>
                B / A = 2 <br/><br/>
                </li>

                <li>Remainder/Modulus (%) operator returns the remainder of a division operation.
                <br/>
                <b>E.g:</b> <br/>
                A = 10 <br/>
                B = 20 <br/>
                B % A = 0 <br/><br/>
                </li>
                <li>Increment (++) and decrement (--) operators increase or decrease a value by 1 
                respectively.
                <br/>
                <b>E.g:</b> <br/>
                A = 10 <br/>
                A++ will give 11<br/>
                A-- will give 9<br/>
                </li>
              </ul>
              <br/>
            </li>

            <li>
            <b>Assignment Operators:</b><br/>
            The purpose of this operator(=) is to assign value to a variable.<br/>
            Compound assignment operators (+=, -=, *=, /=, %=) combine an arithmetic operation with assignment.
            <br/> <br/>
            </li>

            <li>
            <b>Comparison Operators:</b><br/>
            Some common comparision operators are Equality (==, ===) and inequality (!=, !==) operators.
            <br/>
            Equality (==, ===) operators is used for comparing values for equality.
            Inequality (!=, !==) operators is used for comparing values for inequality.
            Relational operators (<, >, <=, >=) compare values and determine their relationship based on
             their magnitude.<br/><br/>
            </li>

            <li>
            <b>Logical Operators:</b><br/>
            The logical operators for boolean values are logical AND (&&), logical OR (||), and logical 
            NOT (!).<br/>
            Short-circuit evaluation:  Logical AND and OR operators exhibit short-circuit behavior, where 
            the second operand is evaluated only if necessary.<br/><br/>
            </li>

            <li>
            <b>String Operators:</b><br/>
            The (+) string concatenation operator combines two strings.<br/><br/>
            </li>

            <li>
            <b>Ternary Operators:</b><br/>
            Conditional statements(IF/ELSE) can be quickly written using the ternary operator 
            (condition ? expr1 : expr2).<br/>
            <b>E.g</b>   5 > 2 ? "yes" : "no"
            <br/><br/>
            </li>

            <li>
            <b>TypeOf Operators:</b><br/>
            <i><b>typeof</b></i> operator returns the data type of a value.<br/>
            <i><b>instanceof</b></i> operator tests if an object is an instance of a particular class or constructor 
            function.
            <br/><br/>
            </li>

            <li>
            <b>Bitwise Operators:</b><br/>
            Bitwise operators (&, |, ^, ~, <<, >>, >>>) manipulate individual bits of numeric values.
            <br/><br/>
            </li>
        </ol>
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/javascript/data-types"
        nextLink="/javascript/if-else"
      />
    </Layout>
  );
};

export default JSDataTypesPage;
