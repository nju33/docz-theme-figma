import React from 'react';
import {RenderComponentProps} from 'docz';
import * as playground from '../../atoms/playground';

export class Render extends React.Component<RenderComponentProps> {
  render() {
    return (
      <playground.defaults>
        <div>{this.props.component}</div>
        {/* <div>{this.props.code}</div> */}
      </playground.defaults>
    );
  }
}
