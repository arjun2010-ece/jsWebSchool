import styled, { css } from "styled-components";

const HeadingComponent = styled.h1`
  color: black;

  ${(props) =>
    props.customStyle &&
    css`
      ${props.customStyle}
    `}
`;

const Heading = ({ headingType, content, customStyle }) => {
  const StyledHeading = styled(HeadingComponent)`
    ${customStyle}
  `;

  return <StyledHeading as={headingType}>{content}</StyledHeading>;
};

export default Heading;

// const extraStyles = `
//     background-color: red;
//     border-color: red;
//   `;
