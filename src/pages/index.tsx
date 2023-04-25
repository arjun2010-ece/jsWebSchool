import Layout from '../components/layout';
import Heading from '@/components/heading';

const Home = () => {
  return (
    <Layout>
      <Heading content="New heading" headingType="h1" />
      <Heading content="Small heading" headingType="h4" />
      <Heading content="Small heading" headingType="h5" />
      <Heading content="Small heading" headingType="h6" />
    </Layout>
  );
};

export default Home;
