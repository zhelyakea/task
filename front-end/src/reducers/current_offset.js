import * as actionTypes from '../constants/actionTypes';

export default function count(initial=0, action) {
	switch (action.type) {
		case actionTypes.SET_OFFSET:
      return action.offset
		default:
			return initial
	}
}
