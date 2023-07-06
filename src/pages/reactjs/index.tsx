import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'What is ReactJs ?',
  metaDescription:
    'Learn about ReactJS, a popular JavaScript library used for building user interfaces. This tutorial covers the basics of ReactJS, its key features, and how it can be used in web development projects.',
  metaKeywords:
    'ReactJS, JavaScript framework, JavaScript library , user interfaces, web development, tutorial, virtual DOM, component-based development.',
  metaOgTitle: 'Understanding ReactJS: A Comprehensive HTML Tutorial',
  metaOgUrl: 'https://jswebschool.com/reactjs',
  metaOgImage: '/images/reactjs-logo.png',
};

const ReactJsHomePage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.REACTJS}
      seo={seo}
    >
      <Heading
        content="What is ReactJs ?"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Reactjs is the most popular javascript framework. It has huge amount of jobs in the market so learning this is very important.
        <br/>
        <br/>
        The main features or advantages of reactjs are::
        <br/>
        <br/>
        <strong>1. Component-Based Architecture:</strong> <br/>
        React follows a component-based architecture, allowing you to split your UI into independent, reusable components. Components encapsulate their own logic, state, and user interface, making it easier to build and maintain complex applications. 
        <br/>
        <br/>
        <strong>2. Virtual DOM: </strong> <br/>
        React uses a virtual DOM (Document Object Model) to efficiently update and render UI components. The virtual DOM is a simplified representation of the real DOM that React uses to run efficient diffing algorithms, updating only the necessary parts of the UI when the underlying data changes. increase. This approach speeds up rendering and improves performance.
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        <strong>3. JSX:</strong> <br/>
        JSX is a JavaScript syntax extension that allows you to write HTML-like code in JavaScript. JSX makes it easier to define the structure and composition of React components and provides a more declarative and intuitive way to describe user interfaces.
        <br/>
        <br/>
        <strong>4. Reusability::</strong> <br/>
        React encourages reusability and composition through its component-based architecture. Components can be reused in different parts of your application, reducing code duplication and making your user interface easier to maintain and update. 
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="React is used for SPAs or multi page apps ?"
        headingType="h6"
        customStyle={tw`mb-2 mt-8`}
      />

      <Text
        content={`
        React.js along with angularjs and Vuejs are all used for developing SPAs (single page application).
        It means reactjs has a single HTML file (e.g index.html). In reactjs/Next.js/Gatsby.js websites we have multiple routes that does not mean we have one HTML file for each route. That routing functionality is implemented simply by switching conditionally different component on different frontend routes all happening in the same HTML file and that is why we call this single page application as it has a single page only.
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="" nextLink="/reactjs/setting-up-react-project" />
    </Layout>
  );
};

export default ReactJsHomePage;
