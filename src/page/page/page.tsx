import React from 'react';
import {Figma} from '../../template';
import {RouteComponentProps} from 'react-router-dom';
import {PageProps as DoczPageProps} from 'docz';
import {PageProps} from '../props';

type IntersectionProps = DoczPageProps & PageProps & RouteComponentProps;

export class Page extends Figma<IntersectionProps> {
  Main = (props: IntersectionProps) => {
    return <div>{props.doc.name}</div>;
  };
}
