import { Injectable } from '@angular/core';

@Injectable()
export class RootEpic {

  // Inject new epics here.
  constructor() {}

  epicList = []

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