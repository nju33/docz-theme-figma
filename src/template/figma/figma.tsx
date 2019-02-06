import React from 'react';
import Flex from '@c8s/flex';
import * as component from '../../component';
import * as atom from '../../atom';
import {PageProps} from '../../page/props';

export abstract class Figma<
  P extends PageProps = PageProps,
  S = {},
  SS = {}
> extends React.Component<P, S, SS> {
  abstract Main: React.SFC<P>;

  render() {
    return (
      <Flex.column
        className="DoczThemeFigma-template_Container"
        alignItems="stretch"
      >
        <Flex.itemFluid style={{maxHeight: 55}}>
          <atom.Menu>{this.props.title}</atom.Menu>
        </Flex.itemFluid>
        <Flex.itemFluid.row>
          <Flex.itemFluid style={{maxWidth: 250}}>
            <component.Sidebar>alkdsjf</component.Sidebar>
          </Flex.itemFluid>
          <Flex.itemFluid>
            <this.Main {...this.props} />
          </Flex.itemFluid>
        </Flex.itemFluid.row>
      </Flex.column>
    );
  }
}
