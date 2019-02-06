import React from 'react';
import styled from 'styled-components';
import {PageProps as DoczPageProps} from 'docz';
import {Figma} from '../../template';
import {RouteComponentProps} from 'react-router-dom';
import {PageProps} from '../props';
import * as atom from '../../atom';

type IntersectionProps = DoczPageProps & PageProps & RouteComponentProps;

const InnerWall = styled(atom.Wall)`
  max-width: 700px;
  margin: 0 auto;
`;

export class Page extends Figma<IntersectionProps> {
  Main: React.SFC<IntersectionProps> = props => {
    return (
      <atom.Wall>
        <InnerWall className="DoczThemeFigma-mdx_Container">
          {props.children}
        </InnerWall>
      </atom.Wall>
    );
  };
}
