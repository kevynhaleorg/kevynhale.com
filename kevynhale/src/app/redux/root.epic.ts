import { Injectable } from '@angular/core';
import { BlogEpic } from './blog';

@Injectable()
export class RootEpic {

  // Inject new epics here.
  constructor(private blogEpic: BlogEpic) {}

  epicList = [
    this.blogEpic.getEpics()
  ]

  getEpicList () {
    return this.mergeEpics( this.epicList )
  }

  mergeEpics ( epicArray: Array<any> ) {
    let result = []
    epicArray.forEach( ( epic: Array<any> ) => {
      result = result.concat( epic )
    } )
    return result
  }
}