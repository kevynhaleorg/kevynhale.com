import { Component, OnInit, Input } from '@angular/core';
import { BlogEntry } from '../models';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent {

  constructor() { }

  @Input() entry: BlogEntry

}
