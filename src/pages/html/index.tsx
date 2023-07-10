import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'What is Html ?. Tips and tricks to learn html.',
  metaDescription:
    'Discover the fundamentals of HTML with our comprehensive tutorial. Learn what HTML is, its role in web development, and how to create structured and semantic web pages. Explore HTML tags, elements, attributes, and their purpose. Level up your web development skills and start building your own web pages with HTML.',
  metaKeywords:
    'HTML, what is HTML ?, web development, web design, HTML basics, HTML tags, HTML elements, HTML attributes, structured web pages, semantic HTML, frontend development, HTML tutorial',
  metaOgTitle: 'What is HTML? A Comprehensive Introduction to HTML Basics',
  metaOgUrl: 'https://www.webschooljs.com/html',
  metaOgImage: 'https://www.webschooljs.com/images/html-logo.png',
};

const HTMLPage: NextPage = () => {
  const basicHtmlcodeSnippet = `  <!DOCTYPE html> 
  <html> 
    <head> 
      <title>My First Web Page</title> 
      <meta charset="UTF-8"> 
      <!-- Add more meta tags or link CSS stylesheets here --> 
    </head>
    <body> 
      <!-- Your page content goes here --> 
    </body>
  </html>`;

  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="What is HTML ?"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content="HTML stands for <b>Hyper Text Markup Language</b>.
        In short with this language you write the <b><u>skeleton</u></b> or <b><u>structure</u></b> of a webpage.
        Keep in mind that HTML is a UI or markup language not a programming language.
        The current version of HTML we use is 5 and its called as <b>HTML5</b> also.
        <br/> <br/> <b>Full Picture ::</b> <br/> Now HTML5 is only responsible for creating the structure of webpage not for making it beautiful 
        or creating the UI in 2 columns or 3 columns layout or aligning the text right or left or center
        or background images or colors or modifying the font sizes etc.  <br/> <br/> <b>Now that is why we use css3</b>. 
        Go to CSS3 tutorial to learn to use."
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Basic HTML code snippet */}
      <CodeSnippet content={basicHtmlcodeSnippet} />

      <Text
        content={`The above code snippet is the <b>very basic structure of a HTML file</b>.<br /><br />
        It has 2 things to observe. <br />
        1. Doctype tag (<b>&lt;!DOCTYPE html&gt;</b>) <br/>
        2. html tag (<b>&lt;html&gt; &lt;/html&gt;</b>)<br/>
        <br/>
        <br/>
        <b>Doctype</b> tag is the first instruction in any html file. It informs web browsers about the 
        version of html in which the page is developed so that all the browser reads the page consistently.
        <br/>
        HTML5 is the latest version but before it we had : v1, v2, v3 and v4 too.<br/><br/>
        Read more on this here:  <a target="_blank"
        href="https://www.bu.edu/lernet/artemis/years/2020/projects/FinalPresentations/HTML/historyofhtml.html">
        History of HTML </a>
        <br/><br/>
        <b>html</b> tag is the starting tag of html file.
        Now this html tag has two childs:: <br/>
        1. head tag (<b>&lt;head&gt; &lt;/head&gt;</b>), where you have title and meta tags.<br/>
        <ul>
         <li><b>title</b> tags is used to define the title of that specific webpage. 
         For each html file, it will be different.</li>
         <li> <b>meta</b> tags are used to add extra information about this html file or page. Even SEO info is defined using this meta tags.</li>
        </ul>
        <br/>
        2. body tag (<b>&lt;body&gt; &lt;/body&gt;</b>), where you have all the pages UI, or you 
        write div or span or literally any tags to structure your UI.
        `}
        parentEl="div"
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )} ${tw`mt-4`}
        `}
      />

      <Heading
        content="What is this html tags we have been reading above ?"
        headingType="h5"
        customStyle={tw`mt-8`}
      />
      <Text
        parentEl="div"
        content="We all know that in science, matters are made up of atoms or group of atoms, 
        a term we use is building block or the smallest block. Same is the case here, html tags are the 
        smallest blocks which make up the html pages. Normally more than one tags in combinations make up 
        the whole page.<br/>
        Some examples are: div, p, span, header, nav, footer, main, aside, section, article. <br/><br/>
        Now hold your breathe, we need to understand 6 things at this phase::
        <ul>
         <li>HTML Tags vs elements vs attributes.</li>
         <li>Block vs Inline block vs inline elements.</li>
         <li>Semantic vs Non-semantic tags</li>
         <li>How a particular tag is used in html ?</li>
         <li> Why a particular tag is used in html ?</li>
         <li>How to create a structure of a webpage in html ?</li>
        </ul>
        <br/> <br/>
        Now these 6 things we will cover in next sections and trust me if you understand all these 6 things you 
        basically know HTML well and in a good shape to go to css tutorials with solid foundations. <br/> <br/>
        <b><u>Note::</u></b><br/>
        To give you an idea, this fifth and sixth item, mentioned above is the information you hardly find anywhere on 
        web and if found, it will be on some random blogs, where some senior dev shares their experience. Mostly
        it is expected that without reading or knowing about it you have to master it at workplace and it is one of
        the most complex thing if you do not know about it and directly get into coding.
        "
        customStyle={css`
          ${fluid(
            remToPx(globalTheme`fontSize.base`),
            remToPx(globalTheme`fontSize.lg`),
          )}
        `}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon nextLink="/html/tags-elements" prevLink="" />
    </Layout>
  );
};

export default HTMLPage;
