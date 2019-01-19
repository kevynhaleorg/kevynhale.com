import { Component, OnInit } from '@angular/core';
import { IBlogEntry, BlogActions } from '../../redux';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogHeaderText = "Welcome to my blog where I dive into all things related to building web applications - design, devops and development!"

  constructor(private _actions: BlogActions) { }

  entries: IBlogEntry[] = [{
    id: '1',
    title: "The First Blog Post",
    date: "January 17th, 2019",
    summary: this.blogHeaderText,
    imageSummaryUrl: "assets/images/blog1.png"
  },
  {
    id: '1',
    title: "The First Blog Post",
    date: "January 17th, 2019",
    summary: this.blogHeaderText,
    imageSummaryUrl: "assets/images/blog1.png"
  }]

  setSearchValue(value: string) {
    this._actions.setListSearch(value)
  }
 
  ngOnInit() {
  }

}
