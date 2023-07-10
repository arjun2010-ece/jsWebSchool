import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw from 'twin.macro';
import Heading from '@/components/heading';

const seo = {
  title:
    'Privacy Policy: How we collect, use, and protect your personal information.',
  metaDescription:
    'Learn about our privacy policy at WebSchoolJS. Discover how we collect, use, and protect your personal information. Stay informed about our data practices and your rights.',
  metaKeywords:
    'privacy policy, data protection, personal information, website privacy, data security',
  metaOgTitle: 'Privacy Policy | WebSchoolJS - Learn Web Development Tutorials',
  metaOgUrl: 'https://www.webschooljs.com/privacy-policy',
  metaOgImage: 'https://www.webschooljs.com/images/webschooljs-logo.png',
};

const PrivacyPolicyPage: NextPage = () => {
  return (
    <Layout seo={seo}>
      <Heading
        content="Privacy Policy"
        headingType="h1"
        customStyle={tw`mb-4`}
      />
      <br />
      <br />
      Last updated: 08/07/23 <br />
      <br />
      At WebSchoolJS, accessible from
      <strong> www.webschooljs.com</strong>, the privacy of our visitors is of
      utmost importance to us. This Privacy Policy document outlines the types
      of personal information that is received and collected by WebSchoolJS and
      how it is used.
      <br />
      <br />
      <b>Information We Collect</b> <br />
      We do not collect any personal information as it is a tutorial website,
      where no signup or login is required. The information we collect may
      include: <br />
      <br />
      1. Non-personal identification information, such as browser type, device
      information, and IP address, automatically collected through the use of
      cookies and other tracking technologies.
      <br />
      <br />
      <b>Google Analytics</b>
      <br />
      We use Google Analytics to analyze the usage of our website and gather
      statistical information. Google Analytics uses cookies and other tracking
      technologies to collect and store data about your use of our website. This
      information is processed in a way that does not personally identify
      individuals.
      <br />
      <br />
      For more information on how Google Analytics handles user data, please
      refer to Google&apos;s Privacy Policy:
      https://policies.google.com/privacy?hl=en-US.
      <br />
      <br />
      <b>Google AdSense or other ad network</b>
      <br />
      We will implement very soon Google AdSense or other ad network on our
      website to display advertisements. Ad networks uses cookies to serve ads
      based on your visit to our website and other sites on the Internet. These
      cookies enable Google and its partners to personalize the ads you see and
      analyze ad performance.
      <br />
      <br />
      For more information on how Google AdSense uses cookies and handles user
      data, please refer to Google&apos;s Privacy Policy:
      https://policies.google.com/privacy?hl=en-US.
      <br />
      <br />
      <b>How We Use Your Information</b>
      <br />
      The information we collect from you may be used in the following ways:
      <br />
      <br />
      1. To improve our website: We constantly strive to enhance our
      website&apos;s content and user experience based on the feedback and
      information we receive from you. <br />
      2. To personalize your experience: We may use the information provided to
      customize your experience and deliver relevant content, features, and
      advertisements. <br />
      3. To send periodic emails: If you have subscribed to our newsletter, we
      may use your email address to send you updates, news, and related
      information. You can always opt out of receiving these emails by following
      the unsubscribe instructions provided in each email.
      <br />
      <br />
      <b>Data Security</b>
      <br />
      We prioritize the security of your personal information and take
      reasonable measures to protect it. However, please note that no method of
      transmission over the internet or electronic storage is 100% secure, and
      we cannot guarantee absolute security.
      <br />
      <br />
      <b> Third-Party Websites and Services</b>
      <br />
      Our website may contain links to external websites or services that are
      not owned or controlled by WebSchoolJS. Please note that we have no
      control over the content and practices of these third-party websites, and
      we cannot be held responsible for their privacy policies or practices. We
      encourage you to review the privacy policies of these third-party websites
      before providing any personal information.
      <br />
      <br />
      <b> Changes to This Privacy Policy</b>
      <br />
      We reserve the right to update or revise this Privacy Policy at any time.
      Any changes will be reflected on this page, and the <q>
        Last updated
      </q>{' '}
      date at the top of the policy will be modified accordingly. We recommend
      that you periodically review this Privacy Policy to stay informed about
      how we collect, use, and protect your personal information.
      <br />
      <br />
      <b>Contact Us</b>
      <br />
      If you have any questions or concerns regarding this Privacy Policy or the
      practices of our website, please feel free to contact us via email at
      juhi.iacm@gmail.com.
    </Layout>
  );
};

export default PrivacyPolicyPage;
