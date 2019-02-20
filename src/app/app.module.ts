import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from "@uirouter/angular";

import { App } from './components/app/app';
import { List } from './components/list/list';
import { ListItem } from './components/listitem/listitem';
import { Edit } from './components/edit/edit';
import { View } from './components/view/view';
import { StorageService } from './services/storage.service';

import { uiRouterConfigFn } from './config/router.config';
import { listState, editState, viewState } from './app.states';

let STATES =  [ listState, editState, viewState ];
let COMPONENTS =  [ App, List, ListItem, Edit, View ];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({ 
      states: STATES, 
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  providers: [ 
    { provide: StorageService, useClass: StorageService },
  ],
  bootstrap: [App]
})
export class AppModule { }