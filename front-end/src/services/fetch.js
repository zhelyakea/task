import { Link, browserHistory } from 'react-router'

import * as actions from 'actions'

export function fetch_post (dispatch, text, method, body) {
  dispatch(actions.getData())
  return fetch(text, {cache: "default",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, method: method, body: body })
  .then(function(data){
    dispatch(actions.getDataSuccess())
    return data.json()
  })
  .catch(function(err) {
    dispatch(actions.getDataFailure())
    console.log('fetch_post', err)
  })
}
