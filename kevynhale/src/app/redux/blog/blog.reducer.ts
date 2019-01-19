import { IBlogState } from './models';
import { BlogActions } from './blog.actions';


export const BLOG_INITIAL_STATE: IBlogState = {
  list: {
    entries: [],
    loading: false,
    hasError: false,
    error: null,
    searchValue: ''
  },
  selected: {
    id: null,
    entry: null,
    loading: false,
    hasError: false,
    error: null
  }
}

export function blogReducer (state: IBlogState = BLOG_INITIAL_STATE, action: any ) {
  switch (action.type) {

    case BlogActions.LIST_SET_SEARCH:
      return {
        ...state,
        list: {
          ...state.list,
          searchValue: action.payload.search
        }
      }
    case BlogActions.LIST_FETCH:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          entries: [],
          hasError: false,
          error: null
        }
      }
    case BlogActions.LIST_FETCH_RESPONSE:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          entries: action.payload.entries,
        }
      }
    case BlogActions.LIST_FETCH_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          hasError: true,
          error: action.payload.error
        }
      }

    case BlogActions.SINGLE_SET_ID:
      return {
        ...state,
        selected: {
          ...state.selected,
          id: action.payload.id
        }
      }
    case BlogActions.SINGLE_FETCH:
      return {
        ...state,
        selected: {
          ...state.selected,
          loading: true,
          entry: [],
          hasError: false,
          error: null
        }
      }
    case BlogActions.SINGLE_FETCH_RESPONSE:
      return {
        ...state,
        selected: {
          ...state.selected,
          loading: false,
          entry: action.payload.entry,
        }
      }
    case BlogActions.SINGLE_FETCH_ERROR:
      return {
        ...state,
        selected: {
          ...state.selected,
          loading: false,
          hasError: true,
          error: action.payload.error
        }
      }

    default:
      return state
  }
}
