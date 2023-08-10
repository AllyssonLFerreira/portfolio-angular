import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FlowStore } from './store/flow.store';
import { PresentationStore } from './store/presentation.store';
import { SkillsStore } from './store/skills.store';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    FlowStore,
    PresentationStore,
    SkillsStore
  ]
})
export class CoreModule { }
