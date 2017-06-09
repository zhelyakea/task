import * as actionTypes from '../constants/actionTypes';

const state = {}
export default function count(initial=state, action) {
	const newstate = {...initial}
	switch (action.type) {
		case actionTypes.SET_COMMENT:
      return {...action.comments}
		default:
			return newstate
	}
}
