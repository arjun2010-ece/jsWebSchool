import Layout from '../../components/layout';
import { type NextPage } from 'next';
import { PAGES } from '@/utils';

const BlockInlinePage: NextPage = () => {
  return (
    <Layout sidebar={true} hideAd={true} hideSidebar={true} currentPage={PAGES.HTML}>
      This is HTML second section : block vs inline vs block element
    </Layout>
  );
};

export default BlockInlinePage;
