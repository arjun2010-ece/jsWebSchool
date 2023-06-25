import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  restParamsSnippet,
  spreadCmbSnippet,
  spreadCpyExtndSnippet,
  spreadCpySnippet,
} from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const JSSpreadAndRestPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
    >
      <Heading
        content="Spread and rest"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        What is spread and rest ? <br/>
        Spread is a <b>syntax</b> and rest is a <b>parameter</b>. Both have the same syntax i.e 3 dots followed by name of variable(...person) but different purposes.
        <br/>
        <br/>
        Both are used in both arrays and objects.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <Heading
        content="Spread Syntax"
        headingType="h6"
        customStyle={tw`mb-2 mt-8`}
      />

      <Text
        content={`
        The spread syntax allows you to <b>expand elements of an iterable (like an array or string) or properties of an object</b>. It is used to copy or combine values from one iterable or object to another.
        <br/>
        Here are a few examples of spread syntax usage:
        <br/>
        <br/>
        Copying an Array:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={spreadCpySnippet} />

      <Text
        content={`<br/>
        In this example, the spread syntax <b>...originalArray</b> expands the elements of <b>originalArray</b> and creates a new array <b>newArray</b> with the same elements.
        <br/>
        <br/>
        Combining Arrays:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={spreadCmbSnippet} />

      <Text
        content={`<br/>
        Here, the spread syntax is used to combine the elements of <b>array1</b> and <b>array2</b> into a single array <b>combinedArray</b>.
        <br/>
        <br/>
        Copying and Extending Objects:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={spreadCpyExtndSnippet} />

      <Text
        content={`<br/>
        The spread syntax can also be used to copy the properties of an object into a new object.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <Heading
        content="Rest parameters"
        headingType="h6"
        customStyle={tw`mb-2 mt-8`}
      />

      <Text
        content={`
        The rest parameter syntax allows you to represent an indefinite number of arguments as an array. <b>It is used in function declarations to gather multiple function arguments into an array.</b>
        <br/>
        Here's an example of using rest parameters in a function:
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />

      <CodeSnippet content={restParamsSnippet} />

      <Text
        content={`<br/>
        In this example, the <b>sum</b> function uses rest parameters (<b>...numbers</b>) to gather all the provided arguments into an array called <b>numbers</b>. The function can then perform operations on the array of numbers.
        <br/>
        <br/>
        When you wish to define a function that takes a variable amount of arguments, rest parameters are extremely helpful.
        <br/>
        <br/>
        To recap, the rest parameter syntax is used to collect many function arguments into an array, whereas the spread syntax is used to extend or copy items from an iterable or attributes from an object/array. Although both features use the same spread syntax, they have different functions.
        `}
        parentEl="p"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mb-0`}
        `}
      />
    </Layout>
  );
};

export default JSSpreadAndRestPage;
