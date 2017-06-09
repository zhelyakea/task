import * as actionTypes from '../constants/actionTypes';

const state = {}
export default function count(initial=state, action) {
	const newstate = {...initial}
	switch (action.type) {
		case actionTypes.ADD_TEXT:
			if(!newstate.hasOwnProperty(action.id)){
	      newstate[action.id] = action.text
			}
      return newstate
		default:
			return newstate
	}
}
