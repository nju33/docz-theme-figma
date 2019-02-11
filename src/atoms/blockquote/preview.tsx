import styled from 'styled-components';
import {cotton} from '../div';

export const preview = styled(cotton.withComponent('blockquote')).attrs({
  className: 'preview',
})`
  border-left: 3px solid #c4c4c4;
  width: calc(100% - 30vw - 20px);
`;
