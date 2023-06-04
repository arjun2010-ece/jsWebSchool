import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';
import tw, { theme as globalTheme, css } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';

const CSSPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.CSS3}
    >
      <Heading
        content="What is CSS3 ?"
        headingType="h5"
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
         And second missing opportunities to understand how can you think and what parameters to think for styling elements.
         <br/><br/>
         Now for solving the first problem, i am grouping all the major properties in specific groups that you <b>MUST REMEMBER</b>
         for really mastering css. This is the most important stage. Without this, you <b>CAN NEVER</b> be good enough to write good css.
         <br/> <br/>
         And for second, i will provide good examples with explanantion so that you can get ample practice.
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

export default CSSPage;
