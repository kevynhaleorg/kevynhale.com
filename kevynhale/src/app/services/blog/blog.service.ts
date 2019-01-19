import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  _wpBase = "http://blog.kydeveloper.com/wp-json/wp/v2/"
  
  constructor(private http: Http) { }

  fetchList({ search }): Observable<any> {
    let url =  this._wpBase + `posts?${search}&_embed`
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.get(url, options)
  }

  fetchSingle(id: string): Observable<any> {
    return empty()
  }
}
