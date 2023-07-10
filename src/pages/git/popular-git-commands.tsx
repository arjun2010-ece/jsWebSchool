import Layout from '@/components/layout';
import { type NextPage } from 'next';
import {
  PAGES,
  gitBranchSyntax,
  gitCheckoutSyntax,
  gitCloneSyntax,
  gitFetchSyntax,
  gitMergeSyntax,
  gitStatusSyntax,
} from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';
import NavigationIcon from '@/components/navigationIcon';

const seo = {
  title: 'Popular git commands',
  metaDescription:
    'Explore a compilation of popular GIT commands in our concise GIT tutorial. Learn how to initialize a repository, add files, commit changes, create branches, merge branches, push to remote repositories, and more. Enhance your productivity and efficiency with these essential GIT commands.',
  metaKeywords:
    'GIT, version control, HTML tutorial, GIT tutorial, popular commands, initialize repository, add files, commit changes, create branches, merge branches, push to remote repositories',
  metaOgTitle:
    'Mastering Popular GIT Commands: A GIT Tutorial for Effective Version Control',
  metaOgUrl: 'https://www.webschooljs.com/git/popular-git-commands',
  metaOgImage: 'https://www.webschooljs.com/images/git-logo.png',
};

const PopularGitCommandsPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.GIT}
      seo={seo}
    >
      <Heading
        content="Popular GIT commands"
        headingType="h1"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        Some of the popular GIT commands and their usage:
        <br/>
        <br/>
        <strong>1. git init</strong> <br/>       
        <strong>2. git clone</strong> <br/>       
        <strong>3. git branch</strong> <br/>       
        <strong>4. git checkout</strong> <br/>       
        <strong>5. git add</strong> <br/>       
        <strong>6. git commit</strong> <br/>       
        <strong>7. git push</strong> <br/>       
        <strong>8. git pull</strong> <br/>       
        <strong>9. git merge</strong> <br/>       
        <strong>10. git status</strong> <br/> 
        <br/>   
        Here we will explain only few, as others are explained in earlier pages:
        <br/>
        <br/>
        <strong>git clone:</strong> <br/>
        To make a local copy of an existing Git repository, use the git clone command. You can use it to retrieve all of the repository's files, branches, commit history, and other metadata. When you want to start working on a project or collaborate with others on an existing repository, this is really helpful.
        <br/><br/>
        The git clone command's fundamental syntax is as follows:      
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gitCloneSyntax} />

      <Text
        content={`<br/>
        <strong>Repository URL:</strong> The <repository_url> represents the location of the remote repository you want to clone. This can be a URL starting with <strong>https://, git://</strong>, or <strong>ssh://</strong>. It can point to a remote server, a repository hosting service like GitHub, GitLab, or Bitbucket, or even a local directory if you're cloning from another location on your machine.
        <br/><br/>
        <strong>Destination Directory</strong>: The optional <strong><destination_directory></strong> parameter specifies the directory where you want to place the cloned repository. If not provided, Git will create a new directory with the same name as the remote repository and place the cloned files inside it. If you specify a different directory name, Git will create that directory and clone the repository into it.
        <br/>
        <br/>
        <strong>git branch:</strong><br/>
        This command displays all the local git branch (please observe only local branch in your system not of remote or any other developers local branches). It is written like this::
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gitBranchSyntax} />

      <Text
        content={`<br/>
        <strong>git checkout:</strong><br/>
        This command is of 2 types and has 2 different purposes.
         It is written like this::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gitCheckoutSyntax} />

      <Text
        content={`<br/>
        The first way of writing command is like this <strong>git checkout -b</strong>, here -b means create a new branch from current branch (mostly develop/main) with the given name of branch i.e. here feature/creating_navbar and then change this as the current branch, where you could write your code.<br/><br/>
        The second way is simply switching to any branch from any other branch.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`<br/>
        <strong>git pull:</strong> <br/>
        The purpose of this command is to pull latest commit or changes from any remote branch to any local branch.<br/>
        If we are on a branch <strong>feature/creating_navbar</strong> currently and we fire <strong>git pull origin main</strong>, then we are pulling latest commits from main branch and thus refreshes our branch thus trying to avoid any conflict. And if any comes then we fix that locally.<br/>
        <br/>
        <strong>Just remember that before doing git push command then this command is mandatory for every developer.</strong>
        <br/>
        <br/>
        Just remember that this command is equivalent to <strong> git fetch + git merge</strong>.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`
        <strong>git merge:</strong> <br/>
       If we are on branch A locally and then want to merge branch B into branch A then simply run this command like::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gitMergeSyntax} />

      <Text
        content={`<br/><br/>
        <strong>git fetch:</strong> <br/>
        The purpose of git fetch is to bring all the remote branches into our local system.
        Then we can fire the command "git checkout feature/creating_navbar" to switch to that branch (which was not there locally before) and can run that locally or read the code too.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gitFetchSyntax} />

      <Text
        content={`<br/>
        <strong>git status:</strong> <br/>
        The purpose of this command is to show the status on the current branch. If after firing, the terminal shows files in red color means we have not fired "git add ." command yet. If it shows
        files in green color means we have not fired "git commit -m" command yet. It is extrememly useful command.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={gitStatusSyntax} />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="/git/how-git-works-in-project" nextLink="" />
    </Layout>
  );
};

export default PopularGitCommandsPage;
