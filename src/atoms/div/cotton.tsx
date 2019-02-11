import styled, {css} from 'styled-components';
import {Mixin} from '@nju33/styled-components';

const preview = 'preview' as 'preview';
type MixinName = typeof preview;
type CottonMixin = Mixin<MixinName>;

const mixin: CottonMixin = (mixinName => (first, ...interpolations) => css`
  &.${mixinName} {
    ${css(first, ...interpolations)};
  }
`) as CottonMixin;

mixin[preview] = mixin(preview)`
  max-width: calc(100% - 30vw - 20px);
  box-sizing: border-box;
`;

export const cotton = styled.div`
  margin-left: 10px;
  margin-right: 10px;

  ${mixin[preview]};
`;
