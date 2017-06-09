import * as actionTypes from '../constants/actionTypes';

export default function count(initial=null, action) {
	switch (action.type) {
		case actionTypes.SET_SELECTED_PAPER:
      return action.id
		default:
			return initial
	}
}
