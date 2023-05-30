/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter, type NextRouter } from 'next/router';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import { theme as globalTheme } from 'twin.macro';

const StyledListItem = styled.li<any>`
  font-size: 15px;
  color: #000;
  font-weight: 500;
  text-align: left;
  line-height: 20px;
  margin: 0px;
  margin-top: ${(props) => (props.path === '' ? '1rem' : 0)};
  padding: 10px 0px;
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  background: ${(props) =>
    props.active ? 'lightblue' : props.path ? '' : 'rgba(128, 128, 128, 0.5)'};
  &:hover {
    background-color: ${(props) => (props.active ? 'lightblue' : '')};
    cursor: ${(props) => (props.active ? 'pointer' : '')};
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
  { topic: 'Common html tags', path: '' },
  { topic: 'Heading', path: '/html/heading' },
  { topic: 'paragraph', path: '/html/paragraph' },
  { topic: 'div', path: '/html/div' },
  { topic: 'span', path: '/html/span' },
  { topic: 'Unordered / Ordered list', path: '/html/unordered-ordered' },
  { topic: 'Image vs Pictures', path: '/html/image-pictures' },
  { topic: 'Tables', path: '/html/tables' },
];

const HtmlSidebar: FC = () => {
  const router: NextRouter = useRouter();

  const htmlContent = HTML_TOPICS.map((course, i) => {
    const link = course?.path ? (
      <Link href={course?.path}>{course?.topic}</Link>
    ) : (
      <Text
        content={course?.topic}
        parentEl="p"
        customStyle={fluid(
          remToPx(globalTheme`fontSize.base`),
          remToPx(globalTheme`fontSize.lg`),
        )}
      />
    );
    return (
      <StyledListItem
        key={i}
        active={course?.path == router?.route}
        path={course?.path}
      >
        {link}
      </StyledListItem>
    );
  });

  return (
    <aside>
      <StyledListContainer>{htmlContent}</StyledListContainer>
    </aside>
  );
};

export default HtmlSidebar;
