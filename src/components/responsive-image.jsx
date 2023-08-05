import styled from 'styled-components';
import Image from 'next/image';


const StyledBox = styled.div`
  display: flex;
  height: ${(props) => props?.$boxheight || 'auto'};
  border: ${(props) => (props?.$hideborders === "true" ? "0" : '0.4px solid black')};
  margin-top: ${(props) => (props?.$removetopspace === "true" ? "0" : '30px')};
`;


const ResponsiveImage = ({
  boxHeight,
  srcUrl,
  altText,
  hideBorders = false,
  removeTopSpace = false,
}) => {
  return (
    <StyledBox $boxheight={boxHeight} $hideborders={hideBorders.toString()} $removetopspace={removeTopSpace.toString()}>
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
