import styled, { css } from 'styled-components';


const Parent = styled.div`
  margin-bottom: 0.5rem;
  &:last-of-type{
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 2rem;
  }

  color: black;
  b {
    font-weight: 700;
  }
  ul {
    list-style-type: disc;
    width: 88%;
    margin: 0 auto;
    color: black;
  }
  ol {
    width: 78%;
    margin: 0 auto;
    color: black;
    list-style-type: decimal;
    font-weight: 400;
  }
  a {
    color: blue;
    border-bottom: 1px solid blue;
  }
  blockquote {
    line-height: 1.8;
  }
  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    vertical-align: -0.4em;
  }
  blockquote:after {
    color: #ccc;
    content: close-quote;
    font-size: 4em;
    line-height: 0.1em;
    vertical-align: -0.4em;
  }
  ${props => props.customStyle && css`
  ${props.customStyle}
`}
`;

// type TextProps = {
//   parentEl: 'p' | 'div' | 'span' | 'section';
//   content: string;
//   customStyle?: Interpolation<ThemeProps<DefaultTheme>> | CSSObject;
// };

const Text = ({ content, parentEl, customStyle }) => {
  return (
    <Parent
      as={parentEl}
      customStyle={customStyle}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Text;
