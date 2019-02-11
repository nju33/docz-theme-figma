import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Figma from '../../template/figma/index';
import {PageProps} from '../props';

export class NotFound extends Figma<
  PageProps & RouteComponentProps & Figma.DispatchToProps
> {
  Main = () => {
    return <div>page not found</div>;
  };
}
