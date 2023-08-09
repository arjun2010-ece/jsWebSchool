import Layout from '@/components/layout';
import {
  PAGES,
  gitInstallLinuxSnippet,
  gitInstallMacSnippet,
  gitInstallRedHatSnippet,
  gitVerifySnippet,
} from '@/utils';
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Working with GIT: Setup and Configuration for Efficient Collaboration',
  metaDescription:
    'Get started with setting up GIT, the essential version control system, in our detailed HTML tutorial. Learn how to install GIT, configure user settings, create repositories, and start tracking changes in your projects effortlessly.',
  metaKeywords:
    'GIT, version control, HTML tutorial, GIT tutorial, setting up GIT, install GIT, configure user settings, create repositories, track changes',
  metaOgTitle:
    'Setting up GIT: A Comprehensive HTML Tutorial for Version Control Setup',
  metaOgUrl: 'https://www.webschooljs.com/git/setup-git',
  metaOgImage: 'https://www.webschooljs.com/images/git-logo.png',
};

const SetUpGitPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.GIT}
      seo={seo}
    >
      <Heading
        content="Setting up GIT ?"
        headingType="h1"
        customStyle={{marginBottom: "1rem"}}
      />

      <Text
        content={`
        Depending on the system you use for development, mostly <strong>linux</strong> or 
        <strong>mac</strong> are preferrable for development and <i>we will discuss git installation in these systems.</i>
        <br/><br/>
        1. The first step is always to verify if GIT is installed in the system or not by below command:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />
      <CodeSnippet content={gitVerifySnippet} />

      <Text
        content={`<br/>
        If you get some version numbers like <strong>0.1.5</strong> or something means GIT is already installed. If not then first thing first, you need to install GIT in your system to use it.
        <br/>
        <br/>
        Now lets install GIT in linux system as :
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={gitInstallLinuxSnippet} />

      <Text
        content={`<br/><br/>
        If your system is Red Hat-based systems like Fedora, then you install GIT like below:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={gitInstallRedHatSnippet} />

      <Text
        content={`<br/><br/>
        If your system is <strong>mac</strong>, then you install GIT like below:
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={gitInstallMacSnippet} />

      <Text
        content={`<br/><br/>
        Now if you type the comnmand <span style="border: 1px solid black;" class="px-2 mr-2">git --version
        </span> on your terminal now after installation then you will get some version number indicating that it is installed.
        <br/><br/>
        Next the whole process is something like this: Set up a project locally, initialise git (make the project folder a git repository), add all files of project in GIT then COMMIT and then push it.
        <br/>
        Some exceptions like merge conflict may occur and different situations like rolling back some changes etc which will be dealt also.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/git" nextLink="/git/how-git-works-in-project" />
    </Layout>
  );
};

export default SetUpGitPage;
