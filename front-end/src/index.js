import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import AddArticlePage from './components/addarticle/AddArticlePageContainer'
import ArticlesPage from './components/articles/ArticlesContainer'
import ArticlePage from './components/article/ArticleContainer'
import Main from './components/MainContainer'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store);

require('./css/style.css')
require('./css/flex.css')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={ArticlesPage} />
          <Route path='paperspage' component={ArticlesPage} />
          <Route path='paperpage' component={ArticlePage} />
          <Route path='addpaperpage' component={AddArticlePage} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
)
