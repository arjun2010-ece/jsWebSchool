import styled from 'styled-components';
import tw from 'twin.macro';

// types
type ButtonProps = {
  danger?: boolean;
  outline?: boolean;
  disabled?: boolean;
};

export const Title = tw.h1`
  text-6xl
  font-bold
`;

export const SubTitle = tw.h2`
  text-4xl
  font-bold
`;

export const ButtonGroup = tw.div`
  flex
  gap-2
  flex-wrap
  justify-center
  p-1
`;
export const ImageContainer = styled.div`
 max-width: 600px;
 max-height: 600px;
 margin: 1rem auto;

`
