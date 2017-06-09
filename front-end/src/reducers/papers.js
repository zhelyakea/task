import * as actionTypes from '../constants/actionTypes';
const { forEach } = Array.prototype

export default function count(initial=[], action) {
	const newstate = [...initial]
	switch (action.type) {
		case actionTypes.UPDATE_PAPERS:
      return [...action.payload]
		case actionTypes.DELETE_PAPER:
			const index = newstate.indexOf(newstate.filter(value => {
				return value.id === action.id
			})[0])
			newstate.splice(index, 1)
      return newstate
		default:
			return newstate
	}
}
