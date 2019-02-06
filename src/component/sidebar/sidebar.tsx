import React from 'react';
import {Menu as DocsMenu, Link, MenuItem} from 'docz';
import * as atom from '../../atom';

export class Sidebar extends React.Component {
  DropMenu: React.SFC<{item: MenuItem}> = ({item}) => {
    // tslint:disable:no-non-null-assertion
    return (
      <>
        <div>{item.name}</div>
        <atom.Ul style={{marginLeft: '1em'}}>
          {item.menu!.map(childItem => {
            return (
              <li key={item.name}>
                <this.Menu item={childItem} />
              </li>
            );
          })}
        </atom.Ul>
      </>
    );
    // tslint:enable:no-non-null-assertion
  };

  Menu: React.SFC<{item: MenuItem}> = ({item}) => {
    return (
      <Link to={item.route || '/'}>
        <a>{item.name}</a>
      </Link>
    );
  };

  hasMenu = (item: MenuItem) => {
    return Array.isArray(item.menu);
  };

  render() {
    return (
      <atom.Wall data-background="#fff">
        <DocsMenu>
          {menuItems => {
            return (
              <atom.Ul>
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
              </atom.Ul>
            );
          }}
        </DocsMenu>
      </atom.Wall>
    );
  }
}
