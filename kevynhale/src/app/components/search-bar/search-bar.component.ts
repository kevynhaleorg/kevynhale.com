import { Component, OnInit, Input, EventEmitter, Output, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor() { }

  @ViewChild('search') _search: ElementRef

  @Input() placeholder = "Search posts..."

  @Output() inputEmitter: EventEmitter<string> = new EventEmitter<string>()

  @HostListener('click', ['$event'])
  onClick() {
    this._search.nativeElement.focus()
  }

  input(event: any) {
    this.inputEmitter.emit(event.target.value)
  }

}
