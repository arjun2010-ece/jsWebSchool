import { type FC } from 'react';
import styled from 'styled-components';

//  If added content increases the horizontal with of a div element, and if you want the width of
//  div to remain same irrespective of less content or more content, then you need the extra content
// on first line to break into second line and its possible by : white-space: pre-wrap;
const StyledCodeContainer = styled.pre`
  background-color: black;
  color: white;
  margin-top: 20px;
  padding: 20px;
  font-size: 16px;
  overflow-x: auto;
`;

type CodeSnippetProps = {
  content: string;
};

const CodeSnippet: FC<CodeSnippetProps> = ({ content }) => {
  return <StyledCodeContainer>{content}</StyledCodeContainer>;
};

export default CodeSnippet;
