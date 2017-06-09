import * as actionTypes from '../constants/actionTypes';

export default function count(initial='success', action) {
	switch (action.type) {
		case actionTypes.FETCHING_DATA:
      return 'fetching'
		case actionTypes.FETCHING_DATA_SUCCESS:
      return 'success'
		case actionTypes.FETCHING_DATA_FAILURE:
      return 'failed'
		default:
			return initial
	}
}
