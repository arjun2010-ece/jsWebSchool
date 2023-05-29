import { type FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type StyledBoxProps = {
  boxHeight?: string;
};

const StyledBox = styled.div<StyledBoxProps>`
  display: flex;
  height: ${(props) => props?.boxHeight || '200px'};
  border: 0.4px solid black;
  margin-top: 30px;
`;


type ResponsiveImageProps = StyledBoxProps & {
  srcUrl: string;
  altText: string;
};

const ResponsiveImage: FC<ResponsiveImageProps> = ({
  boxHeight,
  srcUrl,
  altText,
}) => {
  return (
    <StyledBox boxHeight={boxHeight}>
      <Image
        src={srcUrl}
        alt={altText}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%' }}
        // mandatory, otherwise image not visible
      />
    </StyledBox>
  );
};

export default ResponsiveImage;
