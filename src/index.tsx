import React from 'react';
import {theme, DocPreview, ThemeConfig} from 'docz';
import {ThemeProvider} from 'styled-components';
import {get} from 'lodash-es';
// import webfont from 'webfontloader';

// import {config} from './config';
// import * as components from './components/ui';
// import * as modes from './styles/modes';
import * as page from './page';
import * as component from './component';
import * as atom from './atom';

const Theme = () => (
  <ThemeConfig>
    {config => {
      console.log(config);
      return (
        <ThemeProvider theme={{}}>
          <DocPreview
            components={{
              page: component.Page,
              notFound: page.NotFound,
              // notFound: () => <div>not found</div>,
              render: component.Render,
              blockquote: atom.Blockquote,
              h1: atom.H1,
              h2: atom.H2,
              h3: atom.H3,
              h4: atom.H4,
              h5: atom.H5,
              h6: atom.H6,
              hr: atom.Hr,
              ul: atom.Ul,
              ol: atom.Ol,
              p: atom.P,
              a: atom.A,
              inlineCode: atom.Code,
              // loading: components.Loading,
              loading: () => null,
              table: atom.Table,
              pre: atom.Pre,
              // tooltip: components.Tooltip,
              tooltip: () => null,
            }}
          />
        </ThemeProvider>
      );
    }}
  </ThemeConfig>
);

// webfont.load({
//   google: {
//     families: [
//       'Source Code Pro',
//       'Source Sans Pro:400,600',
//       'Poppins:400',
//       'Playfair Display:700',
//     ],
//   },
// });

const enhance = theme({}, ({mode, codemirrorTheme, ...config}) => ({
  ...config,
  mode,
  codemirrorTheme: codemirrorTheme || `docz-${mode}`,
  colors: {
    // ...get(modes, mode),
    ...config.colors,
  },
}));

export default enhance(Theme);
