import styled, {css} from 'styled-components';
import vwxy from 'vwxy';
import {Mixin, RequiredAtomProps} from '@nju33/styled-components';

const inner = 'inner' as 'inner';
const sidebar = 'sidebar' as 'sidebar';

type MixinName = typeof inner | typeof sidebar;
type FrameMixin = Mixin<MixinName>;
const mixin: FrameMixin = (mixinName => (first, ...interpolations) => css`
  &.${mixinName} {
    ${css(first, ...interpolations)}
  }
`) as FrameMixin;

mixin[inner] = mixin(inner)`
  // max-width: 700px;
  margin: 0 auto;
  background: linear-gradient(to left, #1e1e1e 30vw, transparent 30vw);

  & > div > *:first-child {
    margin-top: 0;
    padding-top: 10px;
  }
  & > div > *:last-child {
    margin-bottom: 0;
  }
`;

mixin[sidebar] = mixin(sidebar)`
  position: fixed;
  top: 40px;
  width: 200px;
  height: calc(100% - 40px);
  background: #fff;
`;

interface FrameProps {
  width?: string;
  height?: string;
  background?: string;
}

const width = vwxy().width('100%');
const height = vwxy().height('100%');
const background = vwxy().background('transparent');

export const frame = styled.div<FrameProps & RequiredAtomProps<MixinName>>`
  display: block;
  width: ${width};
  height: ${height};
  background: ${background};
  box-sizing: border-box;

  ${mixin[inner]};
  ${mixin[sidebar]};
`;
