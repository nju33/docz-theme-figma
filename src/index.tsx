import React from 'react';
import {
  theme,
  DocPreview,
  ThemeConfig,
  PageProps,
  RenderComponentProps,
} from 'docz';
import {Provider} from 'react-redux';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {RouteComponentProps} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCaretRight, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import * as page from './page';
import * as component from './component';
import * as a from './atoms/a';
import * as blockquote from './atoms/blockquote';
import * as code from './atoms/code';
import * as h1 from './atoms/h1';
import * as h2 from './atoms/h2';
import * as h3 from './atoms/h3';
import * as h4 from './atoms/h4';
import * as h5 from './atoms/h5';
import * as h6 from './atoms/h6';
import * as hr from './atoms/hr';
import * as ol from './atoms/ol';
import * as p from './atoms/p';
import * as pre from './atoms/pre';
import * as table from './atoms/table';
import * as ul from './atoms/ul';
import store from './store';

library.add(faCaretRight, faCaretDown);

// tslint:disable:max-line-length
const GlobalStyle = createGlobalStyle`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
  html,
  body,
  #root,
  .DoczThemeFigma-template_Container {
    height: 100%;
  }

  body {
    margin: 0;
    background: #e5e5e5;
    font: 15px/1 helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif;;
  }

  .DoczThemeFigma-mdx_Container {
    line-height: 1.6;
  }
`;
// tslint:enable:max-line-length

const Theme = () => (
  <ThemeConfig>
    {config => {
      return (
        <Provider store={store}>
          <GlobalStyle />
          <ThemeProvider theme={{}}>
            <DocPreview
              components={{
                page: (props: RouteComponentProps & PageProps) => {
                  return <page.Page {...props} title={config.title} />;
                },
                notFound: (props: RouteComponentProps) => {
                  const NotFound: any = page.NotFound;
                  return <NotFound {...props} title={config.title} />;
                },
                // notFound: () => <div>not found</div>,
                render: (props: RenderComponentProps) => {
                  return <component.Render {...props} />;
                },
                blockquote: blockquote.preview,
                h1: h1.preview,
                h2: h2.preview,
                h3: h3.preview,
                h4: h4.preview,
                h5: h5.preview,
                h6: h6.preview,
                hr: hr.preview,
                ul: ul.preview,
                ol: ol.preview,
                p: p.preview,
                a: a.preview,
                inlineCode: code.preview,
                // loading: components.Loading,
                loading: () => null,
                table: table.preview,
                pre: pre.preview,
                // tooltip: components.Tooltip,
                tooltip: () => null,
              }}
            />
          </ThemeProvider>
        </Provider>
      );
    }}
  </ThemeConfig>
);

const enhance = theme({});

export default enhance(Theme);
