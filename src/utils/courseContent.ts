export type COURSE_TYPE = {
  topic: string;
  path: string;
};

export const HTML_TOPICS: COURSE_TYPE[] = [
  { topic: 'HTML ?', path: '/html' },
  { topic: 'Setting up', path: '/html/setting-up' },
  { topic: 'Tags vs Elements vs attributes', path: '/html/tags-elements' },
  { topic: 'Block vs Inline block vs Inline', path: '/html/block-inline' },
  { topic: 'Semantic tags', path: '/html/semantic-tags' },
  { topic: 'Common html tags', path: '' },
  { topic: 'Heading', path: '/html/heading' },
  { topic: 'paragraph', path: '/html/paragraph' },
  { topic: 'div', path: '/html/div' },
  { topic: 'span', path: '/html/span' },
  { topic: 'Unordered / Ordered list', path: '/html/unordered-vs-ordered-lists' },
  { topic: 'Image vs Pictures', path: '/html/image-pictures' },
  { topic: 'Tables', path: '/html/tables' },
  { topic: 'iframe', path: '/html/iframe' },
  { topic: 'HTML Forms', path: '' },
  { topic: 'Form Elements', path: '/html/form-elements' },
  { topic: 'Audio & Video tags', path: '/html/audio-vs-video-tags' },
  { topic: 'SEO', path: '/html/seo' },
  { topic: 'Html Comments', path: '/html/html-comments' },
  { topic: 'Very important', path: '' },
  { topic: 'Structure html of an UI', path: '/html/structure-html-ui' },
];

export const CSS_TOPICS: COURSE_TYPE[] = [
  { topic: 'CSS ?', path: '/css' },
  { topic: 'Way to think in css ?', path: '/css/way-to-think' },
  { topic: 'Setting up', path: '/css/setting-up' },
  { topic: 'Box model', path: '/css/box-model' },
  { topic: 'Units of measurement', path: '/css/units-measurement' },
  { topic: 'Common css properties', path: '' },
  { topic: 'Typography properties', path: '/css/typography-properties' },
  { topic: 'Dimension properties', path: '/css/dimension-properties' },
  { topic: 'Box model properties', path: '/css/box-model-properties' },
  { topic: 'Positioning properties', path: '/css/positioning-properties' },
  {
    topic: 'Display & Visibility properties',
    path: '/css/display-visibility-properties',
  },
  {
    topic: 'Background & border properties',
    path: '/css/background-border-properties',
  },
  { topic: 'Layout properties', path: '' },
  { topic: 'Flexbox properties', path: '/css/flexbox-properties' },
  { topic: 'Grid properties', path: '/css/grid-properties' },
  { topic: 'Grid child properties', path: '/css/grid-child-properties' },

  { topic: 'Animation & Transition Properties', path: '' },
  { topic: 'Transition Properties', path: '/css/transition-properties' },
  { topic: 'Animation Properties', path: '/css/animation-properties' },
  
  { topic: 'Miscellaneous properties', path: '' },
  { topic: 'overflow properties', path: '/css/overflow-properties' },
  { topic: 'outline properties', path: '/css/outline-properties' },
  { topic: 'cursor properties', path: '/css/cursor-properties' },
];

export const JAVASCRIPT_TOPICS: COURSE_TYPE[] = [
  { topic: 'Introduction to JavaScript ?', path: '/javascript' },
  { topic: 'Setting Up', path: '/javascript/setting-up' },
  { topic: 'Variables', path: '/javascript/variables' },
  {
    topic: 'Global vs local variables',
    path: '/javascript/global-local-variables',
  },
  { topic: 'Data Types', path: '/javascript/data-types' },
  { topic: 'Operators', path: '/javascript/operators' },
  {
    topic: 'IF...ELSE',
    path: '/javascript/if-else',
  },
  {
    topic: 'Switch Case',
    path: '/javascript/switch-case',
  },
  { topic: 'for loop', path: '/javascript/for-loop' },
  { topic: 'for...in loop', path: '/javascript/for-in-loop' },
  { topic: 'Functions', path: '/javascript/functions' },
  {
    topic: 'Functions expressions and arrow functions',
    path: '/javascript/expressions-arrow',
  },
  {
    topic: 'Function scope and closures',
    path: '/javascript/function-scope-closure',
  },
  { topic: 'Arrays', path: '/javascript/arrays' },
  {
    topic: 'Array methods (push, pop etc.)',
    path: '/javascript/array-methods',
  },
  {
    topic: 'Array iteration using loops(for loops etc) & methods(map, filter)',
    path: '/javascript/array-iteration-loops-methods',
  },
  { topic: 'Js reduce()', path: '/javascript/reduce' },
  {
    topic: 'searching and filtering methods',
    path: '/javascript/searching-and-filtering',
  },
  { topic: 'Sorting methods', path: '/javascript/sorting-methods' },
  { topic: 'Objects', path: '/javascript/objects' },
  { topic: 'Spread and rest', path: '/javascript/spread-rest' },
  {
    topic: 'Asynchronous JavaScript',
    path: '/javascript/asynchronous-javaScript',
  },
  {
    topic: 'Callback, promise and Async/Await',
    path: '/javascript/callback-promise-async-await',
  },
  { topic: 'Error Handling', path: '/javascript/error-handling' },
  { topic: 'DOM Manipulation', path: '/javascript/dom-manipulation' },
];

export const GIT_TOPICS: COURSE_TYPE[] = [
  { topic: 'What is GIT ?', path: '/git' },
  { topic: 'Setting up GIT', path: '/git/setup-git' },
  { topic: 'How GIT works in project', path: '/git/how-git-works-in-project' },
  { topic: 'Popular git commands', path: '/git/popular-git-commands' },
];

export const REACTJS_TOPICS: COURSE_TYPE[] = [
  { topic: 'What is ReactJs ?', path: '/reactjs' },
  {
    topic: 'Setting up react project',
    path: '/reactjs/setting-up-react-project',
  },
  { topic: 'Understanding JSX', path: '/reactjs/understanding-jsx' },
];
