import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  fetchList({ search: string }): Observable<any> {
    return empty()
  }

  fetchSingle(id: string): Observable<any> {
    return empty()
  }
}
