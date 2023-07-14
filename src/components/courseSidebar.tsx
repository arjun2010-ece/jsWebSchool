import { type FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter, type NextRouter } from 'next/router';
import Text from '@/components/Text';
import { fluid, remToPx } from '@/styles/Global.style';
import { theme as globalTheme } from 'twin.macro';
import { type COURSE_TYPE } from '@/utils/courseContent';

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
    props.active
      ? 'rgb(0, 186, 199)'
      : props.path
      ? ''
      : 'rgba(128, 128, 128, 0.5)'};
  &:hover {
    background-color: ${(props) =>
      props.active ? 'rgba(0, 186, 199, 0.8)' : ''};
    cursor: ${(props) => (props.active ? 'pointer' : '')};
  }
`;

const StyledListContainer = styled.ul`
  padding: 5px 0;
`;


type CourseSidebarProps = {
  courseTopic: COURSE_TYPE[];
};

const CourseSidebar: FC<CourseSidebarProps> = ({ courseTopic }) => {
  const router: NextRouter = useRouter();

  const courseContent = courseTopic.map((course, i) => {
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
      <StyledListContainer>{courseContent}</StyledListContainer>
    </aside>
  );
};

export default CourseSidebar;
