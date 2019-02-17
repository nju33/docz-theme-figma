import styled from 'styled-components';

export const floatBox = styled.div`
  &:after {
    display: block;
    clear: both;
    content: '';
  }
`;
