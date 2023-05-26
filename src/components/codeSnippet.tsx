import { type FC } from 'react';
import styled from 'styled-components';

const StyledCodeContainer = styled.pre`
  margin-top: 20px;
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 16px;
`;

type CodeSnippetProps = {
    content: string;
};

const CodeSnippet: FC<CodeSnippetProps> = ({ content }) => {
  return <StyledCodeContainer>{content}</StyledCodeContainer>;
};

export default CodeSnippet;
