import { type FC } from 'react';
import styled, { type CSSProp } from 'styled-components';
// import tw, { theme as globalTheme, css } from 'twin.macro';

//  If added content increases the horizontal with of a div element, and if you want the width of
//  div to remain same irrespective of less content or more content, then you need the extra content
// on first line to break into second line and its possible by : white-space: pre-wrap;
const StyledCodeContainer = styled.pre`
  background-color: black;
  color: white;
  margin-top: 20px;
  padding: 20px;
  font-size: 14px;
  overflow-x: auto;
  border-radius: 10px;
`;

type CodeSnippetProps = {
  content: string;
  codeContainerStyle?: CSSProp;
};

const CodeSnippet: FC<CodeSnippetProps> = ({ content, codeContainerStyle }) => {
  return <StyledCodeContainer css={codeContainerStyle}>{content}</StyledCodeContainer>;
};

export default CodeSnippet;
