import React from 'react';
import {RenderComponentProps} from 'docz';
import * as atom from '../../atom';

export class Render extends React.Component<RenderComponentProps> {
  render() {
    return (
      <atom.Playground>
        <div>{this.props.component}</div>
        {/* <div>{this.props.code}</div> */}
      </atom.Playground>
    );
  }
}
