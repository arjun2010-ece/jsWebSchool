import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';

const JSHomePage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.JAVASCRIPT}
    >
      <Heading
        content="What is Javascript ?"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content=" Javascript is the scripting language.
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

export default JSHomePage;
