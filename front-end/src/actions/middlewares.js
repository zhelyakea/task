import { browserHistory } from 'react-router'
import { fetch_post } from '../services/fetch'

import * as actions from 'actions'

export function articlesFetch(offset) {
  return (dispatch) => {
    fetch_post(dispatch, `/api/article?limit=5&offset=${offset}`, 'GET')
      .then((data) => {
        if(data.length > 0 ){
          dispatch(actions.setOffset(offset))
          .then(dispatch(actions.updateOrders(data)))
        }
      })
      .catch(function(err) {
      })
      return Promise.resolve()
  }
}
export function getPaper(id) {
  return (dispatch) => {
    fetch_post(dispatch, `/api/article/${id}`, 'GET')
      .then((data) => {
        dispatch(actions.setPaper(data))
        .then(dispatch(actions.visibleComment(false)))
        .then(dispatch(actions.addText(data.id, data.text)))
      })
  }
}
export function addComment(article, text) {
  return (dispatch) => {
    const data = {user: 'anonim', text: text, article: article}
    const body = JSON.stringify(data)
    fetch_post(dispatch, '/api/comment', 'POST', body)
      .then((data) => {
        dispatch(showComment(false))
      })
  }
}
export function showComment(visible) {
  return (dispatch) => {
    switch(visible){
      case false:
        fetch_post(dispatch, '/api/comment', 'GET')
          .then((data) => {
            dispatch(actions.setComment(data))
            dispatch(actions.visibleComment(true))
        })
        break
      case true:
        dispatch(actions.visibleComment(false))
        break
    }
  }
}
export function toPaper(id) {
  return (dispatch) => {
    dispatch(actions.setSelectedPaper(id))
      .then(browserHistory.push('/paperpage'))
  }
}
export function savePaperAndToBack(offset, text, title) {
  return (dispatch) => {
    const data = {user: '', text: text, title: title}
    const body = JSON.stringify(data)
    fetch_post(dispatch, '/api/article', 'POST', body)
      .then((data) => {
        // console.log(data)
        dispatch(articlesFetch(offset))
          .then(dispatch(actions.addText(data.id, text)))
          .then(browserHistory.push('/'))
        })
  }
}
