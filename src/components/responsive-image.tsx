import { type FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type StyledBoxProps = {
  boxHeight?: string;
  hideBorders?: boolean;
  removeTopSpace?: boolean;
};

const StyledBox = styled.div<StyledBoxProps>`
  display: flex;
  height: ${(props) => props?.boxHeight || 'auto'};
  border: ${(props) => (props?.hideBorders ? 0 : '0.4px solid black')};
  margin-top: ${(props) => (props?.removeTopSpace ? 0 : '30px')};
`;

type ResponsiveImageProps = StyledBoxProps & {
  srcUrl: string;
  altText: string;
  hideBorders?: boolean;
  // removeTopSpace?: boolean
};

const ResponsiveImage: FC<ResponsiveImageProps> = ({
  boxHeight,
  srcUrl,
  altText,
  hideBorders = false,
  removeTopSpace = false,
}) => {
  return (
    <StyledBox boxHeight={boxHeight} hideBorders={hideBorders} removeTopSpace={removeTopSpace}>
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
