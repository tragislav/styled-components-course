import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'strecth'};
  justify-content: ${(props) => props.justify || 'strecth'};
  margin: ${({ margin }) => margin || '0'};
`;

function Flex(props) {
  return <StyledFlex {...props} />;
}

export default Flex;
