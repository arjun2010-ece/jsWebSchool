import Layout from "../components/layout";
import Heading from "@/components/heading";
import Text from "@/components/text";
import Image from "next/image";
import { ImageContainer } from "@/styles/Extra.style";

const seo = {
  title: "Webschooljs: Your Gateway to Web Development Skills",
  metaDescription:
    "WebSchoolJS is your ultimate resource for web development tutorials, covering HTML, CSS, JavaScript, Git, React.js, and Node.js. Learn the essential skills and frameworks to become a proficient web developer.",
  metaKeywords:
    "web development tutorials, HTML, CSS, JavaScript, Git, React.js, Node.js, web development resources, learn web development, coding tutorials, beginner-friendly tutorials",
  metaOgTitle: "WebSchoolJS - Learn Web Development with Tutorials & Resources",
  metaOgUrl: "https://www.webschooljs.com/",
  metaOgImage: "https://www.webschooljs.com/images/webschooljs-logo.png",
};

const extraStyles = `
   margin-bottom: 1rem;
   text-align: center;
  `;

const HomePage = () => {
  return (
    <Layout seo={seo}>
      <Heading
        content="Tutorials we Offer"
        headingType="h1"
        customStyle={extraStyles}
      />

      <div className="mb-20 text-center">
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Javascript</p>
        <p>GIT</p>
        <p>React.js</p>
        <p>Node.js</p>
      </div>

      <Heading
        content="Mission of webschooljs  ?"
        headingType="h2"
        customStyle={extraStyles}
      />

      <Text
        content="When i was learning this Frontend skills set then it was very difficult. 
        Because all the resources that you find on web is only theoretical and for practice sake we have only todo list of almost everything.
        Learn css by designing todo pages and learn react by doing todo app. It was disgusting. You simply can not have practical exposure with this way of learning.
        And it will take many years if you are still around in the industry. Thats why I am designing this courses in more practical way so that
        if you are dedicated and regular then within few months you will become a pro and 
        <b>you can crack any frontend react coding challenge </b> easily as 
        i am going to <b>add those challenges as sample app</b> for your learning.
        "
        parentEl="p"
        customStyle={{
          marginTop: "1rem",
          marginRight: "1rem",
          marginLeft: "1rem",
        }}
      />

      <Heading
        content="Why learn frontend in the first place  ?"
        headingType="h2"
        customStyle={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      />
      <Text
        content="Why not learn any other skills such as data analyst or machine learning ?
        The answer to this is very simple. Because of 3 things:
        <ul>
         <li>Huge openings in the market always.</li>
         <li>Most in demand job</li>
         <li>Most secure job</li>
         <li>Can do enough freelancing jobs to earn extra income.</li>
         <li>A lot of remote job options. If you need to go attend your family or kid, 
         you can still finish your work doing it remotely anytime you become free. You do not need to take the whole day leave as in other jobs or other software jobs.
         </li>
        </ul>"
        parentEl="div"
        customStyle={{
          marginTop: "1rem",
          marginRight: "1rem",
          marginLeft: "1rem",
        }}
      />

      <Heading
        content="Is it convincing enough ?"
        headingType="h4"
        customStyle={{ textAlign: "center", marginTop: "1rem" }}
      />
      <Text
        content="Not satisfied enough. Lets check some stats of some job sites such as indeed or linkedin or naukri.
        These stats are for different region : India, USA and worldwide openings in frontend."
        parentEl="p"
        customStyle={{ marginRight: "1rem", marginLeft: "1rem" }}
      />

      <ImageContainer>
        <Image
          src="/images/linkedin_worldwide.jpg"
          alt="Linkedin worldwide frontend stats"
          width={600}
          height={600}
        />
      </ImageContainer>

      <Text
        content="Look more in indeed job site"
        parentEl="p"
        customStyle={{ textAlign: "center" }}
      />

      <ImageContainer>
        <Image
          src="/images/indeed_usa.jpg"
          alt="Indeed usa frontend stats"
          width={600}
          height={600}
        />
      </ImageContainer>

      <Text
        content="And more in Naukri.com"
        parentEl="p"
        customStyle={{ textAlign: "center" }}
      />
      <ImageContainer>
        <Image
          src="/images/naukri_stats.jpg"
          alt="Naukri india frontend stats"
          width={600}
          height={600}
        />
      </ImageContainer>

      <Heading
        content="The arrows in images point to number of openings open for frontend devs."
        headingType="h5"
        customStyle={extraStyles}
      />
      <Text
        content="Even though there are huge number of jobs but the resource to learn in a single place you will never find.
        Thats why i am creating this website to give back to society all my knowledge in a 
        <b>more structured way and in a sequential way</b>. I promise there will be no garbage or exaggerated content.
        In future i might bring videos but for the time being its all contents only."
        parentEl="p"
        customStyle={{
          marginRight: "1rem",
          marginLeft: "1rem",
          marginTop: "1.5rem",
        }}
      />
    </Layout>
  );
};

export default HomePage;
