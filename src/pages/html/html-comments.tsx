import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, commentsSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

const seo = {
  title: 'Html Comments',
  metaDescription:
    'Learn how to use HTML comments effectively with our comprehensive tutorial. Discover the purpose and syntax of HTML comments and how to apply them in your code. Explore best practices for commenting and understand their impact on code readability and maintenance. Level up your HTML skills and create well-documented and organized web pages with HTML comments.',
  metaKeywords:
    'HTML, comments, code documentation, code readability, web development, web design, HTML syntax, best practices, commenting, HTML tutorial, frontend development',
  metaOgTitle: 'HTML Comments: Enhance Code Documentation and Readability',
  metaOgUrl: 'https://jswebschool.com/html/html-comments',
  metaOgImage: '',
};


const HTMLComments: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="HTML Comments ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
        In a html file, you might need to put a text there for your reference to understand later what a piece
        of html code is used for. And you want that text only for information purpose and should not be visible on UI.
        That is when we use comments in html file.
        And if we want to comment out some html tags then also we use comments.
        <br/><br/>
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={commentsSnippet} />
    </Layout>
  );
};

export default HTMLComments;
