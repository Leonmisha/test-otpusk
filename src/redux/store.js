import { createStore } from 'redux'
import * as actions from './actions.js'

let initialState = {}

const store = createStore(reducer)

function reducer(state = initialState, action) {
	return state
}

export default store