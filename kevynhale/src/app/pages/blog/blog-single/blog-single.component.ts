import { Component, OnInit } from '@angular/core';
import { IBlogEntry, BlogActions } from '../../../redux';
import { ActivatedRoute } from '@angular/router';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _actions: BlogActions) { }

  @select(['blog', 'selected', 'entry']) entry$: Observable<IBlogEntry>
  @select(['blog', 'selected', 'loading']) loading$: Observable<boolean>


  ngOnInit() {
    this._actions.setSingleId(this._route.snapshot.params.id)
  }

}
