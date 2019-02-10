import React from 'react';
import Flex from '@c8s/flex';
import * as component from '../../component';
import * as menu from '../../atoms/menu';
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
        <Flex.itemFluid style={{minHeight: 40, maxHeight: 40}}>
          <menu.defaults>{this.props.title}</menu.defaults>
        </Flex.itemFluid>
        <Flex.itemFluid.row>
          <Flex.itemFluid
            style={{
              maxWidth: 200,
            }}
          >
            <component.Sidebar />
          </Flex.itemFluid>
          <Flex.itemFluid.row>
            <this.Main {...this.props} />
          </Flex.itemFluid.row>
        </Flex.itemFluid.row>
      </Flex.column>
    );
  }
}
