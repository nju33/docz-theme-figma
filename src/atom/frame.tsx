import styled from 'styled-components';
import vwxy from 'vwxy';

interface WallProps {
  background?: string;
  width?: string;
  height?: string;
}

const width = vwxy().width('100%');
const height = vwxy().height('100%');
const background = vwxy().background('#fff');

export const Frame = styled.div<WallProps>`
  display: block;
  width: ${width};
  height: ${height};
  a: ${props => {
    console.log(vwxy().background('#fff')(props));

    return null;
  }};
  background: ${background};
  box-sizing: border-box;
`;
