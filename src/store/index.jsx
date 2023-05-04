import character from './slices/Character'
import episode from './slices/Episode'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
	character,
	episode
})

const store = configureStore({
  reducer,
})
export default store;