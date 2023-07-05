import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, seoTagsSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';
import ResponsiveImage from '@/components/responsive-image';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'What is SEO ?',
  metaDescription:
    'Master the fundamentals of SEO (Search Engine Optimization) with our comprehensive tutorial. Learn how to optimize your HTML web pages to improve visibility in search engine results. Discover techniques for keyword research, meta tags, heading tags, image optimization, and more. Level up your web development skills and drive organic traffic to your website with effective SEO strategies.',
  metaKeywords:
    'SEO, Search Engine Optimization, HTML optimization, keyword research, meta tags, heading tags, image optimization, web development, web design, organic traffic, frontend development, HTML tutorial',
  metaOgTitle: 'SEO: Mastering Search Engine Optimization for Your Website',
  metaOgUrl: 'https://jswebschool.com/html/seo',
  metaOgImage: '/images/html-logo.png',
};

const HTMLSeoPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="SEO ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
       SEO stands for search engine optimization. <br/>
       Search engine optimization (SEO) tags are very important for increasing the visibility and discoverability of web pages in search engine results. Useful information about the structure and content of your website may be sent to search engines by using appropriate HTML tags. We'll examine the crucial SEO tags in this lesson and how they might improve the search engine optimization of your web pages.
       <br/><br/>
       <strong>The purpose of learning this topic is :</strong> Once your websites are ready and you host
       it on a domain. Now how will people search your websites on internet out of millions of websites ?? <br/>
       Its mostly by search engine bots, which will search for specific keywords and terms, which normally users search on browsers and then will rank your website
       higher or lower on search results. The higher your website comes, more people will access your website. That is why we need SEO.
       <br/><br/>
       Now there are many <b>meta</b> tags which help in this direction::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={seoTagsSnippet} />

      <Text
        content={`<br/>
        These meta tags are inside head tags in a html page. Now the first two meta tags with name "description" and name "keywords"
        are the tags very useful for search engine bots to read and then rank accordingly. The content attribute is what you need to 
        change and modify for getting better ranking of your website on google or yahoo or literally anything.
        <br/><br/>
        Now the last 4 meta tags (og:*) are for sharing on platforms such as twitter, facebook or literally anything.
        When you share the url, then how should it look on that platform, for ex: facebook. The way the shared items title(og: title), 
        description(og: description),
        url(og: url) and image(og: image) looks, we can customise that here.<br/><br/>
        Now it matters a lot for search engine bots if the page is shareable and it ranks much higher.
        For example if a page is shared then it looks something like below.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      {/* Responsive image */}
      <ResponsiveImage
        srcUrl="/images/seo_image.jpg"
        altText="SEO image"
        boxHeight="400px"
      />

       {/* NavigationIcon : Front and Back Link */}
       <NavigationIcon prevLink="/html/audio-video" nextLink="/html/html-comments" />
    </Layout>
  );
};

export default HTMLSeoPage;
