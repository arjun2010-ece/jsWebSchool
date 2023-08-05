import Layout from "@/components/layout";
import Heading from "@/components/heading";

const seo = {
  title: "Disclaimer: It explains terms and conditions of using WebSchoolJS",
  metaDescription:
    "Read our disclaimer to understand the terms and conditions of using WebSchoolJS. Get important information about the accuracy and limitations of the content provided on our website.",
  metaKeywords:
    "disclaimer, terms and conditions, website disclaimer, information accuracy, limitations, website policies",
  metaOgTitle: "Disclaimer | WebSchoolJS - Understand our Terms and Conditions",
  metaOgUrl: "https://www.webschooljs.com/disclaimer",
  metaOgImage: "https://www.webschooljs.com/images/webschooljs-logo.png",
};

const extraStyles = `
   margin-bottom: 1rem;
  `;

const DisclaimerPage = () => {
  return (
    <Layout seo={seo}>
      <Heading
        content="Disclaimer"
        headingType="h1"
        customStyle={extraStyles}
      />
      <br />
      <br />
      Last updated: 08/07/23 <br />
      <br />
      The information provided on WebSchoolJS (www.webschooljs.com) is for
      general informational purposes only. While we strive to keep the
      information up to date and accurate, we make no representations or
      warranties of any kind, express or implied, about the completeness,
      accuracy, reliability, suitability, or availability with respect to the
      website or the information, products, services, or related graphics
      contained on the website for any purpose. Any reliance you place on such
      information is therefore strictly at your own risk.
      <br />
      <br />
      In no event will we be liable for any loss or damage, including without
      limitation, indirect or consequential loss or damage, or any loss or
      damage whatsoever arising from loss of data or profits arising out of, or
      in connection with, the use of this website.
      <br />
      <br />
      Through this website, you can visit other websites by following hyperlinks
      to such external sites. While we strive to provide only quality links to
      useful and ethical websites, we have no control over the content and
      nature of these sites. The inclusion of any links does not necessarily
      imply a recommendation or endorsement of the views expressed within them.
      <br />
      <br />
      Please be aware that when you leave our website, other sites may have
      different privacy policies and terms that are beyond our control.
      Therefore, we encourage you to review the privacy policies and terms of
      any third-party websites you visit.
      <br />
      <br />
      <b>Google Analytics and Google AdSense(or any ad network)</b>
      <br />
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
      <b>Changes to This Disclaimer</b>
      <br />
      <br />
      We reserve the right to update or change this disclaimer at any time. Any
      changes will be reflected on this page, and the <q>Last updated</q> date
      at the top of the disclaimer will be modified accordingly. We recommend
      that you periodically review this disclaimer to stay informed about our
      website&apos;s terms and conditions.
      <br />
      <br />
      <b>Contact Us</b>
      <br />
      If you have any questions or concerns regarding this disclaimer or the
      practices of our website, please feel free to contact us via email at
      juhi.iacm@gmail.com.
    </Layout>
  );
};

export default DisclaimerPage;
