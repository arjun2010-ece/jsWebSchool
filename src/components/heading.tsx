import styled from 'styled-components';
import type { CSSObject } from 'styled-components';
import type { FC } from 'react';

const HeadingComponent = styled.h1`
  color: black;
`;

type HeadingType = {
  headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  content: string;
  customStyle?: string | number | CSSObject | undefined;
};

const Heading: FC<HeadingType> = ({ headingType, content, customStyle }) => {
  return (
    <HeadingComponent as={headingType} css={[customStyle]}>
      {content}
    </HeadingComponent>
  );
};

export default Heading;
