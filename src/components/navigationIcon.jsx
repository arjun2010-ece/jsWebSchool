import styled from 'styled-components';
import Link from 'next/link';

const Svg = styled('svg')`
  width: 24px;
  height: 24px;
`;

const StyledNavigationWrapper = styled('div')`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-top-style: solid;
  border-bottom-style: solid;
`;

const nextIcon = (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 492.004 492.004"
    className=""
  >
    <circle
      r="246.002"
      cx="246.002"
      cy="246.002"
      fill="#bac8d3"
      transform="matrix(1,0,0,1,0,0)"
    ></circle>
    <g transform="matrix(0.7,0,0,0.7,73.8006088256837,73.80059509277345)">
      <path
        d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
        fill="#000000"
        data-original="#000000"
      ></path>
    </g>
  </Svg>
);

const prevIcon = (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 492 492"
    className=""
  >
    <circle
      r="246"
      cx="246"
      cy="246"
      fill="#bac8d3"
    ></circle>
    <g transform="matrix(0.7,0,0,0.7,73.79998397827148,73.80000000000001)">
      <path
        d="M198.608 246.104 382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"
        fill="#000000"
        data-original="#000000"
        className=""
      ></path>
    </g>
  </Svg>
);


const NavigationIcon = ({ prevLink, nextLink }) => {
  const prevItem =
    prevLink !== '' ? (
      <Link href={prevLink} className="flex items-center gap-2">
        {prevIcon} Prev
      </Link>
    ) : (
      <div />
    );

  const nextItem =
    nextLink !== '' ? (
      <Link href={nextLink} className="flex items-center gap-2">
        Next {nextIcon}
      </Link>
    ) : (
      <div />
    );

  return (
    <StyledNavigationWrapper className="my-8 flex justify-between py-2">
      {prevItem}
      {nextItem}
    </StyledNavigationWrapper>
  );
};

export default NavigationIcon;
