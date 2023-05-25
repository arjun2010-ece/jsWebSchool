import Layout from '../../components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';

const HTMLPage: NextPage = () => {
  return (
    <Layout sidebar={true} hideAd={true} hideSidebar={true} currentPage={PAGES.HTML}>
      This is HTML first section.
    </Layout>
  );
};

export default HTMLPage;
