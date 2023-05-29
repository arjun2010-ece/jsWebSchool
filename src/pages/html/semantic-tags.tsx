import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES, semanticTagsLink } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import Link from 'next/link';
import styled from 'styled-components';
// import Image from 'next/image';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: underline;
`;

const SemanticTagsPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
    >
      <Heading
        content="Semantic Tags ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />
      <Text
        content={`
        The word semantic means meaningful so semantic tags are those html tags which convey the meanings 
        and purpose of why it is used in html markup.
        It is extremely helpful for browsers and developers and they can easily interpret about specific 
        contents based on which semantic tag is used to wrap them.<br/><br/>
        <b>It is very useful, especially for SEO purposes.</b><br/>
        In the past we always used a <b>div</b> tag for headers or footers or literally anything as we did not
        have a dedicated tags for specific purposes.
        But now we have a dedicated tags for headers as well as footers.<br/><br/>
        Some of the most popular and widely used tags are::
        <ul>
            <li><b>&lt;header&gt;  tag :</b> It is used to describe or wrap the header of a webpage, like 
            the navbar and logos, on top of a webpage.</li>
            <li><b>&lt;footer&gt;  tag :</b> It is used to wrap the footer of a webpage, like 
            copyright informations, website author and its address and some navigational links, on 
            bottom of a webpage.</li>
            <li><b>&lt;nav&gt;  tag :</b> It is used to describe or wrap the navbar either on header, or footer or 
            literally anywhere on a webpage.</li>
            <li><b>&lt;main&gt; tag :</b> It is used to describe or wrap the main content of a webpage.</li>
            <li><b>&lt;article&gt; tag :</b> It is used to wrap an independent and self-contained content 
            on a webpage, like news articles, feeds, blog posts etc.</li>
            <li><b>&lt;section&gt; tag :</b> It is used to wrap a section of content. On a webpage when the 
            content is too big, then its divided into related contents together and each related content
            is caled section on a webpage.</li>
            <li><b>&lt;aside&gt; tag :</b> It is used to wrap or create sidebars on a webpage.</li>
        </ul>
        <br/><br/>
        Some of other less commonly used semantic tags are::
        <ul>
            <li><b>&lt;time&gt; tag :</b> It is used to wrap time or date time</li>
            <li><b>&lt;mark&gt; tag :</b> It is used to wrap highlighted text</li>
            <li><b>&lt;figure&gt; and &lt;figcaption&gt; tag :</b> It is used to wrap an image and its 
            caption together</li>
        </ul>
        <br />
        To read some more semantic tags from official documentations, click below::
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <StyledLink href={semanticTagsLink} target="_blank">
        More semantic tags
      </StyledLink>

      <Text
        content="<br/><b>Note::</b><br/>
        All other tags are non semantic tags such as <b>div</b> or <b>p</b> or <b>span</b> tags and many more
        not defined above. Wherever possible and if it makes sense use semantic tags if it makes sense but do 
        not over-use it,
        just for the sake of using it. Always remember that the SEO boost that you get is really amazing and
        as a frontend developer you need to keep this in mind."
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <Text
        content="<br/>In the next page, we will be studying about many different html tags that we use in day
        to day work and why we use a particular tag and how we make that decision smoothly."
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
    </Layout>
  );
};

export default SemanticTagsPage;
