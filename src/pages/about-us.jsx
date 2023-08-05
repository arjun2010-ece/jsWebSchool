import Layout from '@/components/layout';
import Heading from '@/components/heading';

const seo = {
  title: 'About us: Learn about webschooljs and why it was born.',
  metaDescription:
    'Discover WebSchoolJS, a comprehensive web development tutorial website offering high-quality resources and tutorials for aspiring developers. Learn HTML, CSS, JavaScript, and more. Start your journey to becoming a skilled web developer today',
  metaKeywords:
    'web development tutorials, HTML, CSS, JavaScript, web development resources, learn web development, beginner-friendly tutorials, web development skills, coding tutorials',
  metaOgTitle:
    'About Us - WebSchoolJS: Comprehensive Web Development Tutorials & Resources',
  metaOgUrl: 'https://www.webschooljs.com/about-us',
  metaOgImage: 'https://www.webschooljs.com/images/webschooljs-logo.png',
};

const extraStyles = `
   margin-bottom: 1rem;
  `;

const AboutUsPage = () => {
  return (
    <Layout seo={seo}>
      <Heading
        content="About Us"
        headingType="h1"
        // customStyle={tw`mb-4`}
        customStyle={extraStyles}
      />
      
      <br />
      <br />
      Welcome to WebSchoolJs!
      <br />
      <br />
      At WebSchoolJS, our mission is to provide high-quality web development
      tutorials and resources to help aspiring developers learn and enhance
      their skills in web development.
      <br />
      <br />
      <b>Who We Are</b> <br />
      We are a team of passionate web developers who have extensive experience
      in the industry. Our expertise covers a wide range of web technologies,
      including HTML, CSS, JavaScript, and various frameworks and libraries. We
      are dedicated to sharing our knowledge and helping individuals from all
      backgrounds and skill levels to succeed in web development.
      <br />
      <br />
      <b>What We Offer</b>
      <br />
      On our website, you will find a wide range of tutorials, articles, and
      resources related to web development. We cover topics such as front-end
      development, back-end development, responsive design, web performance
      optimization, and more. Our tutorials are carefully crafted to be
      beginner-friendly, yet comprehensive enough to provide valuable insights
      for more advanced developers.
      <br />
      <br />
      <b>Google Analytics and Google AdSense(or any ad network)</b>
      <br />
      To improve our website and provide relevant content and advertisements, we
      utilize Google Analytics and very soon will use Google AdSense (or any ad
      network). These services help us gather statistical information about our
      visitors, such as demographics, interests, and browsing behavior. This
      data is used to analyze website traffic, understand user preferences, and
      optimize our content and ad placements. Please note that these services
      may collect and use personal information as per their respective privacy
      policies.
      <br />
      <br />
      <b>Our Commitment to Quality</b>
      <br />
      We strive to ensure that all our tutorials and resources are accurate,
      up-to-date, and of the highest quality. Our content is regularly reviewed
      and updated to reflect the latest trends and best practices in web
      development. We value your feedback and suggestions, and we welcome any
      comments or questions you may have regarding our content.
      <br />
      <br />
      <b>Get in Touch</b>
      <br />
      We prioritize the security of your personal information and take
      reasonable measures to protect it. However, please note that no method of
      transmission over the internet or electronic storage is 100% secure, and
      we cannot guarantee absolute security.
      <br />
      <br />
      <b> Third-Party Websites and Services</b>
      <br />
      We love hearing from our users! If you have any inquiries, suggestions, or
      feedback, please don&apos;t hesitate to reach out to us. You can contact
      us via email at [your-email-address]. We will make every effort to respond
      to your inquiries promptly.
      <br />
      <br />
      Thank you for choosing WebSchoolJS as your learning resource for web
      development. We hope you find our tutorials helpful and enjoy your journey
      to becoming a skilled web developer!
    </Layout>
  );
};

export default AboutUsPage;
