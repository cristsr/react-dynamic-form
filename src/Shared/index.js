import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: ${props => props.display || 'column'};
`