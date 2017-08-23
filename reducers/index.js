import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  form: formReducer,
})

// SELECTORS
export const isClientSide = createSelector(() => typeof window !== 'undefined')