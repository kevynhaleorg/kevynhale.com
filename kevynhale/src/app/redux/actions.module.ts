import { NgModule } from '@angular/core';

const actions = []

const epics = []

@NgModule( {
  providers: [ ...actions, ...epics ],
} )
export class ActionsModule {}