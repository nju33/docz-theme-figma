import React from 'react';
import styled from 'styled-components';
import {Menu as DocsMenu, Link, MenuItem} from 'docz';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {withState} from 'recompose';
import * as atom from '../../atom';

const SidebarWall = styled(atom.Frame)`
  width: 200px;
  position: fixed;
  top: 40px;
  height: calc(100% - 40px);
`;

const SidebarUl = styled(atom.Ul)`
  list-style: none;
  padding: 0;
  font-weight: 300;
  font-size: 12px;
  line-height: 2.1;

  & [data-icon] {
    opacity: 0.3;
  }

  & .DoczThemeFigma-sidebar_Item {
    display: block;
    color: #444;
    text-decoration: none;

    padding: 0.3em 0.7em;
    border: 1px solid transparent;

    &:hover {
      border-color: #00c4ff;

      & [data-icon] {
        opacity: 1;
      }
    }
  }
`;

const dropmenuEnhancer = withState('opened', 'open', false);

export class Sidebar extends React.Component {
  DropMenu = dropmenuEnhancer(
    (props: {
      item: MenuItem;
      opened: boolean;
      open(state: boolean): boolean;
    }) => {
      // tslint:disable:no-non-null-assertion
      return (
        <>
          <div className="DoczThemeFigma-sidebar_Item">
            <FontAwesomeIcon
              icon="caret-right"
              style={{width: 10, height: 10}}
            />
            <span style={{marginLeft: 5}}>{props.item.name}</span>
          </div>
          <atom.Ul style={{marginLeft: '1em'}}>
            {props.item.menu!.map(childItem => {
              return (
                <li key={props.item.name}>
                  <this.Menu item={childItem} />
                </li>
              );
            })}
          </atom.Ul>
        </>
      );
      // tslint:enable:no-non-null-assertion
    },
  );

  Menu: React.SFC<{item: MenuItem}> = ({item}) => {
    return (
      <Link to={item.route || '/'} className="DoczThemeFigma-sidebar_Item">
        {item.name}
      </Link>
    );
  };

  hasMenu = (item: MenuItem) => {
    return Array.isArray(item.menu);
  };

  render() {
    return (
      <atom.Frame>
        <DocsMenu>
          {menuItems => {
            return (
              <SidebarUl>
                {menuItems.map(item => {
                  return (
                    <li key={item.name}>
                      {this.hasMenu(item) ? (
                        <this.DropMenu item={item} />
                      ) : (
                        <this.Menu item={item} />
                      )}
                    </li>
                  );
                })}
              </SidebarUl>
            );
          }}
        </DocsMenu>
      </atom.Frame>
    );
  }
}
