import * as actionTypes from '../constants/actionTypes';

export default function count(initial=false, action) {
	switch (action.type) {
		case actionTypes.SHOW_COMMENT:
      return action.visible
		default:
			return initial
	}
}
