import { createStore  } from 'redux'
import * as actions from './actions.js'

let initialState = {
	email: "",
	token: ""
}


function appReducer( state = initialState, action) {
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

const rootReducer = (state, action) => {
	if (actions.USER_LOGOUT) {
		localStorage.removeItem('token')
		state = undefined
	}
	return appReducer(state, action)
  }
  
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store