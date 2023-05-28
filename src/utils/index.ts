type menuItemsType = {
  title: string;
  path: string;
};

export const MENU_ITEMS: menuItemsType[] = [
  { title: 'HTML', path: '/html' },
  { title: 'CSS3', path: '/css' },
  { title: 'Javascript', path: '/javascript' },
  { title: 'ReactJs', path: '/reactjs' },
  { title: 'Node.js', path: '/nodejs' },
  { title: 'GIT', path: '/git' },
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

export const htmlTagcodeSnippet = `<h1>.....</h1>
<p>.....</p>
<div>.....</div>`;

export const htmlElementcodeSnippet = `<h1>Learn HTML.</h1>
<p> A new day.</p>
<div>Wrap this element.</div>`

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
