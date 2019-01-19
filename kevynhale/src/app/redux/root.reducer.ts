import { IAppState } from './redux.models';
import { combineReducers } from 'redux'
import { blogReducer } from './blog';


export const rootReducer = combineReducers<IAppState>( {
  blog: blogReducer
})
