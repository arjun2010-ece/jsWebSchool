import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, commentsSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Mastering HTML Comments: Enhancing Code Readability and Collaboration',
  metaDescription:
    'Learn how to use HTML comments effectively with our comprehensive tutorial. Discover the purpose and syntax of HTML comments and how to apply them in your code. Explore best practices for commenting and understand their impact on code readability and maintenance. Level up your HTML skills and create well-documented and organized web pages with HTML comments.',
  metaKeywords:
    'HTML, comments, code documentation, code readability, web development, web design, HTML syntax, best practices, commenting, HTML tutorial, frontend development',
  metaOgTitle: 'HTML Comments: Enhance Code Documentation and Readability',
  metaOgUrl: 'https://www.webschooljs.com/html/html-comments',
  metaOgImage: 'https://www.webschooljs.com/images/html-logo.png',
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
        headingType="h1"
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

      {/* Syntax and Usage */}
      <Heading
        content="Syntax and Usage :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        HTML comments are denoted by <strong> "&lt;!-- "</strong> at the beginning and <strong> "--&gt;"</strong> at the end. Any text or code placed between these delimiters is considered a comment and is ignored by browsers when rendering the web page.
        <br/><br/>
        HTML comments can span multiple lines, making them suitable for providing detailed explanations or documenting complex code sections.
        <br/>
        Here's an example: 
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={commentsSnippet} />

      {/* Benefits and Use Cases */}
      <Heading
        content="Benefits and Use Cases :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        HTML comments offer several benefits and use cases, including:
        <br/><br/>

        <strong>1. Code Documentation:</strong> Comments provide a means to document your code, making it easier for other developers (including yourself) to understand its purpose, functionality, or any specific considerations. Use comments to explain complex logic, clarify intent, or provide helpful tips and reminders.
        <br/><br/>
        <strong>2. Temporary Code Removal:</strong> Comments allow you to temporarily remove or disable portions of HTML code without deleting them entirely. This can be helpful when troubleshooting issues, testing alternative implementations, or experimenting with different design elements.

        <br/><br/>
        <strong>3. Collaboration and Communication:</strong> Comments facilitate collaboration among developers by enabling clear communication within the codebase. Team members can leave notes, suggestions, or warnings for others, fostering a better understanding and smoother workflow.
        
        <br/><br/>
        <strong>4. Debugging and Troubleshooting:</strong> Adding comments around specific code segments or problematic areas can aid in debugging and troubleshooting. Comments can help isolate issues, explain the purpose of certain code blocks, or provide insights into potential solutions.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Best Practices */}
      <Heading
        content="Benefits and Use Cases :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        To make the most of HTML comments, consider the following best practices:
        <br/><br/>
        <strong>Be Clear and Concise:</strong> Write comments that are easy to understand and concise. Use plain language and avoid overly technical jargon.

        <br/><br/>
        <strong>Comment All Code:</strong> Comment important sections of your HTML code, especially those that may be complex, prone to confusion, or require explanation.

        <br/><br/>
        <strong>Update Comments:</strong> Keep comments up to date with the code they describe. If you make changes to the code, ensure that the corresponding comments reflect those changes.

        <br/><br/>
        <strong>Avoid Redundancy:</strong> Only comment when necessary. If the code is self-explanatory or the comment adds no additional value, it's best to omit it.

        <br/><br/>
        <strong>Remove unused Comments:</strong> Regularly review your codebase and remove any comments that are no longer relevant or necessary. This helps maintain a clean and organized code structure.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Conclusion */}
      <Heading
        content="Conclusion :"
        headingType="h6"
        customStyle={tw`underline mb-4 mt-8`}
      />

      <Text
        content={`
        HTML comments are a powerful tool for documentation, communication, and code organization. By using them effectively, you can enhance collaboration, improve code readability, and facilitate debugging and troubleshooting. Remember to follow best practices and maintain consistent commenting practices throughout your HTML codebase to ensure clarity and ease of maintenance.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/html/seo" nextLink="/html/structure-html-ui" />
    </Layout>
  );
};

export default HTMLComments;
