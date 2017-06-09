import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import papers from './papers'
import paper from './paper'
import selected_paper from './selected_paper'
import papers_texts from './papers_texts'
import comments from './comments'
import comment_visible from './comment_visible'
import fetch from './fetch'
import current_offset from './current_offset'

export default combineReducers({
  papers,
  paper,
  selected_paper,
  papers_texts,
  comments,
  comment_visible,
  fetch,
  current_offset,
  routing: routerReducer
})
