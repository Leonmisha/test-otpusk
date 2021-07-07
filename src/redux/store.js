import { createStore } from 'redux'
import * as actions from './actions.js'

let initialState = {
	email: "",
	token: ""
}

const store = createStore(reducer)

function reducer(state = initialState, action) {
	switch (action.type) {
		case actions.SAVE_LOGIN_INFO:
			return {
				...state,
				email: action.email,
				token: action.token
			}

		default:
			return state
	}
}

export default store