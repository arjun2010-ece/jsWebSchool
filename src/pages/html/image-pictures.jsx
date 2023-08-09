import Layout from "@/components/layout";

import globalTheme from "@/styles/theme";
import {
  PAGES,
  responsiveImageSnippet,
  imageResolutionSwitchingSnippet,
  pictureTagSnippet,
} from "@/utils";
import Heading from "@/components/heading";
import Text from "@/components/text";
import { fluid, remToPx } from "@/styles/Global.style";
import CodeSnippet from "@/components/codeSnippet";
import NavigationIcon from "@/components/navigationIcon";

const seo = {
  title: "Html Image vs Pictures: Comparision and its usage",
  metaDescription:
    "Understand the differences between HTML image and picture elements with our comprehensive tutorial. Learn when to use each element, their attributes, and best practices for implementing responsive images. Discover how to optimize images for web performance and accessibility. Enhance your web development skills and create visually appealing and efficient web pages with HTML image and picture elements.",
  metaKeywords:
    "HTML, image element, picture element, responsive images, images, pictures, img tag, picture tag, image tag, image formats, image optimization, web development, web design, web performance, accessibility, HTML attributes, frontend development, HTML tutorial",
  metaOgTitle:
    "HTML Image vs Picture: Choosing the Right Element for Web Design",
  metaOgUrl: "https://www.webschooljs.com/html/image-pictures",
  metaOgImage: "https://www.webschooljs.com/images/html-logo.png",
};

const HTMLImagePicture = () => {
  return (
    <Layout
      sidebar={true}
      hideAd={true}
      hideSidebar={true}
      currentPage={PAGES.HTML}
      seo={seo}
    >
      <Heading
        content="Image Tag vs Picture tag ?"
        headingType="h1"
        customStyle={{ marginBottom: "1rem" }}
      />
      <Text
        content={`
        There are two types of tags to display images in HTML : <b>img tag and Picture tag</b>. Before 
        understanding, which one to use or which one is better, we need to understand about a very important 
        topic called <b>image resolution</b>. <br/><br/> 
        Higher the resolution of image, higher is the quality and higher
        is the size of image(e.g, 500kb, or 2mb or anything). Higher is the size of image, the more bandwidth
        or high speed internet connection is needed to download and display the image. Normally laptops or
        desktops are connected with high speed internet so its easy to display high resolution images there,
         but very slow to display in mobile because mobile internet is little slow. This concept we will use
         in image vs picture comparision
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* Image Tag */}

      <Heading
        content="Image Tag"
        headingType="h5"
        customStyle={{
          marginBottom: "1rem",
          textDecoration: "underline",
        }}
      />

      <Text
        content={`
        This tag is used to display any images by simply providing the image path (either stored locally) or
        image url if hosted remotely. <br/> <br/> 
        Now whenever we talk about images, we always need to talk about <b>responsive images</b> only 
        (meaning 
        the images which adapt to different screen width easily. If we stretch the screen width, image should 
        scale up and if we compress the screen width, then image width should scale down accordingly).
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={responsiveImageSnippet} />

      <Text
        content={`<br/>
        A basic <b>img</b> tag takes 2 attributes <b>src</b> and <b>alt</b>. <br/>
        <b>src</b> attribute takes the path
        or url of image to be displayed. <b>alt</b> attribute takes a string/text which gets displayed when
        image is not loaded on screen and is very good for SEO purposes. <br/><br/>
        And the css <b>img{ width: 100% }</b> is what makes image responsive, meaning the image will always 
        be 100% of its parent container, if parent container increases in width then also, and if it 
        decreases in width then also.
      `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`
        We already talked about responsive images, now on a very advanced level, we need to understand 
        2 very very important and advanced topics::
        <ul>
         <li><b>Resolution switching :</b> switching to smaller size images on small screen devices.</li>
         <li><b>Art Direction :</b> displaying different images on different screen widths or devices.</li>
        </ul>
        <br/> <br/> 

        Now img tag can handle resolution switching using <b>srcset</b> and <b>sizes</b> attributes.
        We need to understand that why do we need this resolution switching feature at all.
        Remember image resolution i explained above, high resolution images can be displayed in 
        a fast way on laptop and desktop screen but for the same high resolution image to display in
        mobile screen on a low internet connection, it will take a lot of time, and thats why we need
        <b>resolution switching</b>.<br/>
        Some example along with explanation will clear more doubts::
        `}
        parentEl="div"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={imageResolutionSwitchingSnippet} />

      <Text
        content={`<br/>
        Now in the above img tag we need to focus only on 2 attributes, i.e srcset and sizes.<br/><br/>
        First <b>srcset</b> attribute takes a lot of images(image path) along with sizes separated by comma.
        Sizes are like 500w (meaning 500px width(w)), 800w (meaning 800px width) etc.
        <br/><br/>
        Now there are 3 images:: <b>small-fruit-image.jpg, medium-fruit-image.jpg, large-fruit-image.jpg</b>,
        in that image tag, which browser automatically uses to switch from.<br/><br/>
        From 0px to 500px screen (as defined with image), small-fruit-image.jpg will be displayed.<br/><br/>
        From 501px to 800px screen (as defined with image), medium-fruit-image.jpg will be displayed.<br/><br/>
        From 801px to 1250px screen (as defined with image), large-fruit-image.jpg will be displayed.<br/><br/>
        And for any other sizes,<b>src</b> attribute images will be displayed as fallback. <br/><br/>
        Now the second attribute is <b>sizes</b>, that will tell the browser how big the image will be at 
        different screen sizes using different media queries.<br/>
        <b> sizes="(min-width: 1200px) 850px, (min-width: 768px) 400px, 100vw"</b><br/><br/>
        Now from 1200 px min-width onwards, whichever image appears on screen (in this case, large-fruit-image.jpg),
        the image width will always be 850px.<br/>
        Also from 768 px min-width onwards till 1199px, whichever image appears on screen (in this case, 
        medium-fruit-image.jpg),
        the image width will always be 400px, and in any other width, whichever image appears, it will be
        100vw only.
      `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <Text
        content={`<br/>
       <b>Note::</b><br/>
       It is recommended to use img tag with src and alt attribute for normal usecases.<br/>
       But if you have different width images then use srcSet attribute along width src and alt attribute.
       Usage of <b>sizes</b> is optional and upto you.
      `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* Picture Tag */}

      <Heading
        content="Picture Tag"
        headingType="h5"
        customStyle={{
          marginBottom: "1rem",
          textDecoration: "underline",
        }}
      />

      <Text
        content={`
        If we need to display image along with resolution switching and art direction, then we use picture tag.
        Most of time a simple image tag does its job. <br/><br/>
        A simple example of Picture tag ::
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      <CodeSnippet content={pictureTagSnippet} />

      <Text
        content={`<br/>
        If you see the picture tag, here we have 2 source tags defining 2 images with their media query, and
        one img tag which is the fallback image if picture tag is not supported in some browser or if none of
        image is visible on screen.
        In the first source tag srcSet defines the image path, and media attribute tells that, this image will
        be visible from 0px to 767px. And second source tag image will be visible from 768px onwards.
        <br/><br/>
        <b>Note::</b><br/>
        Using picture tag is an overkill in most of the scenarios except some very specific case (explained above).
        A simple img tag is recommended for most of the scenarios.
        `}
        parentEl="p"
        customStyle={`${fluid(
          remToPx(globalTheme["fontSize"]["base"]),
          remToPx(globalTheme["fontSize"]["lg"])
        )}`}
      />

      {/* NavigationIcon : Front and Back Link */}
      <NavigationIcon
        prevLink="/html/unordered-vs-ordered-lists"
        nextLink="/html/tables"
      />
    </Layout>
  );
};

export default HTMLImagePicture;
