type menuItemType = {
  title: string;
  path: string;
};

type menuItemsType = menuItemType & {
  subItems?: menuItemType[];
};

export const MENU_ITEMS: menuItemsType[] = [
  { title: 'HTML', path: '/html' },
  { title: 'CSS3', path: '/css' },
  { title: 'Javascript', path: '/javascript' },
  { title: 'GIT', path: '/git' },
  { title: 'ReactJs', path: '/reactjs' },
  { title: 'Node.js', path: '/nodejs' },
  {
    title: 'More',
    path: '',
    subItems: [
      { title: 'Angular', path: '/subitem1' },
      { title: 'Vue.js', path: '/subitem2' },
      { title: 'Data Modelling', path: '/subitem3' },
    ],
  },
];

export const PAGES = {
  HTML: 'HTML',
  CSS3: 'CSS3',
  JAVASCRIPT: 'Javascript',
  REACTJS: 'ReactJs',
  NODEJS: 'Node.js',
  GIT: 'GIT',
};

export const moreAttributesLink =
  'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes';

export const semanticTagsLink =
  'https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements';

export const htmlTagcodeSnippet = `<h1>.....</h1>
<p>.....</p>
<div>.....</div>`;

export const htmlElementcodeSnippet = `<h1>Learn HTML.</h1>
<p> A new day.</p>
<div>Wrap this element.</div>`;

export const idCodeSnippet = `<h1 id="heading">Learn HTML.</h1>
<p id="content"> A new day.</p>
<div id="container">Wrap this element.</div>`;

export const idNotUniqueSnippet = `<p id="content"> A new day.</p>
<div id="content">Wrap this element.</div>`;

export const classSnippet = `<p class="content"> A new day.</p>
<div class="content">Wrap this element.</div>`;

export const hrefSnippet = `<a href="/about"> A new day.</a>
<a href="https://www.youtube.com/">youtube</a>`;

export const titleSnippet = `<p title="cards"> A new day.</p>
<div title="price">Wrap this element.</div>`;

export const htmlHeadingsTagSnippet = `<h1> Heading 1.</h1>
<h2> Heading 2.</h2>
<h3> Heading 3.</h3>
<h4> Heading 4.</h4>
<h5> Heading 5.</h5>
<h6> Heading 6.</h6>`;

export const htmlParaTagSnippet = `<p> A new day.</p>
<p> Life is beautiful.</p>`;

export const htmlDivTagSnippet = `<div> A new day.</div>

<header>
  <div> A div wrapping content inside semantic header tag.</div>
</header>

<div>
  <p> Life is a learning.</p>
  <p> Life is amazing.</p>
  <p> Life is funny.</p>
</div>
`;

export const htmlSpanTagSnippet = `<span> A new day.</span>

<header>
  <div> A div wrapping content <span>inside semantic</span> header tag.</div>
</header>

<div>
  <p> Life is a <span>learning</span>.</p>
  <p> Life is <span>amazing</span>.</p>
  <p> Life is <span>funny</span>.</p>
</div>

  <span>Independent house</span>
  <span>Independent Swimming pool</span>

`;

export const htmlOrderedListSnippet = `One way:
1. This is amazing.
2. This is lifechanging.
3. This is refreshing.
4. This is exotic.
5. This is beauty.

second way:
a. This is amazing.
b. This is lifechanging.
c. This is refreshing.
d. This is exotic.
e. This is beauty.

third way:
A. This is amazing.
B. This is lifechanging.
C. This is refreshing.
D. This is exotic.
E. This is beauty.

fourth way:
I. This is amazing.
II. This is lifechanging.
III. This is refreshing.
IV. This is exotic.
V. This is beauty.
`;

export const htmlOrderedListSyntaxSnippet = `One way:
<ol type="1">
  <li>This is amazing.</li>
  <li>This is refreshing.</li>
  <li>This is beauty.</li>
</ol>

second way:
<ol type="a">
  <li>This is amazing.</li>
  <li>This is refreshing.</li>
  <li>This is beauty.</li>
</ol>

third way:
<ol type="A">
  <li>This is amazing.</li>
  <li>This is refreshing.</li>
  <li>This is beauty.</li>
</ol>

fourth way:
<ol type="I">
  <li>This is amazing.</li>
  <li>This is refreshing.</li>
  <li>This is beauty.</li>
</ol>

fifth way:
<ol type="i">
  <li>This is amazing.</li>
  <li>This is refreshing.</li>
  <li>This is beauty.</li>
</ol>
`;

export const htmlUnorderedListSyntaxSnippet = `One way:
<ul style="list-style-type:disc;">
  <li>This is amazing.</li>
  <li>This is refreshing.</li>
  <li>This is beauty.</li>
</ul>

second way:
<ul style="list-style-type:circle;">
  <li>This is amazing.</li>
  <li>This is refreshing.</li>
  <li>This is beauty.</li>
</ul>

third way:
<ul style="list-style-type:square;">
  <li>This is amazing.</li>
  <li>This is refreshing.</li>
  <li>This is beauty.</li>
</ul>

fourth way:
<ul style="list-style-type:none;">
  <li>This is amazing.</li>
  <li>This is refreshing.</li>
  <li>This is beauty.</li>
</ul>
`;

export const responsiveImageSnippet = `// Basic img tag usage

// relative url path, stored locally
<img src="/profile.jpg" 
  alt="Profile Picture 
> 

//remote url
<img src="https://cdn.pixabay.com/photo/2023/05/14/19/42/sky-7993656_1280.jpg" alt="Profile Picture > 

css::
img{
  width: 100%;
}
`;

export const imageResolutionSwitchingSnippet = `
<img srcset="small-fruit-image.jpg 500w,
             medium-fruit-image.jpg 800w,
             large-fruit-image.jpg 1250w"
    
     sizes="(min-width: 1200px) 850px,
            (min-width: 768px) 400px,
            100vw"
     
     src="medium-fruit-image.jpg" alt="Fruit">
`;

export const pictureTagSnippet = `
<picture>
  <source srcset="test.avif" media="(max-width: 767px)" type="image/avif">
  <source srcset="test.webp" type="image/webp" media="(min-width: 768px)">
  <img src="test.png" alt="test image">
</picture>
`;

export const htmlTableBasicSnippet = `
<table>
  <thead>
    <tr>
      <th>Age</th>
      <th>Salary</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
    </tr>

    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Total</th>
      <th>345</th>
    </tr>
  </tfoot>
</table>
`;

export const htmlTableUsageSnippet = `
<table>
  <thead>
    ......
  </thead>

  <tbody>
   ......
  </tbody>

</table>
`;

export const htmlTableHeadSnippet = `
<table>

  <thead>
    <tr>
      <th>Age</th>
      <th>Salary</th>
    </tr>
  </thead>

</table>
`;

export const htmlTableBodySnippet = `
<table>

  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
    </tr>

    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
    </tr>
  </tbody>

</table>
`;

export const htmlTableBorderSnippet = `
<table border="1" style="border-collapse: collapse">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Row 1 Cell 1</td>
      <td>Row 1 Cell 2</td>
      <td>Row 1 Cell 3</td>
    </tr>
    <tr>
      <td>Row 2 Cell 1</td>
      <td>Row 2 Cell 2</td>
      <td>Row 2 Cell 3</td>
    </tr>
    <tr>
      <td>Row 3 Cell 1</td>
      <td>Row 3 Cell 2</td>
      <td>Row 3 Cell 3</td>
    </tr>
  </tbody>
</table>
`;

export const htmlTableColRowSpanSnippet = `
<table border="1" style="border-collapse: collapse">
  <thead>
    <tr>
      <th>col 1</th>
      <th>col 2</th>
      <th>col 3</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td rowspan = "2">Row 1 Cell 1</td>
      <td>row 1 Cell 2</td>
      <td>row 1 Cell 3</td>
    </tr>

    <tr>
      <td>row 2 Cell 2</td>
      <td>row 2 Cell 3</td>
    </tr>

    <tr>
      <td colspan = "3">row 3 Cell 1</td>
    </tr>
  </tbody>
</table>
`;

export const iframeTagSnippet = `
<iframe id="openstreet-map"
    title="openstreet map"
    width="350"
    height="230"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>`;

export const formTagSnippet = `<form>

// form elements
......... 
........
........

</form>`;

export const basicInputTagSnippet = `<input>

or

<input type="text" >
`;

export const fileUploadSnippet = `<form>
  <input type = "file" name = "profilePic" accept = "image/*" />
  <input type = "file" name = "profilePicOne" accept = "image/jpg" />
  <input type = "file" name = "profilePicTwo" accept = "image/png" />
</form>
`;

export const radioBoxSnippet = `<form>

  // radiobox
  <input type = "radio" name = "male" value = "male" checked> Male
  <input type = "radio" name = "male" value = "male" checked={true}> Male
  <input type = "radio" name = "male" value = "male" checked={false}> Male

  // checkbox
  <input type = "checkbox" name = "termsAndConditions" value = "terms" checked> I have read terms and conditions.
  <input type = "checkbox" name = "termsAndConditions" value = "terms" checked={true}> I have read terms and conditions.
  <input type = "checkbox" name = "termsAndConditions" value = "terms" checked={false}> I have read terms and conditions.
</form>
`;

export const textInputSnippet = `<form>
  <input type="text" name="firstName" value="Andy" maxLength="18">
</form>
`;
export const textAreatSnippet = `<form>
  <textarea name="bio" value="This is my bio" rows="4" cols="12">
</form>
`;

export const selectTagSnippet = `// Default scenario, nothing is selected
<form>
  <select name = "country">
    <option value = "norway">Norway</option>
    <option value = "brazil">Brazil</option>
    <option value = "india">India</option>
  </select>
</form>

// A pre selected scenario
<form>
  <select name = "country">
    <option value = "norway" selected>Norway</option> // this one is selected
    <option value = "brazil">Brazil</option>
    <option value = "india">India</option>
  </select>
</form>
`;

export const buttonTagSnippet = ` // These 3 are same, you can use anyone.
<input type="button" value="submit" name="submit">
<button>Click me</button>
<button type="button">Click me</button>

// These 2 are same, you can use anyone.
<input type="submit" value="deploy" name="deploy">
<button type="submit">Submit me</button>

// These 2 are same, you can use anyone.
<input type="reset" value="reset" name="clearAll">
<button type="reset">Reset me</button>
`;

export const audioWithSrcTagSnippet = `// first way
<audio controls>  
  <source src="koyal.ogg" type="audio/ogg">  
</audio>

// Second way
<audio controls src="/media/cc0-audio/t-rex-roar.mp3">
  <a href="/media/cc0-audio/t-rex-roar.mp3">
      Download audio
  </a>
</audio>
`;

export const videoWithSrcTagSnippet = `<video controls width="250">
  <source src="/media/cc0-videos/flower.webm" type="video/webm">
  <source src="/media/cc0-videos/flower.mp4" type="video/mp4">

  //additional content
  Download the
  <a href="/media/cc0-videos/flower.webm">WEBM</a>
  or
  <a href="/media/cc0-videos/flower.mp4">MP4</a>
  video.
</video>
`;

export const seoTagsSnippet = `<head>
  <meta name="description" content="Put your description that google search engine bots reads" />
  <meta name="keywords" content="Put your keywords that google search engine bots reads" />
  <meta property="og:title" content="Put your title that appear on facebook when page is shared" />
  <meta property="og:url" content="Put your url that appear on facebook when page is shared" />
  <meta property="og:image" content="Put your image that appear on facebook when page is shared" />
  <meta property="og:description" content="Put your description that appear on facebook when page is shared" />
</head>
`;

export const styleAttributeSnippet = `<h1 style="color:green;text-align:left">Life of pie</h1>
<p style="color:red">I am following you pie.</p>
`;

export const commentsSnippet = `
<!--This is paragraph tag : info on usage of para tag -->
<p>This is good day </p>

// commented out html code, not visible on UI
<!-- <p>This is good day </p> -->
`;

export const boxModelSnippet = `
+-------------------------------------------+
|                  Margin                   |
+-------------------------------------------+
|              Border                       |
|    +---------------------------------+    |
|    |           Padding             |    |
|    |   +-----------------------+   |    |
|    |   |       Content Box     |   |    |
|    |   |                       |   |    |
|    |   +-----------------------+   |    |
|    |                               |    |
|    +-------------------------------+    |
|                                         |
+-----------------------------------------+

`;

export const cssBoxSnippet = `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const fontFamilySnippets = `p{
  font-family: Arial, Helvetica, sans-serif;
}

h1, h2, h3, h4, h5, h6{
  font-family: "Lucida Console", "Courier New", monospace;
}
`;

export const fontSizeSnippets = `p{
  font-size: 18px;
}

p{
  font-size: 28px;
}
`;

export const fontWeightSnippets = `// first way
p{
  font-weight: bold;
}

// second way
div{
  font-weight: 700;
}
`;

export const fontStyleSnippets = `// first way
p{
  font-style: normal;
}

// second way
div{
  font-style: italic;
}

// third way
div{
  font-style: oblique;
}
`;

export const colorSnippets = `// First way : Normal way
p{
  color: black;
}

// Second way : Hexadecimal way
p{
  color: #000000;
}

// Third way : RGB way
p{
  color: rgb(0, 0, 0);
}

// Fourth way : RGBA way
p{
  color: rgba(0, 0, 0, 0);
}
`;

export const textAlignSnippets = `p{
  text-align: center;
}

div{
  text-align: right;
}

nav{
  text-align: left;
}
`;

export const textDecorationsSnippets = `p{
  text-decoration: overline;
}

h1{
  text-decoration: line-through;
}

h3{
  text-decoration: underline;
}

h6{
  text-decoration: underline overline;
}
`;

export const textTransformSnippets = `p{
  text-transform: uppercase;
}

h1{
  text-transform: lowercase;
}

h3{
  text-transform: capitalize;
}
`;

export const lineHeightSnippets = `p{
  line-height: 20px;
}
`;

export const letterWordSpacingSnippets = `p{
  letter-spacing: 3px;
}

h1{
  word-spacing: 30px;
}`;

export const opacitySnippets = `p{
  opacity: 0;  // not visible at all
}

h1{
  opacity: 1;  // visible like normal, default value.
}

h3{
  opacity: 0.7;  // 70% visible
}
`;

// Dimension properties snippet

export const widthSnippets = `p{
  width: 90%; // 90% of its parents.
}

h1{
  width: 1024px; 
}

h3{
  opacity: 40rem ;
}`;

export const minWidthSnippets = `p{
  min-width: 40%; // 40% of its parents.
}

h1{
  min-width: 320px; 
}

h3{
  opacity: 20rem ;
}`;

export const maxWidthSnippets = `p{
  max-width: 90%; // 90% of its parents or body tag.
}

h1{
  max-width: 1280px; 
}

h3{
  opacity: 80rem ;
}`;

export const heightSnippets = ` // First case
<div class="divHeight"> Height will not work</div>

.divHeight{
  height: 100%; // will not work, and its height will be height of its content.
 }

 // second case
<div class="parent"> 
  <p>Height will work</p>
</div>

.parent{
  height: 40px;
}

.parent p{
  height: 100%; // it will work
}


// Third case
<h1>Height will again work</h1>

h1{
  height: 80px; // or 10rem
}`;

export const minHeightSnippets = `// First way
<h1>Height will work</h1>

h1{
  min-height: 80px; // the height will be 80px on all screens 
}

// Second way
<h1>Height will not work</h1>

h1{
  min-height: 20%; // the height will not work
}

// Third case
<div class="parent"> 
  <p>Height will work</p>
</div>

.parent{
  height: 40px;
}

.parent p{
  min-height: 30%; // it will work
}
`;
export const maxHeightSnippets = `// First way
<h1>Height will work</h1>

h1{
  max-height: 80px; // the height will be 80px on all screens 
  overflow: scroll;
}`;

export const marginSnippets = `// First way
h1{
  margin: 23px; // margin top bottom right left all is 23px
}

// Second way
h1{
  margin: 23px 10px; // margin top and bottom is 23px and right and left margin is 10px
}

// Third way
h1{
  margin: 10px 16px 8px; // margin top is 10px, margin right and left is 16px and margin bottom is 8px
}

// Fourth way
h1{
  margin: 10px 16px 8px 12px; // margin top is 10px, margin right is 16px and margin bottom is 8px and margin left is 12px
}

// Fifth way
h1{
  margin-top: 10px;
  margin-bottom: 12px;
  margin-right: 8px;
  margin-left: 7px; 
}
`;

export const paddingSnippets = `// First way
h1{
  padding: 23px; // padding top bottom right left all is 23px
}

// Second way
h1{
  padding: 23px 10px; // padding top and bottom is 23px and right and left padding is 10px
}

// Third way
h1{
  padding: 10px 16px 8px; // padding top is 10px, padding right and left is 16px and padding bottom is 8px
}

// Fourth way
h1{
  padding: 10px 16px 8px 12px; // padding top is 10px, padding right is 16px and padding bottom is 8px and padding left is 12px
}

// Fifth way
h1{
  padding-top: 10px;
  padding-bottom: 12px;
  padding-right: 8px;
  padding-left: 7px; 
}
`;

export const borderSnippet = `h1{
  border: 1px solid black;
}
`;

export const borderRadiusSnippet = `h1{
  border-radius: 10px;
  border: 3px solid black;
}

h2{
  border: 4px solid black;
  width: 80px;
  height: 80px;
  border-radius: 50%; // this will make the element a full circle.
}
`;

export const displaySnippet = `h1{
  display: inline-block;
}

span{
  display: block;
}

p{
  display: inline;
}

// Special property
div{
  display: none;
}
`;

export const bgColorSnippet = `// First way
h1{
  background: blue;
}

// Second way
h1{
  background-color: green;
}`;

export const bgImageSnippet = `// First way
h1{
  background: url("/images/lighthouse-image.jpg");
}

// Second way
h1{
  background-image: url("/images/lighthouse-image.jpg");
}`;

export const bgRepeatSnippet = `// First way : combining multiple background properties
h1{
  background: url("/images/lighthouse-image.jpg") no-repeat; // set bg image & avoid repeating together
}

// Second way : combining multiple background properties
h1{
  background: url("/images/lighthouse-image.jpg") repeat-x; // set bg image & repeating horizontally together
}

// third way : combining multiple background properties
h1{
  background: url("/images/lighthouse-image.jpg") repeat-y; // set bg image & repeating vertically together
}

// Alternate way
h1{
  background-image: url("/images/lighthouse-image.jpg");
  background-repeat: no-repeat;
}`;

export const bgAttachmentSnippet = `// First way : combining multiple background properties together
h1{
  background: url("/images/lighthouse-image.jpg") no-repeat fixed; // set bg image & avoid repeating together
}

// Alternate way
h1{
  background-image: url("/images/lighthouse-image.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}`;

export const bgPositionSnippet = `// First way
h1{
  background-image: url("/images/lighthouse-image.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
}

// Second way
h1{
  background-image: url("/images/lighthouse-image.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left;
}

// Third way
h1{
  background-image: url("/images/lighthouse-image.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

// Fourth way
h1{
  background-image: url("/images/lighthouse-image.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 20% 70%;
}

// Fifth way
h1{
  background-image: url("/images/lighthouse-image.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom 48px right 95px;
}

// Sixth way
h1{
  background-image: url("/images/lighthouse-image.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right 32% bottom 40%;
}
`;

export const negativeOrdersSnippet = `<div>
  <p>One</p>
  <p class="b">Two</p>
  <p class="c">Three</p>
  <p>Four</p>
  <p class="e">Five</p>
</div>

// css
div{
  display: flex;
  justify-content: space-between;
}

.c{
  order: 1;
}

.b{
  order: 2;
}

.e{
  order: 3;
}

`;

export const flexGrowSnippet = `// css
.child{
  flex-grow: 3;
}`;

export const flexShrinkSnippet = `// css
.child{
  flex-shrink: 3;
}`;

export const flexSnippet = `<div class="container">
  <div class="sidebar">Left Sidebar</div>
  <div class="content">Main content</div>
  <div class="sidebar">Right Sidebar</div>
</div>

// css
.container{
  display: flex;
}

.sidebar{
  flex: 0 0 400px;
  min-width: 300px;
  max-width: 400px;
}

.sidebar{
  flex: 1;
  overflow-x: auto;
}
`;
export const flexGapSnippet = `// First way
.child1{
  gap: 20px;
}

// Second way
.child1{
  gap: 20px 10px; // row gap is 20px and column gap is 10px.
}

// Third way, putting gaps separately
.child1{
  row-gap: 20px;
  column-gap: 10px;
}
`;

export const gridColumnsSnippet = `// HTML
<div class="container" >
    <div class="item" ></div>
    <div class="item" ></div>
    <div class="item" ></div>
	  <div class="item" ></div>
    <div class="item" ></div>
    <div class="item" ></div>
</div>

//css

.container{
  display: grid;
  grid-template-columns: 400px 600px;
}`;

export const gridColumnsUsageSnippet = `// HTML
<div class="container" >
    <div class="item" >1</div>
    <div class="item" >2</div>
    <div class="item" >3</div>
	  <div class="item" >4</div>
    <div class="item" >5</div>
    <div class="item" >6</div>
</div>

//First way
.container{
  display: grid;
  grid-template-columns: 400px 600px; // 2 columns of 400 and 600px widths 
}

//Second way
.container{
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2 columns of equal widths 
}

//Third way
.container{
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr)); 
  // 2 columns of minimum widths 200px but max width can be decided by grid itself
}

//Fourth way
.container{
  display: grid;
  grid-template-columns: repeat(2, 300px); 
  // 2 columns of fixed widths 300px
}

//Fifth way
.container{
  display: grid;
  grid-template-columns: repeat(2, 30%); 
  // 2 columns of 30% widths
}

//Sixth way
.container{
  display: grid;
  grid-template-columns: 20% 30% 50%; 
  // 3 columns of 20% , 30% and 50% widths
}

//Seventh way
.container{
  display: grid;
  grid-template-columns: 1fr 2fr 4fr; 
  // 3 columns of 1fr 2fr and 4fr widths
}
`;

export const gridRowsSnippet = `// HTML
<div class="container" >
    <div class="item" >1</div>
    <div class="item" >2</div>
    <div class="item" >3</div>
	  <div class="item" >4</div>
    <div class="item" >5</div>
    <div class="item" >6</div>
</div>

//css

.container{
  display: grid;
  grid-template-rows: repeat(2, 300px);
  grid-template-columns: 200px 220px 230px;
}`;

export const gridLinesSnippet = `// HTML
<div class="container" >
  <div class="item" >ONE</div>
  <div class="item" ></div>
  <div class="item" ></div>
  <div class="item" ></div>
  <div class="item" ></div>
  <div class="item" ></div>

  <div class="item" ></div>
  <div class="item b" >TWO</div>
  <div class="item" ></div>
  <div class="item" ></div>
  <div class="item" ></div>
  <div class="item c" >SIX</div>
</div>

//css

.container{
  width: 400px;
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
}

.item{
  width: 1fr;
  height: 80px;
  background: grey;
  display: flex;
  justify-content:center;
  align-items: center;
}

// manupulating grid child with content "TWO"
.b{
  grid-column: 2/3;
  grid-row: 1/2;
}

// manupulating grid child with content "SIX"
.c{
  grid-column: 3/4;
  grid-row: 1/2;
}`;

export const remFontSizeSnippet = `// CSS
html{
  font-size: 10px; // Now 1 rem = 10px
}

p{
  font-size: 1.8rem;
}`;

export const horizontalOverflowSnippet = `// HTML
<div class="container">
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Curabitur non purus ac justo dapibus euismod. 
    Phasellus tempor vehicula magna, ac ultrices risus congue vitae.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Curabitur non purus ac justo dapibus euismod. 
    Phasellus tempor vehicula magna, ac ultrices risus congue vitae.
  </div>
</div>

//css
.container{
  width: 200px; /* Fixed width container */
}

.content {
   white-space: nowrap; /* Prevent line breaks */  
}`;

export const verticalOverflowSnippet = `// HTML
<div class="container">
  <div class="content">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Curabitur non purus ac justo dapibus euismod. 
  Phasellus tempor vehicula magna, ac ultrices risus congue vitae.
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Curabitur non purus ac justo dapibus euismod. 
  Phasellus tempor vehicula magna, ac ultrices risus congue vitae.
  
   Curabitur non purus ac justo dapibus euismod. 
  Phasellus tempor vehicula magna, ac ultrices risus congue vitae.
  </div>
</div>

//css
.container{
  height: 30px; /* Fixed height container */
}`;

export const outlineSnippet = `//css
button:focus{
  outline: 1px solid green;
}`;

export const outlineSyntaxSnippet = `outline: <outline-width> <outline-style> <outline-color>;`;

export const cursorSyntaxSnippet = `h1{
  cursor: pointer;
}

p{
  cursor: move;
}

img {
  cursor: url('custom_cursor.jpg'), auto;
}
`;

export const cursorUseCaseSnippet = `button{
  cursor: pointer;
}

a{
  cursor: pointer;
}

input[type="checkbox"]{
  cursor: pointer;
}

input[type="radio"]{
  cursor: pointer;
}`;

export const relativeNotAppliedSnippet = `//html
<div>
  <h1>
    This is amazing.This is amazing.This is amazing.This is amazing.This is amazing.This is amazing.
    This is amazing.This is amazing.This is amazing.This is amazing.
  </h1>
  
  <p>
  This is content.This is content.This is content.This is content.This is content.This is content.
  This is content.This is content.This is content.This is content.This is content.This is content.
  This is content.This is content.This is content.This is content.
  </p>
</div>

//css
div{
  border: 1px solid black;
}

h1{
  border: 1px solid black;
}`;

export const relativetAppliedSnippet = `//css
div{
  border: 1px solid black;
}

h1{
  border: 1px solid black;
  position: relative;
  top: 2rem;
}`;

export const defaultAbsoluteSnippet = `//css
div{
  border: 1px solid black;
}

h1{
  border: 1px solid black;
  position: absolute;
  top: 2rem;
}`;

export const specialRelAbsnippet = `//html
<div class="parent">
  <p class="child">content</p>
</div>

// css
.parent{
  position: relative; // applied on parent
}

.child{
  position: absolute; // applied on child
  bottom: 2rem;
}`;

export const fixedsnippet = `//html
<div class="parent">
  Some content
</div>

// css
.parent{
  position: fixed; 
  top: 2rem;
}`;

export const stickySnippet = `//html
<p>
Wow, we are learning a new positioning
  which will stick somewhere.
</p>

<div>
  <p class="first">A</p>
  <p>Andrew W.K.</p>
  <p>Apparat</p>
  <p>Arcade Fire</p>
  <p>At The Drive-In</p>
  <p>Aziz Ansari</p>
  
  <p>
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
  </p>
  
  <p>piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
  <p>
  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
  </p>
  
  <p>
  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
  </p>  
</div>

//css
.first {
  position: sticky;
  top: -1px;
}`;

// Javascript

export const jsHomeSnippet = `<html>
  <head>Head...</head>
   <body>   
      <script type = "text/javascript">
          document.write("Going good bro...!")
      </script>      
   </body>
</html>
`;

export const basicJsSnippet = `<script>
  // basic javaScript code
  alert("Hello, World!");
</script>
`;

export const basicJsUsageSnippet = `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript usage in separate files</h2>
<p id="para">Hola amigo</p>

<button type="button" onclick="handleSubmit()">submit</button>

// other js file connected here with script tag
<script type="text/javascript" src="./app.js"></script>

</body>
</html>

//js file
app.js
-----

function handleSubmit() {
  document.getElementById("para").innerHTML = "Amigo changed.";
}`;

export const varSnippet = `var num = 3;
if (true) {
  var num = 100;
  console.log(num); // Output: 100
}
console.log(num); // Output: 100`;

export const letSnippet = `let x = 15;
if (true) {
  let x = 101;
  console.log(x); // Output: 101
}
console.log(x); // Output: 15`;

export const constSnippet = `const PI = 3.14;
console.log(PI); // Output: 3.14

PI = 3.14159; // Error: Assignment to constant variable`;

export const varHoistedSnippet = `console.log(x); // Output: undefined
var x = 5;
`;

export const letconstSnippet = `console.log(x); // Error: ReferenceError: x is not defined
let x = 5;`;

export const globalVarSnippets = `// Global variable
myGlobalVariable = 10;`;

export const localVarSnippet = `// Function with local variables
function newFunction() {
  var localVar = 20; // Local variable
  let anotherLocalVar = "Hello"; // Local variable
  const PI = 3.14; // Local variable
  // ...
}`;

export const dataTypesSnippet = `let num = 10;
console.log(typeof num); // Output: "number"

let str = "Hello";
console.log(typeof str); // Output: "string"

let arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"`;

export const coercionSnippet = `console.log(5 + "10"); // Output: "510"`;

export const typeSnippet = `let num = 10;
let str = String(num); // Explicitly converting a number to a string
console.log(typeof str); // Output: "string"

let bool = Boolean(0); // Explicitly converting 0 to a boolean
console.log(bool); // Output: false`;

export const typeOfSnippet = `console.log(typeof 42); // Output: "number"
console.log(typeof "Hello"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object"
console.log(typeof []); // Output: "object"
console.log(typeof {}); // Output: "object"
console.log(typeof function() {}); // Output: "function"`;

export const ifElseBasicSnippet = `if (condition) {
  // If the condition is true, run this code block
} else {
  // If the condition is false, run this code block
}`;

export const ifElseLogicSnippet = `let num = 7;

if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}`;

export const multipleIfElseSnippet = `let age = 18;

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 18) {
  console.log("Teenager");
} else {
  console.log("Adult");
}`;

export const equalitySnippet = `// with equality operator
let num = 5;
if (num == 5) {
  // Code block executed if num is equal to 5
}

// with  strict equality operator
let num = 5;
if (num === 5) {
  // Code block executed if num is equal to 5 and has the same type
}`;

export const shortcircutSnippet = `// Using short-circuit evaluation to avoid potential errors
let name = "John";
if (name && name.length > 0) {
  console.log("Name is present and not empty");
}

// Using short-circuit evaluation for default values
function greetUser(name) {
  name = name || "Guest";
  console.log("Hello, " + name);
}

greetUser(); // Output: Hello, Guest
greetUser("Alice"); // Output: Hello, Alice`;

export const basicSwitchSnippet = `switch (expression) {
  case value1:
    // Code block executed when expression matches value1
    break;
  case value2:
    // Code block executed when expression matches value2
    break;
  // Additional cases...
  default:
    // Code block executed when no case matches the expression
}`;

export const switchCaseExampleSnippet = `let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName); // Output: "Wednesday"`;

export const anotherSwitchCaseSnippet = `function getAnimalName(animalCode) {
  let animalName;

  switch (animalCode) {
    case 1:
      animalName = "Lion";
      break;
    case 2:
      animalName = "Elephant";
      break;
    case 3:
      animalName = "Tiger";
      break;
    case 4:
      animalName = "Giraffe";
      break;
    case 5:
      animalName = "Zebra";
      break;
    default:
      animalName = "Unknown animal";
  }

  return animalName;
}

// Using document.write to display the result
const animalCode = 3;
const animalName = getAnimalName(animalCode);
document.write("The animal is: " + animalName);`;

export const basicforLoopSnippet = `for (let i = 0; i < 5; i++) {
  console.log(i);
}`;

export const basicForLoopOutputSnippet = `0
1
2
3
4`;

export const forLoopFirstSolSnippet = `function calculateSum(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}

// Testing the function
const inputNumber = 5;
const result = calculateSum(inputNumber);
console.log("The total sum of all the numbers from 1 to", inputNumber, "is:", result);`;

export const forLoopResultSnippet = `The total sum of all the numbers from 1 to 5 is: 15`;

export const basicForInSnytaxSnippet = `for (variable in object) {
  // code to be executed
}`;

export const forInExampleSnippet = `const person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}`;

export const forInOutputSnippet = `name: John
age: 30
profession: Developer`;

export const forInExampleCodeSnippet = `const scores = {
  math: 90,
  science: 85,
  history: 95,
  english: 80
};

let totalScore = 0;

for (let subject in scores) {
  totalScore += scores[subject];
}

console.log("The total score is:", totalScore);`;

export const forInCodeOutputSnippet = `The total score is: 350`;

export const functionDeclarationsSnippet = `function functionName(parameters) {
  // code to be executed
}`;

export const functionDeclarationsCodeSnippet = `function greet(name) {
  console.log("Hello, " + name + "!");
}`;

export const functionExpressionsSnippet = `const functionName = function(parameters) {
  // code to be executed
};`;

export const functionExpressionsCodeSnippet = `const square = function(num) {
  return num * num;
};`;

export const functionCallCodeSnippet = `greet("Alice"); // Output: Hello, Alice!

const result = square(5);
console.log(result); // Output: 25`;

export const functionParamsCodeSnippet = `// function defination
function sayHello(name, age) {
  console.log("Hello, " + name + "! You are " + age + " years old.");
}

// function call
sayHello("Alice", 25);`;

export const functionReturnCodeSnippet = `function add(a, b) {
  return a + b;
}

const result = add(3, 4);
console.log(result); // Output: 7`;

export const funcExpressionSnippet = `const functionName = function(parameters) {
  // code to be executed
};`;

export const namedFuncExpressionSnippet = `const printSomething = (name) => {
  console.log("Hello, " + name + "!");
};`;

export const arrowOutSnippets = `const square = num => num * num;`;

export const arrowExampleSnippets = `const calculateArea = (length, width) => length * width;

const length = 5;
const width = 3;
const area = calculateArea(length, width);

console.log("The area of the rectangle is:", area);`;

export const arrowOutputSnippets = `The area of the rectangle is: 15`;

export const fnScopeSnippet = `function outerFunction() {
  const message = "Hello";

  function innerFunction() {
    console.log(message);
  }

  innerFunction();
}

outerFunction(); // Output: Hello`;

export const closureSnippet = `function outerFunction() {
  const message = "Hello";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: Hello`;

export const btnClickedClosureSnippet = `function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log("Clicked:", count, "times");
  }

  return increment;
}

const counter = createCounter();

// Simulating button clicks
counter(); // Output: Clicked: 1 times
counter(); // Output: Clicked: 2 times
counter(); // Output: Clicked: 3 times`;

export const btnClickdOutSnippet = `Clicked: 1 times
Clicked: 2 times
Clicked: 3 times`;

export const sqBrcktSnippet = `const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];`;

export const constrctrSnippet = `const numbers = new Array(1, 2, 3, 4, 5);
const fruits = new Array("apple", "banana", "orange");`;

export const arrayFromSnippets = `const numbers = Array.from([1, 2, 3, 4, 5]);
const fruits = Array.from("banana");`;

export const fillSnippets = `const numbers = new Array(5).fill(0);`;

export const emptyArrSnippets = `const emptyArray = [];
const anotherEmptyArray = new Array();`;

export const sqrBrcktSnippet = `const numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]); // Output: 10
console.log(numbers[2]); // Output: 30`;

export const modifyingArrSnippets = `const fruits = ["apple", "banana", "orange"];

fruits[1] = "grape";
console.log(fruits); // Output: ["apple", "grape", "orange"]`;

export const accessArrSnippets = `const fruits = ["apple", "banana", "orange"];
let index = 2;

console.log(fruits[index]); // Output: "orange"

index++;
console.log(fruits[index]); // Output: undefined`;

export const isArraySyntaxSnippet = `Array.isArray(value)`;

export const isArrayExmpleSnippet = `Array.isArray([]);          // true
Array.isArray([1, 2, 3]);   // true
Array.isArray(new Array()); // true

Array.isArray('hello');     // false
Array.isArray(42);          // false
Array.isArray({});          // false
Array.isArray(null);        // false`;

export const lengthArrSnippets = `const fruits = ['apple', 'banana'];
const leng = fruits.length;
console.log(leng); // Output: 2`;

export const reverseArrSnippet = `// syntax
array.reverse()

// Example
const fruitList = ['cherry', 'apple', 'banana', 'date'];
fruitList.reverse();

console.log(fruits); // Output: ['date', 'banana', 'apple', 'cherry']`;

export const toStringSnippet = `// toString method usecase
const array = [1, 2, 3, 4, 5];
const arrayString = array.toString();
console.log(arrayString); // Output: "1,2,3,4,5"

// join method usecase
const array = [1, 2, 3, 4, 5];
const arrayString = array.join('-');
console.log(arrayString); // Output: "1-2-3-4-5"
`;

export const splitSnippet = `const arrayString = "1,2,3,4,5";
const array = arrayString.split(','); // separate based on comma
console.log(array); // Output: [ '1', '2', '3', '4', '5' ]

const arrayString = "gooday";
const array = arrayString.split(''); // separate character by character
console.log(array); // Output: [ 'g', 'o', 'o', 'd', 'a', 'y' ]`;

export const pushArrSnippets = `const fruits = ['apple', 'banana'];
const length = fruits.push('orange', 'kiwi');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'kiwi']
console.log(length); // Output: 4`;

export const popArrSnippets = `const fruits = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop();
console.log(fruits); // Output: ['apple', 'banana']
console.log(lastFruit); // Output: 'orange'`;

export const shiftArrSnippets = `const fruits = ['apple', 'banana', 'orange'];
const firstFruit = fruits.shift();
console.log(fruits); // Output: ['banana', 'orange']
console.log(firstFruit); // Output: 'apple'`;

export const unshiftArrSnippets = `const fruits = ['banana', 'orange'];
const length = fruits.unshift('apple', 'kiwi');
console.log(fruits); // Output: ['apple', 'kiwi', 'banana', 'orange']
console.log(length); // Output: 4`;

export const concatArrSnippets = `const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'kiwi'];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'kiwi']`;

export const sliceArrSnippets = `const fruits = ['apple', 'banana', 'orange', 'kiwi'];
const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['banana', 'orange']`;

export const spliceArrSnippets = `const array = [1, 2, 3, 4, 5];
const removedElements = array.splice(2, 2, 'a', 'b'); // removes 2 elements starting from index 2 and adds 'a' and 'b' in their place
console.log(array); // Output: [1, 2, 'a', 'b', 5]
console.log(removedElements); // Output: [3, 4]`;

export const removedSpliceSnippet = `const array = [1, 2, 3, 4, 5];
const removedElements = array.splice(2, 2);
console.log(array); // Output: [1, 2, 5]
console.log(removedElements); // Output: [3, 4]`;

export const addSpliceSnippet = `const array = [1, 2, 3, 4, 5];
array.splice(2, 0, 'a', 'b');
console.log(array); // Output: [1, 2, 'a', 'b', 3, 4, 5]`;

export const replaceSpliceSnippet = `const array = [1, 2, 3, 4, 5];
const replacedElements = array.splice(2, 2, 'a', 'b', 'c');
console.log(array); // Output: [1, 2, 'a', 'b', 'c', 5]
console.log(replacedElements); // Output: [3, 4]`;

export const deleteSnippet = `const names = ["Andy", "Robert", "Murdocht", "jane"];
delete names[0];
console.log(names[0]); // Output: undefined`;

export const flatSyntaxSnippet = `array.flat([depth])`;

export const flatExampleSnippet = `const numericArr = [1, 2, [3, 4, [5, 6]]];
const flattenedArray = numericArr.flat();
console.log(flattenedArray);
// Output: [1, 2, 3, 4, [5, 6]]

const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const completelyFlattenedArray = deeplyNestedArray.flat(Infinity);
console.log(completelyFlattenedArray);
// Output: [1, 2, 3, 4, 5]`;

export const forLoopSnippet = `const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`;

export const forEachSnippet = `const arr = [1, 2, 3, 4, 5];

arr.forEach((element) => {
  console.log(element);
});`;

export const forOfEachSnippet = `const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  console.log(element);
}`;

export const mapAndFilterSnippet = `// map method
array.map(callback(element, index, array), thisArg);

//filter method
array.filter(callback(element, index, array), thisArg);`;

export const mapAndFilterExampleSnippet = `//map example
const array = [1, 2, 3, 4, 5];
const mappedArray = array.map((element, index, array) => {
  return element * 2;
});
console.log(mappedArray); // Output: [2, 4, 6, 8, 10]

// filter example
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]`;

export const purposeOfMapSnippet = `// modifying array elements
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//Converting Data Format:
const persons = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const names = persons.map((person) => person.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']`;

export const purposeOfFilterSnippet = `// filtering numbers
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


// Filtering  Objects by Property
const products = [
  { name: 'Apple', price: 0.5 },
  { name: 'Banana', price: 0.25 },
  { name: 'Orange', price: 0.75 },
  { name: 'Kiwi', price: 1.0 }
];
const expensiveProducts = products.filter((product) => product.price > 0.5);
console.log(expensiveProducts);
// Output: [{ name: 'Orange', price: 0.75 }, { name: 'Kiwi', price: 1.0 }]

// Filtering  Strings by Condition
const words = ['hello', 'world', 'javascript', 'filter'];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords); // Output: ['javascript', 'filter']`;

export const reduceSyntaxSnippet = `array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);`;

export const reduceExampleSnippet = `// sum of all the elements in array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 15`;

export const maxReduceExampleSnippet = `const numbers = [1, 2, 3, 4, 5];
const maxNumber = numbers.reduce((max, current) => Math.max(max, current));
console.log(maxNumber); // Output: 5`;

export const minReduceExampleSnippet = `const numbers = [1, 2, 3, 4, 5];
const minNumber = numbers.reduce((min, current) => Math.min(min, current));
console.log(minNumber); // Output: 1`;

export const concatenateReduceExampleSnippet = `const words = ['Hello', 'World', 'JavaScript'];
const concatenatedString = words.reduce((result, current) => result + ' ' + current);
console.log(concatenatedString); // Output: 'Hello World JavaScript'`;

export const flatReduceExSnippet = `const nestedArr = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]`;

export const countOccurenceReduceSnippets = `const names = ['John', 'Jane', 'John', 'Mary', 'Jane'];

const countOccurrences = names.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(countOccurrences);
// Output: { John: 2, Jane: 2, Mary: 1 }`;

export const filtrArrSnippet = `const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]`;

export const findLastArrSnippet = `// syntax
findLast(callbackFn)
findLast(callbackFn, thisArg)

// example:
const numList = [5, 12, 50, 130, 44];

const found = numList.findLast((element) => element > 48);

console.log(found);
// Expected output: 130`;

export const findArrSnippet = `const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((number) => number > 3);
console.log(foundNumber); // Output: 4`;

export const findIndexArrSnippet = `const numbers = [1, 2, 3, 4, 5];
const foundIndex = numbers.findIndex((number) => number > 3);
console.log(foundIndex); // Output: 3`;

export const indexOfArrSnippet = `const fruits = ['apple', 'banana', 'orange'];
const index = fruits.indexOf('banana');
console.log(index); // Output: 1`;

export const lastIndexOfArrSnippet = `const fruits = ['apple', 'banana', 'orange', 'banana'];
const lastIndex = fruits.lastIndexOf('banana');
console.log(lastIndex); // Output: 3`;

export const includesArrSnippet = `const numbers = [1, 2, 3, 4, 5];
const includesNumber = numbers.includes(3);
console.log(includesNumber); // Output: true`;

export const sortSimpleArrSnippet = `// sort fn working
const numbersList = [3, 2, 1, 5, 4];
 numbersList.sort();
console.log(numbersList); // Output: [ 1, 2, 3, 4, 5 ]

// sort fn not working as expected
let numList = [2, 11, 5, 22, 6, 10, 3, 7, 6, 4, 6].sort();
console.log(numList); // Output: [10, 11, 2, 22, 3,4,  5, 6,  6, 6,7]`;

export const sortComparatorArrSnippet = `// sorting in ascending order
sort(function(a, b) {
  return a - b;
});

// sorting in descending order
sort(function(a, b) {
  return b - a;
});
`;

export const sortSimpleComparatorArrSnippet = `// sort an array of numbers
const numbersList = [3, 2, 1, 5, 4];
 numbersList.sort(function(a, b) {
  return a - b;
});
console.log(numbersList); // Output: [ 1, 2, 3, 4, 5 ]

// sort an array of characters
const charactersList = ["e", "c", "d", "b", "a"];
charactersList.sort(function(a, b) {
  return a.localeCompare(b);
});
console.log(charactersList); // Output: ['a', 'b', 'c', 'd', 'e']

// sort an array of words
const wordsList = ["elephant", "cow", "dog", "boy", "apple"];
wordsList.sort(function(a, b) {
  return a.localeCompare(b);
});
console.log(wordsList); // Output: ['apple', 'boy', 'cow', 'dog', 'elephant']
`;

export const sortSimpleComparatorDescArrSnippet = `// sort an array of numbers
const numbersList = [3, 2, 1, 5, 4];
 numbersList.sort(function(a, b) {
  return b - a;
});
console.log(numbersList); // Output: [ 5, 4, 3, 2, 1 ]

// sort an array of characters
const charactersList = ["e", "c", "d", "b", "a"];
charactersList.sort(function(a, b) {
  return b.localeCompare(a);
});
console.log(charactersList); // Output: [ 'e', 'd', 'c', 'b', 'a' ]

// sort an array of words
const wordsList = ["elephant", "cow", "dog", "boy", "apple"];
wordsList.sort(function(a, b) {
  return b.localeCompare(a);
});
console.log(wordsList); // Output: [ 'elephant', 'dog', 'cow', 'boy', 'apple']
`;

export const sortArrObjAscSnippet = `// sort an array of object by age property, age is number
const peoples = [
  { name: 'John', age: 21 },
  { name: 'Alice', age: 19 },
  { name: 'Bob', age:  23}
];

peoples.sort(function(a, b) {
  return a.age - b.age;
});

output:
[
  { name: 'Alice', age: 19 },
  { name: 'John', age: 21 },
  { name: 'Bob', age: 23 }
]

// sort an array of object by name property, neame is string
const peoples = [
  { name: 'John', age: 21 },
  { name: 'Alice', age: 19 },
  { name: 'Bob', age: 23 }
];

peoples.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

output:
[
  { name: 'Alice', age: 19 },
  { name: 'Bob', age: 23 },
  { name: 'John', age: 21 }
]`;

export const objLiteralSnippet = `const personObj = {
  name: 'Rui',
  age: 33,
  city: 'Washington',
  country: 'USA'
};`;

export const objOutptSnippet = `console.log(personObj.name);  // Output: Rui
console.log(personObj['age']); // Output: 33`;

export const objModfySnippet = `personObj.phone = '098765987';
personObj.surname = "Goncalves";

console.log(personObj.phone); // Output: "098765987"
console.log(personObj.surname);    // Output: "Goncalves"`;

export const deleteObjSnippet = `delete personObj.country;
console.log(personObj.country); // Output: undefined`;


export const personObjKeysSnippets = `const personObj = {
  name: 'Rui',
  age: 30,
  occupation: 'Developer'
};

const keys = Object.keys(personObj);
console.log(keys); // Output: ['name', 'age', 'occupation']`


export const personObjValsSnippets = `const personObj = {
  name: 'Rui',
  age: 30,
  occupation: 'Developer'
};

const values = Object.values(person);
console.log(values); // Output: ['Rui', 30, 'Developer']`

export const personObjEntriesSnippets = `const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

const entries = Object.entries(person);
console.log(entries);
// Output: [['name', 'John'], ['age', 30], ['occupation', 'Developer']]`

export const personObjAssignSnippets = `const target = {};
const source = { name: 'John', age: 30 };

Object.assign(target, source);

console.log(target); // Output: { name: 'John', age: 30 }`


export const objDestrctSnippets = `// case 1
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age, city } = person;  // destructuring

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

// case 2: destructuring in function arguments
function printPersonDetails({ name, age, city }) { // destructuring in function arguments
  console.log(name);  //John
  console.log(age);   //30
  console.log(age);   // New York
}

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

printPersonDetails(person);
`

export const spreadCpySnippet = `const originalArray = [1, 2, 3];
const newArray = [...originalArray];

console.log(newArray);  // Output: [1, 2, 3]`


export const spreadCmbSnippet = `const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]`


export const spreadCpyExtndSnippet = `const originalObject = { name: 'John', age: 30 };
const newObject = { ...originalObject };

console.log(newObject);  // Output: { name: 'John', age: 30 }`

export const restParamsSnippet = `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));  // Output: 10`


export const setTimeoutSnippet = ` // Syntax
setTimeout(callbackFunction, delay);`

export const setTimeoutExSnippet = ` // Example : Execute this callback after a delay of 1 second.
setTimeout(function(){
  console.log("Print this after 1 second");
}, 1000);`


export const setIntervalSnippet = ` // Syntax
setInterval(callbackFunction, delay);`


export const setIntervalExSnippet = ` // Example : Execute this callback after every 1 second.
setInterval(function(){
  console.log("Print this after every 1 second");
}, 1000);`

export const fetchAPIGetSnippet = `fetch('url', options)
.then(response => response.json())
.then(data => console.log(data));`

export const basicCallbackEx= `function dataFetch(callback) {
  setTimeout(function () {
    const data = 'Howdy, Romeo!';
    callback(data);
  }, 2000);
}

function manipulateData(data) {
  console.log(data);
}

dataFetch(manipulateData); // Output: Howdy, Romeo!`


export const basicPromiseSnippet = `const newPromise = new Promise((resolve, reject) => {
  // Asynchronous operation which will be resolved or rejected by promise
  setTimeout(() => {
    const result = 'Promise resolved';
    resolve(result); // Fulfilled state
    // or
    // reject('Promise rejected'); // Rejected state
  }, 2000); // Delaying the execution for 2 seconds
});

// Handle Promises by a .then() function
newPromise
  .then((result) => {
    console.log('Fulfilled:', result);
  })
  .catch((error) => {
    console.log('Rejected:', error);
  });`


export const basicAsyncAwaitSnippet = `function dataFetch() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = 'Oyo, Mundo!';
      resolve(data);
    }, 2000);
  });
}

async function manipulateDate() {
  try {
    const data = await dataFetch();
    console.log(data); // Output: Oyo, Mundo!
  } catch (error) {
    console.error(error);
  }
}

manipulateDate();`

export const tryCatchSnippet = `try {
  // Code that might throw an error
} catch (error) {
  // Error handling logic
}`

export const tryCatchExSnippet = `try {
  const result = 10 / 0; // Division by zero
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error);
}`

export const throwExceptionsSnippet = `throw new Error("Some specific Custom error message");`


export const promiseHandleErrorsSnippet = `asyncFunction()
.then(result => {
  // Code for successful completion
})
.catch(error => {
  // Error handling logic
});`

export const tryCatchHandleErrorsSnippet = `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    // Code for successful completion
  } catch (error) {
    // Error handling logic
  }
}`

export const accessElementsSnippet = `// Access an element by its ID
const element = document.getElementById('myElement');

// Access multiple elements by class name
const elements = document.getElementsByClassName('myClass');

// Access elements by tag name
const elements = document.getElementsByTagName('div');

// Access an element using CSS selector
const element = document.querySelector('.myClass');

// Access multiple elements using CSS selector
const elements = document.querySelectorAll('div');`


export const modifyContentSnippet = `// Modify innerHTML to change the content
element.innerHTML = 'New content';

// Modify textContent to change the text
element.textContent = 'New text';

// Set attribute value
element.setAttribute('src', 'image.jpg');

// Get attribute value
const src = element.getAttribute('src');

// Manipulate CSS classes
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('active');

// Modify style properties
element.style.color = 'red';
element.style.fontSize = '16px';`


export const createAppendSnippets = `// Create a new element
const newElement = document.createElement('div');

// Set properties and attributes
newElement.innerHTML = 'New element';
newElement.setAttribute('class', 'newClass');

// Append to the document or another element
document.body.appendChild(newElement); // Appending to the body

const parentElement = document.getElementById('parent');
parentElement.appendChild(newElement); // Appending to a specific parent element`


export const eventHandlingSnippets = `// Attach click event listener
element.addEventListener('click', function(event) {
  // Code to execute on click
});

// Attach keypress event listener
element.addEventListener('keypress', function(event) {
  // Code to execute on keypress
});

// Attach form submission event listener
formElement.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  // Code to execute on form submission
});`


// GIT

export const gitVerifySnippet = `git --version`

export const gitInstallLinuxSnippet = `sudo apt install git`

export const gitInstallRedHatSnippet = `sudo dnf install git

or 

sudo yum install git`

export const gitInstallMacSnippet = `brew install git`

export const gitInitAndDeInitSnippet = `// initialise a git repository
git init

// deinitialise a git repository
rm -rf .git  // .git files stores metadata so remove it
`

export const gitAddAllSnippet = `git add .`

export const gitCommitSnippet = `git commit -m "Created a Navbar" // Inside double quote is the commit message that user can write`

export const gitRemoteSnippet = `git branch -M main // change the name of current local branch to main
git remote add origin https://github.com/arjun2010-ece/sample_repo.git // add remote address locally
git push -u origin main   // Push local branch on remote github.com server 
`

export const gitSecondSnippet = `git clone https://github.com/arjun2010-ece/sample_repo.git // add remote address locally
git checkout -b feature/creating_navbar
git add .
git commit -m "created the navbar"
git push -u origin feature/creating_navbar   // Push local branch on remote github.com server 
`

export const gitCloneSyntax = `git clone <repository_url> [<destination_directory>]

git clone https://github.com/arjun2010-ece/sample_repo.git `

export const gitBranchSyntax = `git branch`

export const gitCheckoutSyntax = `// First way: create and move to a new branch
git checkout -b feature/creating_navbar

//Second way: Move to a new branch
git checkout main`


export const gitMergeSyntax = `git merge branchB // it will merge commits of branchB into branchA`

export const gitFetchSyntax = `git fetch // bring all the branches from remote
git checkout feature/creating_navbar // switch to that remote branch`

export const gitStatusSyntax = `git status`


// Reactjs

export const createReactAppSnippet = `npx create-react-app my-app`
export const cdProjectSnippet = `cd my-app`
export const projectStartSnippet = `npm start`
export const reactJsxSnippet = `import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Welcome to My Component</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}`