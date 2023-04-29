import Layout from '../components/layout';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import tw from 'twin.macro';
import Image from 'next/image';
import { ImageContainer } from '@/styles/Extra.style';

const Home = () => {
  return (
    <Layout>
      <Heading
        content="Mission of jsWebSchool  ?"
        headingType="h1"
        customStyle={tw`text-center mb-4`}
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
        customStyle={tw`mt-4 text-3xl mx-4`}
      />

      <Heading
        content="Why learn frontend in the first place  ?"
        headingType="h2"
        customStyle={tw`text-center mt-8 mb-4 font-bold`}
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
        customStyle={tw`mt-4 text-3xl  mx-4`}
      />

      <Heading
        content="Is it convincing enough ?"
        headingType="h4"
        customStyle={tw`text-center mt-4`}
      />
      <Text
        content="Not satisfied enough. Lets check some stats of some job sites such as indeed or linkedin or naukri.
        These stats are for different region : India, USA and worldwide openings in frontend."
        parentEl="p"
        customStyle={tw`text-3xl mx-4`}
      />
      <ImageContainer>
        <Image
          src="/images/linkedin_worldwide.jpg"
          alt="Picture of the author"
          width={600}
          height={600}
        />
      </ImageContainer>
      <Text
        content="Look more in indeed job site"
        parentEl="p"
        customStyle={tw`text-3xl text-center`}
      />
      <ImageContainer>
        <Image
          src="/images/indeed_usa.jpg"
          alt="Picture of the author"
          width={600}
          height={600}
        />
      </ImageContainer>

      <Text
        content="And more in Naukri.com"
        parentEl="p"
        customStyle={tw`text-3xl text-center`}
      />
      <ImageContainer>
        <Image
          src="/images/naukri_stats.jpg"
          alt="Picture of the author"
          width={600}
          height={600}
        />
      </ImageContainer>

      <Heading
        content="The arrows in images point to number of openings open for frontend devs."
        headingType="h5"
        customStyle={tw`text-center mt-4`}
      />
      <Text
        content="Even though there are huge number of jobs but the resource to learn in a single place you will never find.
        Thats why i am creating this website to give back to society all my knowledge in a 
        <b>more structured way and in a sequential way.</b>. I promise there will be no garbage or exaggerated content.
        In future i might bring videos but for the time being its all contents only."
        parentEl="p"
        customStyle={tw`text-3xl mx-4 mt-6`}
      />
    </Layout>
  );
};

export default Home;
