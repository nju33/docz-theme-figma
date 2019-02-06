import styled from 'styled-components';
import vwxy from 'vwxy';

interface WallProps {
  'data-background'?: string;
}

const background = vwxy()['data-background']('#fff');

export const Wall = styled.div<WallProps>`
  display: block;
  width: 100%;
  height: 100%;
  background: ${background};
  box-sizing: border-box;
`;
