import * as React from 'react';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable-ssr-addon';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { Provider } from 'react-redux';

import getHtmlTemplate from '../templates/html';
import App from '../../client/App';
import configureStore from '../../client/store/configureStore';
// import Html from '../components/HTML';

import manifest from '../../../build/client/react-loadable-ssr-addon.json';

const serverRenderer = (req, res) => {
  console.log('inside server rendereer');
  const modules = new Set();
  const store = configureStore();
  const sheet = new ServerStyleSheet();

  const markup = renderToString(
    sheet.collectStyles(
      <Loadable.Capture report={moduleName => modules.add(moduleName)}>
        <StaticRouter location={req.url} context={{}}>
          <Provider store={store}>
            <App />
          </Provider>
        </StaticRouter>
      </Loadable.Capture>
    )
  );

  const styledComponentsStyles = sheet.getStyleTags();
  const finalState = store.getState();

  const bundles = getBundles(manifest, [
    ...manifest.entrypoints,
    ...Array.from(modules)
  ]);

  const scripts = bundles.js || [];

  const html = getHtmlTemplate({
    styledComponentsStyles,
    markup,
    finalState,
    scripts
  });

  return res.send(html);
};

export default serverRenderer;
