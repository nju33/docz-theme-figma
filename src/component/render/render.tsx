import React from 'react';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import {RenderComponentProps} from 'docz';
import * as div from '../../atoms/div';
import * as pre from '../../atoms/pre';

export class Render extends React.Component<RenderComponentProps> {
  render() {
    return (
      <LiveProvider code={this.props.code} scope={this.props.scope}>
        <div.editor>
          {/* <div.playground>{this.props.component}</div.playground> */}
          {/* <pre.preview contentEditable>{this.props.code}</pre.preview> */}
          <div.live className="preview">
            <LivePreview />
          </div.live>
          <div.live className="editor">
            <div.live className="error">
              <LiveError />
            </div.live>
            <LiveEditor style={{height: '100%'}} />
          </div.live>
        </div.editor>
      </LiveProvider>
    );
  }
}
