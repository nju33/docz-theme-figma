import styled from 'styled-components';
import {defaults} from './defaults';

export const sidebar = styled(defaults)`
  list-style: none;
  padding: 0;
  font-weight: 300;
  font-size: 12px;
  line-height: 2.1;
  /* margin-left: 1em; */

  & [data-icon] {
    opacity: 0.3;
  }

  & .DoczThemeFigma-sidebar_Item {
    display: block;
    color: #444;
    text-decoration: none;

    padding: 0.3em 0.7em;
    border: 1px solid transparent;

    &:hover {
      border-color: #00c4ff;

      & [data-icon] {
        opacity: 1;
      }
    }
  }
`;
