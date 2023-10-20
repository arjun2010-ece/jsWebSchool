import Link from "next/link";
import Layout from "../components/layout";
import Heading from "../components/heading";
import Text from "@/components/text";
import Image from "next/image";
import { ImageContainer } from "@/styles/Extra.style";
import {
  PAGES,
  HTML_PAGE,
  CSS_PAGE,
  JS_PAGE,
  REACTJS_PAGE,
  GIT_PAGE,
} from "../utils";

const seo = {
  title: "WebSchoolJS: Online Web Development Tutorials on javascript",
  metaDescription:
    "WebSchoolJS is your last resource for web development tutorials, covering HTML, CSS, JavaScript, Git, React.js & Node.js with lots of projects to practice.",
  metaKeywords:
    "WebSchoolJS, web development tutorials, HTML, CSS, JavaScript, Git, React.js, Node.js, web development resources, learn web development, coding tutorials, beginner-friendly tutorials",
  metaOgTitle: "Learn Web Development with Tutorials & projects | WebSchoolJS",
  metaOgUrl: "https://www.webschooljs.com/",
  metaOgImage: "https://www.webschooljs.com/images/webschooljs-logo.png",
};

const extraStyles = `
   margin-bottom: 1rem;
   text-align: center;
  `;

// background: #f2f7f5;

const HomePage = () => {
  return (
    <Layout seo={seo}>
      <div className="pt-20 h-hero bg-grey-100">
        <Heading headingType="h1" customStyle={extraStyles}>
          <span>
            Welcome to WebSchoolJS
            <br />
            Your Ultimate Web Development Learning Hub
          </span>
        </Heading>

        <Text
          content={`<span>Complete your journey from beginner to pro.</span> <br/> Step by step`}
          parentEl="p"
          customStyle={{
            marginTop: "1rem",
            textAlign: "center",
          }}
        />
      </div>

      <Heading
        headingType="h2"
        content="Discover Comprehensive Tutorials Tailored for Your Success"
        customStyle={{
          marginTop: "2rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      />

      <div className="mb-20 text-center dark:text-slate-900">
        <div className="course mb-12">
          <p className="text-base">
            <strong> Learn HTML5</strong>
          </p>
          <div className="flex w-1/5 mx-auto">
            <Link
              href={HTML_PAGE}
              className="border border-gray-400 py-1 px-8 rounded w-full text-blue-700"
            >
              {PAGES?.HTML}
            </Link>
          </div>
        </div>

        <div className="course mb-12">
          <p className="text-base">
            <strong> Learn CSS3</strong>
          </p>
          <div className="flex w-1/5 mx-auto">
            <Link
              href={CSS_PAGE}
              className="border border-gray-400 py-1 px-8 rounded w-full text-blue-700"
            >
              {PAGES?.CSS3}
            </Link>
          </div>
        </div>

        <div className="course mb-12">
          <p className="text-base">
            <strong> Learn Javascript</strong>
          </p>
          <div className="flex w-1/5 mx-auto">
            <Link
              href={JS_PAGE}
              className="border border-gray-400 py-1 px-8 rounded w-full text-blue-700"
            >
              {PAGES?.JAVASCRIPT}
            </Link>
          </div>
        </div>

        <div className="course mb-12">
          <p className="text-base">
            <strong> Learn GIT</strong>
          </p>
          <div className="flex w-1/5 mx-auto">
            <Link
              href={GIT_PAGE}
              className="border border-gray-400 py-1 px-8 rounded w-full text-blue-700"
            >
              {PAGES?.GIT}
            </Link>
          </div>
        </div>

        <div className="course mb-12">
          <p className="text-base">
            <strong> Learn React.js</strong>
          </p>
          <div className="flex w-1/5 mx-auto">
            <Link
              href={REACTJS_PAGE}
              className="border border-gray-400 py-1 px-8 rounded w-full text-blue-700"
            >
              {PAGES?.REACTJS}
            </Link>
          </div>
        </div>
      </div>

      <Heading
        headingType="h2"
        content="Why Choose WebSchoolJS ?"
        customStyle={extraStyles}
      />

      <Heading
        content="Our Mission"
        headingType="h3"
        customStyle={extraStyles}
      />

      <Text
        content="When i was learning this Frontend skillset then it was very difficult. 
        Because all the resources that you find on web is only theoretical and for practice sake we have only todo list of almost everything.
        <br/>
        Learn css by designing todo pages and learn react by doing todo app. It was disgusting. 
        <br/>
        <br/>
        <b>You simply can not have practical exposure with this way of learning.</b>
        <br/>
        <br/>
        And it will take many years if you are still around in the industry. Thats why I am designing this courses in more practical way. 
        And
        if you are dedicated and regular, you'll see progress in just a few months. You'll reach a level where you can confidently call yourself a pro. <br/> 
        <br/>
        With the skills you gain, you'll be able to crack any frontend coding challenge with ease. Additionally, I'll be adding those challenges as sample apps to aid your learning."
        parentEl="p"
        customStyle={{
          marginTop: "1rem",
          marginRight: "1rem",
          marginLeft: "1rem",
        }}
      />

      <Heading
        content="Why learn frontend in the first place  ?"
        headingType="h3"
        customStyle={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      />
      <Text
        content="<b>Why not learn any other skills such as data analyst or machine learning ?</b>
        <br/>
        The reason is straightforward. It boils down to five major factors:
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
        headingType="h3"
        customStyle={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      />
      <Text
        content="Not satisfied enough. Lets check some stats of some job sites such as indeed or linkedin or naukri.
        These stats are for different region : India, USA and worldwide openings in frontend.
        <br/>
        <br/>
        Look at linkedin stats for frontend jobs:
        "
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
        customStyle={{ textAlign: "center", marginTop: "2rem" }}
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
        customStyle={{ textAlign: "center", marginTop: "2rem" }}
      />
      <ImageContainer>
        <Image
          src="/images/naukri_stats.jpg"
          alt="Naukri india frontend stats"
          width={600}
          height={600}
        />
      </ImageContainer>

      <Text
        content="<b>**The arrows in images point to number of openings open for frontend devs.</b>"
        parentEl="p"
        customStyle={extraStyles}
      />
      <Text
        content="There's a vast number of job opportunities in the field. However, finding a single resource that offers comprehensive learning is a challenge. 
        <br/>
        <br/>
        That's the reason behind creating this website. I aim to give back to society by sharing my knowledge in a <b>structured and sequential manner and in most complete way</b>. I assure you, there will be no irrelevant or exaggerated content. While I might introduce videos in the future, for now, it's all written content."
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
