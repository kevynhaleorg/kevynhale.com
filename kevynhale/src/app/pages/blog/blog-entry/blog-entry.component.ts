import { Component, OnInit, Input } from '@angular/core';
import { IBlogEntry } from '../../../redux';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent {

  constructor() { }

  @Input() entry: IBlogEntry

}
