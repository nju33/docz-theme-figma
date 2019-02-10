import React from 'react';
// import styled from 'styled-components';
import {Menu as DocsMenu, Link, MenuItem} from 'docz';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {withState} from 'recompose';
import * as div from '../../atoms/div';
import * as ul from '../../atoms/ul';

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
          <div
            className="DoczThemeFigma-sidebar_Item"
            // tslint:disable-next-line:react-this-binding-issue
            onClick={() => props.open(!props.opened)}
          >
            <FontAwesomeIcon
              icon="caret-right"
              style={{width: 10, height: 10}}
            />
            <span style={{marginLeft: 5}}>{props.item.name}</span>
          </div>
          {props.opened && (
            <ul.sidebar>
              {props.item.menu!.map(childItem => {
                return (
                  <li key={props.item.name}>
                    <this.Menu item={childItem} child />
                  </li>
                );
              })}
            </ul.sidebar>
          )}
        </>
      );
      // tslint:enable:no-non-null-assertion
    },
  );

  Menu: React.SFC<{item: MenuItem; child?: boolean}> = ({item, child}) => {
    return (
      <Link
        to={item.route || '/'}
        className="DoczThemeFigma-sidebar_Item"
        style={{paddingLeft: child ? '4em' : '2em'}}
      >
        {item.name}
      </Link>
    );
  };

  hasMenu = (item: MenuItem) => {
    return Array.isArray(item.menu);
  };

  render() {
    return (
      <div.frame className="sidebar">
        <DocsMenu>
          {menuItems => {
            return (
              <ul.sidebar>
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
              </ul.sidebar>
            );
          }}
        </DocsMenu>
      </div.frame>
    );
  }
}
