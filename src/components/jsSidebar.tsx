import { type FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter, type NextRouter } from 'next/router';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import { theme as globalTheme } from 'twin.macro';

type StyledListItemProps = {
  path: string;
  active: boolean;
};

const StyledListItem = styled.li<StyledListItemProps>`
  font-size: 15px;
  color: #000;
  font-weight: 500;
  text-align: left;
  line-height: 20px;
  margin: 0px;
  margin-top: ${(props) => (props.path === '' ? '1rem' : 0)};
  padding: 10px 0px;
  padding-left: 5px;
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
  padding: 5px 0;
`;

type JAVASCRIPT_TOPICS_PROPS = {
  topic: string;
  path: string;
};

const JAVASCRIPT_TOPICS: JAVASCRIPT_TOPICS_PROPS[] = [
  { topic: 'Introduction to JavaScript ?', path: '/javascript' },
  { topic: 'Setting Up', path: '/javascript/setting-up' },
  { topic: 'Variables', path: '/javascript/variables' },
  {
    topic: 'Global vs local variables',
    path: '/javascript/global-local-variables',
  },
  { topic: 'Data Types', path: '/javascript/data-types' },
  { topic: 'Operators', path: '/javascript/operators' },
  {
    topic: 'IF...ELSE',
    path: '/javascript/if-else',
  },
  {
    topic: 'Switch Case',
    path: '/javascript/switch-case',
  },
  { topic: 'for loop', path: '/javascript/for-loop' },
  { topic: 'for...in loop', path: '/javascript/for-in-loop' },
  { topic: 'Functions', path: '/javascript/functions' },
  { topic: 'Functions expressions and arrow functions', path: '/javascript/expressions-arrow' },
  { topic: 'Function scope and closures', path: '/javascript/function-scope-closure' },
  { topic: 'Arrays', path: '/javascript/arrays' },
  { topic: 'Objects', path: '/javascript/objects' },
  { topic: 'DOM Manipulation', path: '/javascript/dom-manipulation' },
  {
    topic: 'Asynchronous JavaScript',
    path: '/javascript/asynchronous-javaScript',
  },
  { topic: 'Error Handling', path: '/javascript/error-handling' },
];

const JsSidebar: FC = () => {
  const router: NextRouter = useRouter();

  const jsContent = JAVASCRIPT_TOPICS.map((course, i) => {
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
      <StyledListContainer>{jsContent}</StyledListContainer>
    </aside>
  );
};

export default JsSidebar;
