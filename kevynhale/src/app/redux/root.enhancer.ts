import { Injectable } from '@angular/core';
import { DevToolsExtension } from '@angular-redux/store';

@Injectable()
export class RootEnhancers {
  constructor ( private readonly devTools: DevToolsExtension ) {}

  public createEnhancers () {
    const enhancers = []

    if ( this.devTools.isEnabled() ) {
      enhancers.push( this.devTools.enhancer() )
    }

    return enhancers
  }
}