import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'
import { IAppState } from './redux.models';
import { rootReducer } from './root.reducer';
import { createLogger } from 'redux-logger'
import { RootEpic } from './root.epic';
import { RootEnhancers } from './root.enhancer';
import { ActionsModule } from './actions.module';


@NgModule({
  imports: [
    CommonModule, NgReduxModule, ActionsModule
  ],
  providers: [ RootEnhancers, RootEpic ]
})
export class AppReduxModule {
  constructor (
    public store: NgRedux<IAppState>,
    public devTools: DevToolsExtension,
    public rootEnhancers: RootEnhancers,
    private rootEpic: RootEpic
  ) {
    const middleware = [ ...this.rootEpic.getEpicList() ]

    // TODO: Hide this in prod.
    middleware.push( createLogger( { collapsed: true } ) )

    store.configureStore( rootReducer, {}, middleware, rootEnhancers.createEnhancers() )
  }

}
