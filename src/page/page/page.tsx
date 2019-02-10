import React from 'react';
import {PageProps as DoczPageProps} from 'docz';
import {Figma} from '../../template';
import {RouteComponentProps} from 'react-router-dom';
import {PageProps} from '../props';
import * as div from '../../atoms/div';

type IntersectionProps = DoczPageProps & PageProps & RouteComponentProps;

export class Page extends Figma<IntersectionProps> {
  Main: React.SFC<IntersectionProps> = props => {
    return (
      <div.frame>
        <div.frame className="inner">{props.children}</div.frame>
      </div.frame>
    );
  };
}
