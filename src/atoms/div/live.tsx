import styled, {css} from 'styled-components';
import {Mixin, RequiredAtomProps} from '@nju33/styled-components';

const preview = 'preview' as 'preview';
const error = 'error' as 'error';
const editor = 'editor' as 'editor';

type MixinName = typeof preview | typeof error | typeof editor;
type LiveMixin = Mixin<MixinName>;

const mixin: LiveMixin = (mixinName => (first, ...interpolations) => css`
  &.${mixinName} {
    ${css(first, ...interpolations)};
  }
`) as LiveMixin;

mixin[preview] = mixin(preview)`
  flex: 10;
  width: 100%;
  background: #f8f8f8;
`;

mixin[error] = mixin(error)`
  background: #cb1b45;

  & .react-live-error {
    padding: .5em;
    white-space: pre-wrap;
  }
`;

mixin[editor] = mixin(editor)`
  flex: 0 0 30vw;
  max-width: 30vw;
  font-size: 12px;
  overflow: auto;

  & .prism-code {
    background-color: #1e1e1e;
  }
`;

export const live = styled.div<RequiredAtomProps<MixinName>>`
  ${mixin[preview]};
  ${mixin[error]};
  ${mixin[editor]};
`;
