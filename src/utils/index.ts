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
  { title: 'ReactJs', path: '/reactjs' },
  { title: 'Node.js', path: '/nodejs' },
  { title: 'GIT', path: '/git' },
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