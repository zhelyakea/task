
import * as actionTypes from '../constants/actionTypes';

export function getData() {
  return {
    type: actionTypes.FETCHING_DATA
  }
}
export function getDataSuccess() {
  return {
    type: actionTypes.FETCHING_DATA_SUCCESS,
  }
}
export function getDataFailure() {
  return {
    type: actionTypes.FETCHING_DATA_FAILURE
  }
}
export function setPaper(paper) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_PAPER,
      paper: paper,
    })
    return Promise.resolve()
  }
}
export function setSelectedPaper(id) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_SELECTED_PAPER,
      id: id
    })
    return Promise.resolve()
  }
}
export function updateOrders(papers) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_PAPERS,
      payload: papers
    })
  }
}
export function deletePaper(id) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.DELETE_PAPER,
      id: id
    })
  }
}
export function setOffset(offset) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_OFFSET,
      offset: offset
    })
    return Promise.resolve()
  }
}
// export function savePaper(id, date, title) {
//   return (dispatch) => {
//     dispatch({
//       type: actionTypes.ADD_PAPER,
//       id: id,
//       date: date,
//       title: title
//     })
//     return Promise.resolve()
//   }
// }
export function addText(id, text) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_TEXT,
      id: id,
      text: text,
    })
        return Promise.resolve()
  }
}
export function setComment(comments) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_COMMENT,
      comments: comments,
    })
  }
}
export function visibleComment(visible) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_COMMENT,
      visible: visible,
    })
  }
}
// export function returnToAdd(id, date) {
//   return (dispatch) => {
//     dispatch({
//       type: actionTypes.RETURN_PAPER_FOR_ADD,
//       id: id,
//       date: date,
//     })
//   }
// }
