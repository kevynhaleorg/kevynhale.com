import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { IBlogEntry } from './models';


@Injectable()
export class BlogActions {

  static readonly LIST_SET_SEARCH = 'BLOG_LIST:SET_SEARCH'
  static readonly LIST_FETCH = 'BLOG_LIST:FETCH'
  static readonly LIST_FETCH_RESPONSE = 'BLOG_LIST:FETCH_RESPONSE'
  static readonly LIST_FETCH_ERROR = 'BLOG_LIST:FETCH_ERROR'

  static readonly SINGLE_SET_ID = 'BLOG_SINGLE:SET_ID'
  static readonly SINGLE_FETCH = 'BLOG_SINGLE:FETCH'
  static readonly SINGLE_FETCH_RESPONSE = 'BLOG_SINGLE:FETCH_RESPONSE'
  static readonly SINGLE_FETCH_ERROR = 'BLOG_SINGLE:FETCH_ERROR'

  @dispatch()
  setListSearch( search: string) {
    return { type: BlogActions.LIST_SET_SEARCH, payload: { search } }
  }
  
  @dispatch()
  fetchList() {
    return this.fetchListInternal()
  }

  fetchListInternal() {
    return { type: BlogActions.LIST_FETCH }
  }

  fetchListResponse( entries: IBlogEntry[] ) {
    return { type: BlogActions.LIST_FETCH_RESPONSE, payload: { entries } }
  }

  fetchListError( error: Error ) {
    return { type: BlogActions.LIST_FETCH_ERROR, payload: { error } }
  }

  @dispatch()
  setSingleId( id: string ) {
    return { type: BlogActions.SINGLE_SET_ID, payload: { id } }
  }

  fetchSingle() {
    return { type: BlogActions.SINGLE_FETCH }
  }

  fetchSingleResponse( entry: IBlogEntry ) {
    return { type: BlogActions.SINGLE_FETCH_RESPONSE, payload: { entry } }
  }

  fetchSingleError( error: Error ) {
    return { type: BlogActions.SINGLE_FETCH_ERROR, payload: { error } }
  }

}