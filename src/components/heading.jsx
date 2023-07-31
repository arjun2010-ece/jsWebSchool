import styled, { css } from 'styled-components';

const HeadingComponent = styled.h1`
  color: black;

  ${props => props.customStyle && css`
  ${props.customStyle}
`}
`;

const Heading = ({ headingType, content, customStyle }) => {
  return (
    <HeadingComponent as={headingType} customStyle={customStyle}>
      {content}
    </HeadingComponent>
  );
};

export default Heading;


// const extraStyles = `
//     background-color: red;
//     border-color: red;
//   `;