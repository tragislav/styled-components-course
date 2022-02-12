/* eslint-disable no-shadow */
import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

// eslint-disable-next-line no-unused-vars
const StyledButton = styled.button.attrs((props) => ({
  outlined: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: poiner;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }
  align-self: ${(props) => props.align || 'stretch'};

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || props.theme.colors.primary};
      background: ${(props) => props.background || 'white'};
    `}

  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || props.theme.colors.primary};
      border: 1px solid ${(props) => props.color || props.theme.colors.primary};
      background: transparent;
    `}
`;

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`;

function Button(props) {
  return <LargeButton {...props} />;
}

export default Button;
