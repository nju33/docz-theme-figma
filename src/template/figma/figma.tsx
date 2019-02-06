import React from 'react';
import Flex from '@c8s/flex';

export abstract class Figma<P = {}, S = {}, SS = {}> extends React.Component<P, S, SS> {
  render() {
    return (
      <Flex.row>
      </Flex.row>
    )
  }
}