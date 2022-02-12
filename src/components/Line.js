import styled from 'styled-components';

const StyledLine = styled.div`
  font-size: 24px;
  color: ${(props) => props.color || props.theme.colors.primary};
`;

const line = (props) => <StyledLine {...props} />;

export default line;
