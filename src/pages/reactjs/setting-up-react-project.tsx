import Layout from '@/components/layout';
import { type NextPage } from 'next';
import { PAGES, cdProjectSnippet, createReactAppSnippet, projectStartSnippet } from '@/utils';
import tw, { theme as globalTheme } from 'twin.macro';
import { fluid, remToPx } from '@/styles/Global.style';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import CodeSnippet from '@/components/codeSnippet';

const SettingUpReactProjectPage: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.REACTJS}
    >
      <Heading
        content="How to set up reactjs project"
        headingType="h5"
        customStyle={tw`mb-4`}
      />

      <Text
        content={`
        <strong>Step 1:</strong><br/>
        Install Node.js and npm
        Before setting up your React project, make sure you have Node.js and npm (Node Package Manager) installed on your computer. Node.js official website (https:
        https://nodejs.org).
        <br/><br/>
        <strong>Step 2: Create a new react project</strong><br/>
        
        After installing Node.js and npm, you can create a new React project using Create React App (CRA). CRA is a command line tool that sets up a new React project with basic project structure and configuration.
        <br/><br/>
        1. Open a terminal or command prompt. <br/>
        2. Navigate to the directory where you will create your React project.<br/>
        3. Create a new React project named "my-app" by running the following command:
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={createReactAppSnippet} />

      <Text
        content={`<br/>
        (Note:
        Replace "my-app" with any project name. )
        CRA will generate the necessary files and install the required dependencies for your React project.
        <br/><br/>
        <strong>Step 3: Understand project structure</strong><br/>
        
        Once the project is created, use Terminal or Command Prompt to navigate to the project directory. 
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={cdProjectSnippet} />

      <Text
        content={`<br/>
        The project directory has the following files and folders:
        <br/><br/>
        <strong>src</strong> folder:
        React application's source code is located in the folder src.<br/>

        <strong>public</strong> folder:
        The "index.html" HTML template file is located in this folder and is used to render React apps. React is used to create SPA apps because of this file.<br/>

        <strong>package.json</strong> file:
        This file contains your project configuration and dependency list. 
        <br/><br/>
        <strong>Step 4: Start the React development server</strong><br/>
        To see your React application in action, start the React development server.
        <br/>
        <br/>

        1. Make sure you are in the project directory in a terminal or command prompt.<br/>
        2. Start the development server by running the following command: 
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={projectStartSnippet} />

      <Text
        content={`<br/>
        Your code will be compiled by the React developer server, the required files will be packaged, and the local developer server will be launched at http://localhost:3000.
            <br/>
            <br/>
        <strong>Step 5:View the React application you are using in browser</strong> <br/>
        
        Open a web browser, then go to http://localhost:3000, 
        
        to view your React application. 
        <br/><br/>
        You should see the default React logo and some sample content.
        <br/><br/>
        Congratulations! You have successfully set up a React project. You can now start modifying the code in the <strong>src</strong> folder to build your React application. Any changes you make will automatically trigger a live reload in the browser, allowing you to see the updates in real-time.
        <br/><br/>
        Remember to refer to the Create React App documentation (<strong>https://create-react-app.dev</strong>) for more details on customizing your project configuration and additional development tasks.
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

    </Layout>
  );
};

export default SettingUpReactProjectPage;
