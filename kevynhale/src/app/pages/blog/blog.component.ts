import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogHeaderText = "Welcome to my blog where I dive into all things related to building web applications - design, devops and development!"

  constructor() { }

  ngOnInit() {
  }

}
