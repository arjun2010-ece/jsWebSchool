import styled, { css } from "styled-components";

const HeadingComponent = styled.h1`
  color: black;

  ${(props) =>
    props.$customstyle &&
    css`
      ${props.$customstyle}
    `}
`;

// const createHeadingComponent = (customStyle) => styled(HeadingComponent)`
// ${customStyle}
// `;

const Heading = ({ headingType, content, customStyle }) => {
  // const StyledHeading = createHeadingComponent(customStyle);

  return <HeadingComponent as={headingType} $customstyle={customStyle}>{content}</HeadingComponent>;
};

export default Heading;

// const extraStyles = `
//     background-color: red;
//     border-color: red;
//   `;
