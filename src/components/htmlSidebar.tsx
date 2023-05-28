/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter, type NextRouter } from 'next/router';

// import { PAGES } from '@/utils';

const StyledListItem = styled.li<any>`
  font-size: 15px;
  color: #000;
  font-weight: 500;
  text-align: left;
  line-height: 20px;
  margin: 0px;
  padding: 10px 0px;
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  background: ${(props) => (props.active ? 'lightblue' : '')};
  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
`;

const StyledListContainer = styled.ul`
  padding: 5px 5px;
`;

type HTML_TOPICS_PROPS = {
  topic: string;
  path: string;
};

const HTML_TOPICS: HTML_TOPICS_PROPS[] = [
  { topic: 'HTML ?', path: '/html' },
  { topic: 'Tags vs Elements vs attributes', path: '/html/tags-elements' },
  { topic: 'Block vs Inline block vs Inline', path: '/html/block-inline' },
  { topic: 'Semantic tags', path: '/html/semantic-tags' },
];

const HtmlSidebar: FC = () => {
  const router: NextRouter = useRouter();

  const htmlContent = HTML_TOPICS.map((course, i) => (
    <StyledListItem key={i} active={course?.path == router?.route}>
      <Link href={course?.path}>{course?.topic}</Link>
    </StyledListItem>
  ));

  return (
    <aside>
      <StyledListContainer>{htmlContent}</StyledListContainer>
    </aside>
  );
};

export default HtmlSidebar;
