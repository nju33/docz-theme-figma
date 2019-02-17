import styled from 'styled-components';

export default styled.button`
  font-weight: bold;
  padding: 0.5em;
  width: 180px;
  background: #009a58;
  border-color: #009a58;
  color: #fff;
  cursor: pointer;

  &.transparency {
    background: transparent;
    color: #009a58;
  }

  &.block {
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    color: #222;
    background: #fff;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.4);
    border-color: transparent;
  }
`;
