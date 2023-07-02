import Layout from '@/components/layout';
import { type NextPage } from 'next';
import tw, { theme as globalTheme } from 'twin.macro';
import Link from 'next/link';
import { PAGES, audioWithSrcTagSnippet, videoWithSrcTagSnippet } from '@/utils';
import Heading from '@/components/heading';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import CodeSnippet from '@/components/codeSnippet';

const officialAudioUrls =
  'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio';

const officialVideoUrls =
  'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video';

const seo = {
  title: 'Audio & Video tags',
  metaDescription:
    'Learn how to effectively use HTML audio and video tags to enhance your website. Our comprehensive tutorial covers the basics of embedding audio and video, controlling playback, adding captions, and optimizing for different devices. Discover the power of multimedia content and create engaging experiences for your website visitors.',
  metaKeywords:
    'HTML audio, HTML video, audio tags, video tags, multimedia tags, embedding audio, embedding video, multimedia, embedding audio, playback control, multimedia optimization, HTML5 audio, HTML5 video, captions, accessibility, device optimization, web development, audio and video tutorial, HTML tutorial, web design, website enhancement, website development',
  metaOgTitle: 'Master HTML Audio and Video Tags: A Comprehensive Tutorial',
  metaOgUrl: 'https://jswebschool.com/html/audio-video',
  metaOgImage: '',
};

const HTMLAudioVideo: NextPage = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="Audio and Video Tags ?"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />

      <Text
        content={`
        Audio and video tags are used to <b>embed</b> audio and video elements on the webpage meaning, you can keep some audio as well as video
        for e.g youtube videos on the webpage as well as audio songs.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Heading
        content="Audio Tags"
        headingType="h5"
        customStyle={tw`underline mb-4`}
      />

      <Text
        content={`
        There are 2 ways of emebedding audio in a webpage. Audio tag is used to create sound elements.
        For ex::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
      <CodeSnippet content={audioWithSrcTagSnippet} />
      <Text
        content={`<br/>
        The <b>src</b> attribute of <b>&lt;source&gt;</b> tag inside <b>&lt;audio&gt;</b> tag is what gives the relative path of audio file either stored locally
        or a remote url that has the actual sound or music. <br/>
        There can be multiple source tags inside audio tag. Browser will always play the first source file it understands.
        Now there are only 3 audio file format that browser currently supports::
        <ul>
          <li>.mp3</li>
          <li>.ogg</li>
          <li>.wav</li>
        </ul>
        <br/>
        Now there are multiple attributes that can be used to control the audio tag behaviour. Some of the most commonly used are:
        <ul>
          <li>
           <b>autoplay :</b> If set to true, it will automatically play audio on the webpage as soon as it is ready.
          </li>
          <li>
            <b>controls :</b> If set to true, browser will display some control features such as volume, pause, play, playback etc.
         </li>
         <li>
            <b>loop :</b> If set to true, it will automatically go in loop.start then end then start and so on.
         </li>
         <li>
          <b>muted :</b> If set to true, there will be no sound from audio player.
         </li>
        </ul>
        <br/>
        There are many more controls on this audio tag. To read more about those, please visit the official documentation :
        `}
        parentEl="section"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Link
        href={officialAudioUrls}
        className="border-indigo-500 border-b-2 text-lg"
        aria-current="page"
        target="__blank"
      >
        Audio controls
      </Link>

      <Heading
        content="Video Tags"
        headingType="h5"
        customStyle={tw`underline mb-4 mt-12`}
      />

      <Text
        content={`
        Video tag is used to embed videos on html using a media player.
        Like audio tag, a video tag will wrap a source tag and <b>src</b> attribute of <b>source</b> tag will have relative url or remote url
        of video file.
        For ex::
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <CodeSnippet content={videoWithSrcTagSnippet} />

      <Text
        content={`
        <br/>
        <b>Multiple source tags</b> inside video tags mean browser has the option of playing first whichever video file, it supports
        <br/>
        Now the purpose of <b>additional content</b> in the above snippet is, in case if browser does not support video tags at all, then 
        it will display those contents.
        `}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Text
        content={`<br/>
        The <b>src</b> attribute of <b>&lt;source&gt;</b> tag inside <b>&lt;video&gt;</b> tag is what gives the relative path of audio file either stored locally
        or a remote url that has the actual svideo. <br/>
        There can be multiple source tags inside video tag. Browser will always play the first source file it understands.
        <br/>
        Now there are multiple attributes that can be used to control the video tag behaviour. Some of the most commonly used are:
        <ul>
          <li>
           <b>autoplay :</b> If set to true, it will automatically play video on the webpage as soon as it is ready.
          </li>
          <li>
            <b>controls :</b> If set to true, browser will display some control features such as volume, pause, play, playback etc.
         </li>
         <li>
            <b>loop :</b> If set to true, it will automatically go in loop.start then end then start and so on.
         </li>
         <li>
          <b>muted :</b> If set to true, there will be no sound from video player.
         </li>
         <li>
          <b>Width and Height :</b> It defines the dimensions of video player.
         </li>
        </ul>
        <br/>
        There are many more controls on this audio tag. To read more about those, please visit the official documentation
        `}
        parentEl="div"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />

      <Link
        href={officialVideoUrls}
        className="border-indigo-500 mb-4 border-b-2 text-lg"
        aria-current="page"
        target="__blank"
      >
        Video controls
      </Link>

      <Text
        content={`
        <b> <br/> <br/>
        Note::</b> <br/>
        Please do not forget that <b>&lt;audio&gt;, &lt;video&gt;</b> tags are inline block level 
        elements. And if you
        remember, these  are those html tags/elements which occupies only as much space as is 
        its content (property coming from inline elements) plus we can set its width and height and all 
        its margins and paddings (property coming from block level elements). <br/>
         More than one inline-block elements normally sit side by side on the same line. 
         (you can change this by applying css obviously).
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

export default HTMLAudioVideo;
