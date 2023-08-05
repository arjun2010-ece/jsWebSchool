import Layout from "@/components/layout";
import { PAGES } from "@/utils";
import globalTheme from "@/styles/theme";

import { fluid, remToPx } from "@/styles/Global.style";
import Heading from "@/components/heading";
import Text from "@/components/text";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title:
    "Understanding GIT: A Comprehensive Guide to Efficient Code Management",
  metaDescription:
    "Learn the basics of GIT with our comprehensive GIT tutorial. Understand version control, branching, merging, and collaboration using GIT. Start your coding journey today!",
  metaKeywords:
    "HTML tutorial, GIT tutorial, version control, branching, merging, collaboration, coding tutorial",
  metaOgTitle:
    "Master GIT: A Comprehensive usage of version control for Beginners",
  metaOgUrl: "https://www.webschooljs.com/git",
  metaOgImage: "https://www.webschooljs.com/images/git-logo.png",
};

const GitPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.GIT}
      seo={seo}
    >
      <Heading
        content="What is GIT ?"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />

      <Text
        content={`<strong>
        Multiple developers can collaborate on projects using Git, a distributed version control system "VCS". Changes to files and folders are tracked over time, making it easier to manage and coordinate your work on projects. Git is fast, efficient, and reliable.
        </strong> <br/><br/>
        Here are some fundamental Git ideas and characteristics: 
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`<strong>Version Control: </strong>
        Git's version control system enables you to keep track of file changes over time. It keeps a record of all alterations, including who made them, when they were done, and what particular alterations were made. This gives you the ability to review, rollback, or contrast various versions of your code.
        <br/><br/>
        <strong>Distributed System: </strong>
        Git is a distributed VCS, which means that each developer has a complete copy of the repository, including its whole history. Decentralized collaboration and the capacity for offline work are made possible by this approach. Every developer has the ability to make modifications to their local copy, then synchronize with other developers to share their work.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        <strong>Repositories:</strong> A Git repository is a group of files that includes every change that has ever been made to them. It can be located locally on a computer or remotely on platforms like GitHub, GitLab, or Bitbucket. Branches, tags, and commits found in repositories collectively indicate the project's state and evolution.
        <br/><br/>
        <strong>Branches:</strong> Git employs branches to support concurrent development and change isolation. Branches are separate lines of development that branch off from the main line, also referred to as the "main" or "master" branch. Without affecting the primary source, developers can build additional branches to concentrate on certain features, bug fixes, or experimentation. The modifications can be merged back into the main branch when they have been examined and tested.

        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        <strong>Commits:</strong> A commit is a record of the repository's modifications as they stood at a particular moment in time. It is a logical unit of work and includes details about the author, the timestamp, and a special identification number (SHA-1 hash). The history of the project is constructed from commits that are arranged in a directed acyclic graph.
        <br/><br/>
        <strong>Remote Repositories:</strong>
        Git allows remote repositories, which let different developers work together on the same project. Remote repositories can be self-hosted on servers or hosted on websites like GitHub. Developers can take changes made by others into their local copy as well as push their local changes to a remote repository to share their work.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        <strong>Merging and Conflict Resolution:</strong>
         When integrating changes from one branch to another (e.g., merging a feature branch into the main branch), Git automatically combines the changes if they don't conflict. However, if multiple developers modify the same lines of code, a conflict can occur. Git provides tools to resolve these conflicts manually, allowing developers to choose how conflicting changes should be merged.
        <br/><br/>
        <strong>Tags:</strong>
         Git allows you to create tags to mark specific points in history, such as releases or important milestones. Tags are typically used for versioning and can be referenced easily.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        Git provides several graphical user interfaces (GUIs) and integrated development environment (IDE) integrations in addition to a command-line interface (CLI) for interacting with repositories. It offers strong capabilities for managing and working on projects of all sizes and has emerged as the de facto standard for version control in the software development sector.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        Now, the process to understand is::
        <br/>
        1. Learn setting up GIT.<br/>
        2. Learn how to initialise a project with GIT. <br/>
        3. Learn how to do ADD and COMMIT. <br/>
        4. PUSH the changes on remote repository
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon prevLink="" nextLink="/git/setup-git" />
    </Layout>
  );
};

export default GitPage;
