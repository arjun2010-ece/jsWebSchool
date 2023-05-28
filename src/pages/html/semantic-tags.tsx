import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import { PAGES } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
// import Image from 'next/image';
// import styled from 'styled-components';

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
        content="
        The word semantic means meaningful so semantic tags are those html tags which convey the meanings 
        and purpose of why it is used in html markup.
        It is extremely helpful for browsers and developers and they can easily interpret about specific 
        contents based on which semantic tag is used to wrap them.<br/><br/>
        <b>It is very useful, especially for SEO purposes.</b><br/>
        In the past we always used a <b>div</b> tag for headers or footers or literally anything as we did not
        have a dedicated tags for specific purposes.
        But now we have a dedicated tags for headers as well as footers.<br/><br/>
        Some of the most popular tags are::
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        "
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
