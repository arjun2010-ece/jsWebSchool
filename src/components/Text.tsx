/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
// import { css } from 'styled-components';
import type { CSSObject } from 'styled-components';
import type { FC } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const Parent = styled.div`
  ${tw`mb-2 lg:mb-8 last-of-type:mb-0`}
  b {
    ${tw`font-bold`}
  }
  ul{
    list-style-type: disc;
    width: 60%;
    margin: 0 auto;
  }
`;

type TextProps = {
  parentEl: 'p' | 'div' | 'span';
  content: any;
  customStyle?: string | number | CSSObject | undefined;
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
