import Layout from '@/components/layout';
import { type NextPage } from 'next';

const seo = {
  title: 'Terms of Service',
  metaDescription:
    'Read and understand the Terms of Service for WebSchoolJS, a tutorial website for web development. Learn about our content, intellectual property, limitations, and more.',
  metaKeywords:
    'terms of service, website terms, legal agreements, intellectual property, content usage, limitations, website policies',
  metaOgTitle: 'WebSchoolJS Terms of Service: Understand Our Website Policies',
  metaOgUrl: 'https://www.webschooljs.com/terms-service',
  metaOgImage: '',
};

const TermsOfServicePage: NextPage = () => {
  return (
    <Layout seo={seo}>
      Terms of Service <br />
      <br />
      Last updated: 08/07/23 <br />
      <br />
      Please read these Terms of Service (<q>Terms</q>) carefully before using
      www.webschooljs.com (the <q>Website</q>) operated by WebSchoolJS (
      <q>me</q>).
      <br />
      <br />
      By accessing or using the Website, you agree to be bound by these Terms.
      If you disagree with any part of the Terms, then you may not access the
      Website.
      <br />
      <br />
      <b>Content and Intellectual Property</b>
      <br />
      <br />
      The Website and its original content, features, and functionality are
      owned by WebSchoolJS and are protected by international copyright,
      trademark, patent, trade secret, and other intellectual property or
      proprietary rights laws.
      <br />
      <br />
      You may not modify, reproduce, distribute, create derivative works,
      publicly display or perform, or in any way exploit any of the content,
      software, materials, or services available on the Website, except as
      expressly permitted by WebSchoolJS.
      <br />
      <br />
      <b>Third-Party Services and Links</b>
      <br />
      <br />
      The Website may contain links to third-party websites or services that are
      not owned or controlled by WebSchoolJS. We have no control over, and
      assume no responsibility for, the content, privacy policies, or practices
      of any third-party websites or services. You acknowledge and agree that
      WebSchoolJS shall not be responsible or liable, directly or indirectly,
      for any damage or loss caused or alleged to be caused by or in connection
      with the use of or reliance on any such content, goods, or services
      available on or through any such websites or services.
      <br />
      <br />
      <b>Google Analytics and Google AdSense(or any ad network)</b>
      <br />
      <br />
      WebSchoolJS uses Google Analytics and Google AdSense(or any ad network) on the Website to
      track and analyze website usage and to display relevant advertisements. By
      using the Website, you agree to be bound by Google&apos;s Terms of Service and
      Privacy Policy as they pertain to Google Analytics and Google AdSense.
      <br />
      <br />
      <b>Limitation of Liability</b>
      <br />
      <br />
      In no event shall WebSchoolJS, its directors, employees, partners, agents,
      suppliers, or affiliates be liable for any indirect, incidental, special,
      consequential, or punitive damages, including without limitation, loss of
      profits, data, use, goodwill, or other intangible losses, resulting from
      (i) your access to or use of or inability to access or use the Website;
      (ii) any conduct or content of any third party on the Website; (iii) any
      content obtained from the Website; or (iv) unauthorized access, use, or
      alteration of your transmissions or content, whether based on warranty,
      contract, tort (including negligence), or any other legal theory, whether
      or not we have been informed of the possibility of such damage.
      <br />
      <br />
      <b>Indemnification</b>
      <br />
      <br />
      You agree to indemnify and hold harmless WebSchoolJS, its directors,
      employees, partners, agents, suppliers, or affiliates from and against any
      claims, liabilities, damages, judgments, awards, losses, costs, expenses,
      or fees (including reasonable attorneys&apos; fees) arising out of or relating
      to your violation of these Terms or your use of the Website.
      <br />
      <br />
      <b>Governing Law</b>
      <br />
      <br />
      These Terms shall be governed by and construed in accordance with the laws
      of India, without regard to its conflict of law provisions. Any
      dispute arising from or relating to the subject matter of these Terms
      shall be exclusively subject to the jurisdiction of the courts in India.
      <br />
      <br />
      <b>Changes to These Terms</b>
      <br />
      <br />
      We reserve the right to update or revise these Terms at any time without
      prior notice. Any changes will be effective immediately upon posting the
      updated Terms on the Website. By continuing to access or use the Website
      after any revisions become effective, you agree to be bound by the revised
      Terms.
      <br/><br/>
      <b>Contact Us</b>
      <br />
      If you have any questions or concerns regarding this Privacy Policy or the
      practices of our website, please feel free to contact us via email at
      juhi.iacm@gmail.com.
    </Layout>
  );
};

export default TermsOfServicePage;
