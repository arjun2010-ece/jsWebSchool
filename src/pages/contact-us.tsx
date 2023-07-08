import Layout from '@/components/layout';
import { type NextPage } from 'next';

const seo = {
  title: 'Disclaimer',
  metaDescription:
    'Read our disclaimer to understand the terms and conditions of using WebSchoolJS. Get important information about the accuracy and limitations of the content provided on our website.',
  metaKeywords:
    'disclaimer, terms and conditions, website disclaimer, information accuracy, limitations, website policies',
  metaOgTitle: 'Disclaimer | WebSchoolJS - Understand our Terms and Conditions',
  metaOgUrl: 'https://www.webschooljs.com/disclaimer',
  metaOgImage: '',
};

const ContactUsPage: NextPage = () => {
  return (
    <Layout seo={seo}>
      Contact Us
      <br />
      <br />
      Thank you for visiting WebSchoolJS! If you have any questions, feedback,
      or inquiries, please feel free to reach out to us using the contact
      information provided below.
      <br />
      <br />
      General Inquiries: <br />
      Email: juhi.iacm@gmail.com
      <br />
      <br />
      <b>Advertising and Partnership Inquiries:</b>
      <br />
      For advertising opportunities or partnership inquiries, please contact us
      at juhi.iacm@gmail.com.
      <br />
      <br />
      <b>Data Privacy and Cookies:</b> <br />
      For information about how we handle your personal data and the use of
      cookies on our website, please refer to our Privacy Policy.
      <br />
      <br />
      <b>Google Analytics and Google AdSense(or any ad network)</b>
      <br />
      We use Google Analytics and Google AdSense(or any ad network) on this
      website to collect information about user behavior and to display
      advertisements. These services may use cookies, web beacons, and other
      tracking technologies to track and collect data about you and your
      activities on our website and other websites. This information is used to
      provide targeted advertisements and to analyze website usage.
      <br />
      <br />
      You can learn more about how Google collects and processes your data by
      visiting the following links:
      <br />
      https://policies.google.com/privacy?hl=en-US
      <br />
      <br />
      By using this website, you consent to the processing of data about you by
      Google in the manner and for the purposes set out in their respective
      privacy policies.
      <br />
      <br />
      Please note that while we make efforts to respond to your inquiries in a
      timely manner, it may take us a few business days to get back to you. We
      appreciate your patience and understanding.
      <br />
      <br />
      Thank you for your interest in WebSchoolJs.
    </Layout>
  );
};

export default ContactUsPage;
