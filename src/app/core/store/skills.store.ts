import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap } from "rxjs";
import { Flow } from "../integration/interfaces/flow.interface";
import { SkillsService } from "../integration/services/skills/skills.service";
import { FlowStore } from "./flow.store";

export interface SkillsState {
    content?: Flow;
  }
  
  const initialState: SkillsState = { }
  
  @Injectable()
  export class SkillsStore extends ComponentStore<SkillsState>{
  
    constructor(private _SERVICE: SkillsService,
                private _FLOW: FlowStore) {
      super(initialState);
    }
  
    readonly fetchState = this.effect((content$: Observable<void>) => {
      return content$.pipe(
        switchMap(() => this._SERVICE.fetch().pipe(
          tapResponse((state) => {
              this._FLOW.setContent(state),
              console.log(state)
            },
            (error: HttpErrorResponse) => console.error('erro:', error))
        ))
      )
    })
  }
  