import React from 'react';
import {Dispatch} from 'redux';
import Flex from '@c8s/flex';
import * as component from '../../component';
import * as menu from '../../atoms/menu';
import * as span from '../../atoms/span';
import {PageProps} from '../../page/props';
import {flux, State} from '../../store';

// tslint:disable-next-line:no-namespace
export namespace Figma {
  export interface DispatchToProps {
    initPage(payload: {docName: string}): void;
  }
}

export abstract class Figma<
  P extends PageProps & State & Figma.DispatchToProps = PageProps &
    State &
    Figma.DispatchToProps,
  S = {},
  SS = {}
> extends React.Component<P, S, SS> {
  abstract Main: React.SFC<P>;

  static stateToProps = (state: State) => state;
  static dispatchToProps: (
    dispatch: Dispatch,
  ) => Figma.DispatchToProps = dispatch => {
    return {
      initPage({docName}) {
        dispatch(flux.act(({initPage}) => [initPage({docName})]));
      },
    };
  };

  render() {
    console.log(this.props);
    return (
      <Flex.column
        className="DoczThemeFigma-template_Container"
        alignItems="stretch"
      >
        <Flex.itemFluid style={{minHeight: 40, maxHeight: 40}}>
          <menu.defaults>
            {this.props.title}
            <span.slash />
            {this.props.docName}
          </menu.defaults>
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
