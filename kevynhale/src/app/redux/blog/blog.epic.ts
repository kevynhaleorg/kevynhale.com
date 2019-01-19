import { Injectable } from '@angular/core';
import { createEpicMiddleware, ActionsObservable } from 'redux-observable'
import { BlogService } from '../../services';
import { Store } from 'redux';
import { IAppState } from '../redux.models';
import { BlogActions } from './blog.actions';
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';


@Injectable()
export class BlogEpic {
  constructor ( private _actions: BlogActions, private _service: BlogService ) {}

  getEpics () {
    return [
      createEpicMiddleware( this.fetchList.bind( this ) ),
    ]
  }

  fetchList(action$: ActionsObservable<any>, store: Store<IAppState>) {
    return action$.ofType(BlogActions.LIST_FETCH).pipe(
      mergeMap(() => this._service.fetchList({search: store.getState().blog.list.searchValue}) ),
      map((response) => {
        const results:any[] = JSON.parse(response._body)
        console.log(results)
        return this._actions.fetchListResponse(results.map((result) => ({id: result.id, date: result.date, title: result.title.rendered, summary: result.excerpt.rendered, body: result.content.rendered, imageUrl: result._embedded['wp:featuredmedia'][0].source_url })))
      }),
      catchError( (error: Error ) => of(this._actions.fetchListError(error)))
    )
  }


}