import React from 'react';

import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

/* Raven.config(sentry_url).install();*/
Raven.config('https://e64a07408560492bb1641b9f5ebc9fd5@sentry.io/289203', {
  tags: {
    git_comment: 'asdfas9d08f',
    userLevel: 'editor',
  },
}).install();

/* logException(new Error('download failed!'), {
 *   email: 'zhouting@umich.edu',
 * });
 *
 * Raven.captureMessage('Something bad happened!');*/
/* Raven.showReportDialog();*/
/* Raven.showReportDialog();*/

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
