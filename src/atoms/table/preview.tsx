import styled from 'styled-components';
import {cotton} from '../div';

export const preview = styled(cotton.withComponent('table')).attrs({
  className: 'preview',
})`
  border-collapse: collapse;

  th,
  td {
    padding: .3em .5em;
    border: 1px solid #c4c4c4;
  }
`;
