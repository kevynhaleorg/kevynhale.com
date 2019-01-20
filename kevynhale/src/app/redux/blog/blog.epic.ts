import { Injectable } from '@angular/core';
import { createEpicMiddleware, ActionsObservable } from 'redux-observable'
import { BlogService } from '../../services';
import { Store } from 'redux';
import { IAppState } from '../redux.models';
import { BlogActions } from './blog.actions';
import { mergeMap, map, catchError, debounceTime, tap } from 'rxjs/operators'
import { of } from 'rxjs';
import { IBlogEntry } from './models';
import * as format from 'date-fns/format'
import { MatomoTracker } from 'ngx-matomo';



@Injectable()
export class BlogEpic {
  constructor ( private _actions: BlogActions, private _service: BlogService, private matomoTracker: MatomoTracker ) {}

  setListSearchDebounce = 1000

  getEpics () {
    return [
      createEpicMiddleware( this.fetchList.bind( this ) ),
      createEpicMiddleware( this.setListSearch.bind( this ) ),
      createEpicMiddleware( this.setSingleId.bind( this ) ),
      createEpicMiddleware( this.fetchSingle.bind( this ) ),
    ]
  }

  setListSearch(action$: ActionsObservable<any>, store: Store<IAppState>) {
    return action$.ofType(BlogActions.LIST_SET_SEARCH).pipe(
      debounceTime(this.setListSearchDebounce),
      tap(({payload}) => this.matomoTracker.trackEvent('blog', 'search', store.getState().blog.list.searchValue)),
      map(() => this._actions.fetchListInternal())
    )
  }

  fetchList(action$: ActionsObservable<any>, store: Store<IAppState>) {
    return action$.ofType(BlogActions.LIST_FETCH).pipe(
      mergeMap(() => this._service.fetchList({search: store.getState().blog.list.searchValue}) ),
      map((response) => {
        const results:any[] = JSON.parse(response._body)
        return this._actions.fetchListResponse(
          results.map((result) => (this.formatBlogEntry(result))))
      }),
      catchError( (error: Error ) => of(this._actions.fetchListError(error)))
    )
  }

  setSingleId(action$: ActionsObservable<any>, store: Store<IAppState>) {
    return action$.ofType(BlogActions.SINGLE_SET_ID).pipe(
      map(() => this._actions.fetchSingle())
    )
  }

  fetchSingle(action$: ActionsObservable<any>, store: Store<IAppState>) {
    return action$.ofType(BlogActions.SINGLE_FETCH).pipe(
      mergeMap(() => this._service.fetchSingle(store.getState().blog.selected.id) ),
      map((response) => {
        const result = JSON.parse(response._body)
        return this._actions.fetchSingleResponse(this.formatBlogEntry(result))
      }),
      catchError( (error: Error ) => of(this._actions.fetchListError(error)))
    )
  }

  formatBlogEntry(result: any): IBlogEntry {
    return {
      id: result.id,
      date: format(new Date(result.date),'MMMM Mo, YYYY'),
      title: result.title.rendered,
      summary: result.excerpt.rendered,
      body: result.content.rendered,
      imageUrl: result._embedded['wp:featuredmedia'][0].source_url
    }
  }


}