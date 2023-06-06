import type { CSSObject } from 'styled-components';
import type { FC } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import type {
  DefaultTheme,
  ThemeProps,
  Interpolation,
} from 'styled-components';

const Parent = styled.div`
  ${tw`mb-2 lg:mb-8 last-of-type:mb-0`}
  b {
    ${tw`font-bold`}
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
    font-weight: 500;
  }
  a {
    color: blue;
    border-bottom: 1px solid blue;
  }
`;

type TextProps = {
  parentEl: 'p' | 'div' | 'span';
  content: string;
  customStyle?: Interpolation<ThemeProps<DefaultTheme>> | CSSObject;
};

const Text: FC<TextProps> = ({ content, parentEl, customStyle }) => {
  return (
    <Parent
      as={parentEl}
      css={[customStyle]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Text;
