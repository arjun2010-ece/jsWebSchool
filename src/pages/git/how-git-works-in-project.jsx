import Layout from '@/components/layout';
import {
  PAGES,
  gitAddAllSnippet,
  gitCommitSnippet,
  gitInitAndDeInitSnippet,
  gitRemoteSnippet,
  gitSecondSnippet,
} from '@/utils';
import globalTheme from "@/styles/theme";
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/text';
import CodeSnippet from '@/components/codeSnippet';
import ResponsiveImage from '@/components/responsive-image';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'How GIT works in project',
  metaDescription:
    'Gain a deep understanding of how GIT works in a project with our comprehensive GIT tutorial. Learn about branching, merging, commits, remote repositories, and collaboration workflows to effectively manage and track changes in your projects using GIT.',
  metaKeywords:
    'GIT, version control, HTML tutorial, GIT tutorial, project management, branching, merging, commits, remote repositories, collaboration workflows',
  metaOgTitle:
    'Demystifying GIT in Projects: A GIT Tutorial on Understanding Version Control',
  metaOgUrl: 'https://www.webschooljs.com/git/how-git-works-in-project',
  metaOgImage: 'https://www.webschooljs.com/images/git-logo.png',
};

const HowGitWorksInProjectPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.GIT}
      seo={seo}
    >
      <Heading
        content="How GIT works in project ?"
        headingType="h1"
        customStyle={{marginBottom: "1rem"}}
      />

      <Text
        content={`
        The way GIT works in a project is something like this: <br/><br/> 
        1. Set up a project locally, initialise git (make the project folder a git repository).<br/> 
        2. add all the changed files of project in GIT.<br/> 
        3. COMMIT changes in GIT.<br/> 
        4. then push local repository.<br/> 
        5. Make a PR/MR towards your master/develop branch in remote github.com or gitlab.com or bitbucket.com and then after review merge it.
        <br/>
        <br/>
        Some exceptions like merge conflict may occur and different situations like rolling back some changes etc which will be dealt also but lets study above process in detail with corresponding commands.
        <br/><br/>
        <blockquote>
        GIT has 3 conceptual tables and all commands push changes from one table to other, while clearing the earlier table. The 3 tables are: <strong>Local Git Table, Staging table</strong> and <strong>remote table.</strong>
        </blockquote>,
        <br/>
        Now we will integrate git commands and concepts along with git tables concept. It is extremely important to master GIT.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
       <u> <strong>Team Lead or Senior Developer does the primary steps in Git:</strong></u>
        <br/><br/>
        <strong>1. Initialise GIT:</strong>
        <br/>
        <i>It means make a local project in your local system a git repository.</i> It can be done only once. The purpose of doing this
        is so that many people can work on the same project by sharing the codebase and merging changes together while working parallelly.
        Now we can anytime make this project opt out of being git repository also, deinitialise a repository.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={gitInitAndDeInitSnippet} />

      <Text
        content={`<br/>
        <strong>2. Add all the changed files in GIT:</strong>
        <br/>
        After making the project a git repository in earlier step, now you might want to write a feature or do some code changes in your project. Once you finish your work, <strong>then add all of those changed files in GIT</strong> by below command. And this command will move all the changes into
        <strong>Local GIT table</strong> too.
        <br/><br/>
        If you run the command <span style="border: 1px solid black" class="px-1 mr-2"> git status</span> before firing below command, then in terminal all the changed files will look in dark red color.
        But if you run the same command after firing below command, then in terminal all the changed files will look in dark green color.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={gitAddAllSnippet} />

      <Text
        content={`<br/>
        <strong>3. Commit changes in GIT:</strong>
        <br/>
        Commit means grouping changes in above files under a user given description describing the purpose for changing the files.
        Whenever we push or pull our changes from remote repository, we infact do not push/pull the entire project but only the commits or group of changes in files or folders.<br/>
        Next, <strong> commit all of those changed files in GIT</strong> by below command. 
        <br/>
        And this command will move all the added changes from <i>local git table</i> into
        <strong>Staging table</strong> and make the previous table empty.
        <br/><br/>
        If you run the command <span style="border: 1px solid black" class="px-1 mr-2"> git status</span> before firing below command, then in terminal all the changed files will look in dark green color.
        But if you run the same command after firing below command, then in terminal nothing will appear in terminal except a message that working tree clean.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={gitCommitSnippet} />

      <Text
        content={`<br/>
        <strong>4. Make a remote repository:</strong>
        <br/>
       <strong>Remote</strong> or remote repository means repository on 
       <strong>https://github.com/</strong> or <strong>https://bitbucket.org/</strong> or other servers.
       Go on any URL, here we go to github.com and then signup and login with username and password. Then click on <strong>Create a New repository</strong> and then give a proper name of repository. Once you click on create button then some commands will appear but we are interested only in adding <strong>remote</strong> address command and then pushing command.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <ResponsiveImage
        srcUrl="/images/git-remote.jpg"
        altText="remote repository block"
      />

      <Text
        content={`<br/><br/>
        <strong>5. Push local changes to server: </strong>
        In the above image, we find a lot of commands but we will use only 3 commands, but first command is not mandatory. Second and third is mandatory. 
        And third command is what really pushes the branch on remote.
        <br/>
        <br/>
        Also this command pushes change into <strong>remote table</strong> too, so even if our system crashes or any data is lost locally our changes will not be impacted and we can access it anytime from server.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={gitRemoteSnippet} />

      <Text
        content={`<br/><br/><br/>
        <strong><u>Steps done by normal developers :</u></strong>
        <br/>
        <br/>
        Now that was for the first time push and was mostly done by a <strong>Team Lead or senior developer</strong> who pushed our standard branch i.e <strong>main</strong>
        branch in this case to remote. Now everyone in the team will first clone the repository into our local system and then make a new branch out of that locally based on the feature your are going to write e.g "creating a navbar" so branch can be named as "feature/creating_navbar", write our changes into that repository. Then add those files into git (as shown in above) and then commit and then push as shown (while pushing branch name will be "feature/creating_navbar"). This push will push local branch into remote.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={gitSecondSnippet} />

      <Text
        content={`<br/>
        <strong>5. Make a PR/MR on github.com or bitbucket : </strong>
        PR(Pull request) or MR(Merge request) means same thing and that is merging changes(or commits)
        from your remote feature branch into master/develop/main branch (where everyone merges their code and pulls the fresh copy to write new features).
        <br/><br/>
        Now once we push our local branch on remote as shown above, now we got to github.com and on our project repository and find the oprion of <strong>creating a New Pull request or Merge request</strong> and then select sourch branch as our feature branch and destination branch as our standard branch i.e main(in this case) but can be develop/master or anything also and then create it. 
        <br/><br/>
        If you work in a team then at this stage you ask your senior to review it and merge it. If you work alone then you will have to merge it. And this merge will merge the commits or changed files into remote standard branch i.e main here. 
        <br/><br/>
        Now everytime you have to write a new feature, you are going to follow the steps as mentioned in <strong>"Steps done by normal developers"</strong> only.
        `}
        parentEl="section"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/git/setup-git"
        nextLink="/git/popular-git-commands"
      />
    </Layout>
  );
};

export default HowGitWorksInProjectPage;
