import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FlowStore } from './store/flow.store';
import { PresentationStore } from './store/presentation.store';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    FlowStore,
    PresentationStore
  ]
})
export class CoreModule { }
