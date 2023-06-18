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

type CSS_TOPICS_PROPS = {
  topic: string;
  path: string;
};

const CSS_TOPICS: CSS_TOPICS_PROPS[] = [
  { topic: 'CSS ?', path: '/css' },
  { topic: 'Way to think in css ?', path: '/css/way-to-think' },
  { topic: 'Box model', path: '/css/box-model' },
  { topic: 'Units of measurement', path: '/css/units-measurement' },
  { topic: 'Common css properties', path: '' },
  { topic: 'Typography properties', path: '/css/typography-properties' },
  { topic: 'Dimension properties', path: '/css/dimension-properties' },
  { topic: 'Box model properties', path: '/css/box-model-properties' },
  { topic: 'Positioning properties', path: '/css/positioning-properties' },
  { topic: 'Display & Visibility properties', path: '/css/display-visibility-properties' },
  { topic: 'Background & border properties', path: '/css/background-border-properties' },
  { topic: 'Layout properties', path: '' },
  { topic: 'Flexbox properties', path: '/css/flexbox-properties' },
  { topic: 'Grid properties', path: '/css/grid-properties' },
  { topic: 'Grid child properties', path: '/css/grid-child-properties' },
  { topic: 'Miscellaneous properties', path: '' },
  { topic: 'overflow properties', path: '/css/overflow-properties' },
  { topic: 'outline properties', path: '/css/outline-properties' },
  { topic: 'cursor properties', path: '/css/cursor-properties' },
];

const CssSidebar: FC = () => {
  const router: NextRouter = useRouter();

  const cssContent = CSS_TOPICS.map((course, i) => {
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
      <StyledListContainer>{cssContent}</StyledListContainer>
    </aside>
  );
};

export default CssSidebar;
