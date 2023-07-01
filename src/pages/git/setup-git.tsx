import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, gitInstallLinuxSnippet, gitInstallMacSnippet, gitInstallRedHatSnippet, gitVerifySnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const SetUpGitPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.GIT}
    >
      <Heading
        content="Setting up GIT ?"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Depending on the system you use for development, mostly <strong>linux</strong> or 
        <strong>mac</strong> are preferrable for development and <i>we will discuss git installation in these systems.</i>
        <br/><br/>
        1. The first step is always to verify if GIT is installed in the system or not by below command:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
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
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gitInstallLinuxSnippet} />

      <Text
        content={`<br/><br/>
        If your system is Red Hat-based systems like Fedora, then you install GIT like below:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gitInstallRedHatSnippet} />

      <Text
        content={`<br/><br/>
        If your system is <strong>mac</strong>, then you install GIT like below:
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
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
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
     
    </Layout>
  );
};

export default SetUpGitPage;