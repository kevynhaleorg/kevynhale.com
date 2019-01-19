import { Component, OnInit } from '@angular/core';
import { IBlogEntry, BlogActions } from '../../redux';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogHeaderText = "Welcome to my blog where I dive into all things related to building web applications - design, devops and development!"

  constructor(private _actions: BlogActions) { }

  @select(['blog', 'list', 'entries']) entries$: Observable<IBlogEntry>


  setSearchValue(value: string) {
    this._actions.setListSearch(value)
  }
 
  ngOnInit() {
    this._actions.fetchList()
  }

}
