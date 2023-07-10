import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'What is CSS ?. Tips and tricks to learn css.',
  metaDescription:
    'Discover the power of CSS (Cascading Style Sheets) and learn how it enhances the appearance and styling of HTML elements. This tutorial provides a comprehensive introduction to CSS, covering selectors, properties, and selectors, enabling you to create visually appealing and well-designed web pages.',
  metaKeywords:
    'CSS tutorial, introduction to CSS, CSS basics, web design, front-end development, HTML styling, CSS properties, CSS selectors',
  metaOgTitle: 'What is CSS? A Beginners Guide to Cascading Style Sheets',
  metaOgUrl: 'https://www.webschooljs.com/css',
  metaOgImage: 'https://www.webschooljs.com/images/css-logo.jpeg',
};

const CSSPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
      seo={seo}
    >
      <Heading
        content="What is CSS3 ?"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content="CSS3 stands for <b>Cascading style sheet</b>. The version of css currently in use is v3 and that is why its called
         css3 as it evolved over the years.
         <br/>
         The purpose of using css is to do styling of html elements like 2 or 3 column layout palcement, change color, background, 
         animation etc.
         <br/><br/>
         <b>For every aspiring frontend or web developer, learning css is extrememly difficult</b> because of sole reason that first it 
         has huge number of properties. And remembering all is very difficult plus the properties are scattered all over internet
         without being in a group like structure.
         And second missing opportunities to understand how can you think and what parameters to think 
         for styling elements. Third is good grasp on responsivity of UI screen.
         <br/><br/>
         Now for solving the first problem, i am grouping all the major properties in specific groups that 
         you <b>MUST REMEMBER</b>
         for really mastering css. This is the most important stage. Without this, you <b>CAN NEVER</b> be 
         good enough to write good css.
         <br/> <br/>
         And for second, i will provide good examples with explanantion so that you can get ample practice.
         <br/> <br/>
         And for third, good explanantions and examples to understand how to make a screen responsive on
         multiple breakpoints and what things to keep in mind while making screen responsive.
         "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content="Learning css is so easy if done correctly that once you learn it properly, you will never
        have to struggle while developing webpages and it will come to you as you have played with
        it from childhood.<br/><br/>
        In frontend, <b>developing web pages using css (50%)</b> + <b>applying javascript(50%)</b> makes up the whole
        task list of a frontend developer for junior to mid-developer.
        <br/>
        For senior frontend developer, an additional task of <i>setting up a react/angular project</i>,
        <i>setting up CI/CD pipeline</i>, <i>deploying to server</i> etc are some of the tasks of the senior.
        <br/><br/>
        So learning css makes up the <b>50%</b> of learning for almost all the juniors/mid-level developers.
        <br/>
        <br/>
        To summarise, on a high level we need to learn how to create different layouts(webpages).
        And the most preferred and easy way of creating any column layout is by <b>css grids</b>.
        <b>Css flexbox</b> is the second most preferred way. So learning both will make your life like cheese.
        <br/>
        <br/>
        And learning other css properties allows a developer to develop the elements other features like 
        background, color, font-sizes etc so we are clear what we are learning and why we are learning.
        "
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="" nextLink="/css/way-to-think" />
    </Layout>
  );
};

export default CSSPage;
