import { NgModule } from '@angular/core';
import { BlogActions, BlogEpic } from './blog';

const actions = [
  BlogActions
]

const epics = [
  BlogEpic
]

@NgModule( {
  providers: [ ...actions, ...epics ],
} )
export class ActionsModule {}