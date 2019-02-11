import React from 'react';
import {PageProps as DoczPageProps} from 'docz';
import {Figma} from '../../template';
import {RouteComponentProps} from 'react-router-dom';
import {PageProps} from '../props';
import * as div from '../../atoms/div';
import {State} from '../../store';
import {connect} from 'react-redux';

// tslint:disable-next-line:max-line-length
type IntersectionProps = DoczPageProps &
  PageProps &
  RouteComponentProps &
  State &
  Figma.DispatchToProps;

export const Page = connect(
  Figma.stateToProps,
  Figma.dispatchToProps,
)(
  class extends Figma<IntersectionProps> {
    static displayName = 'Page';

    constructor(props: IntersectionProps) {
      super(props);

      // tslint:disable-next-line:no-non-null-assertion
      this.props.initPage({docName: this.props.doc.name});
    }

    Main: React.SFC<IntersectionProps> = props => {
      return (
        <div.frame>
          <div.frame className="inner">{props.children}</div.frame>
        </div.frame>
      );
    };
  },
);
