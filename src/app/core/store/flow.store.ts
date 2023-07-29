import {ComponentStore} from "@ngrx/component-store";
import {Flow} from "../integration/interfaces/flow.interface";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

export interface FlowState {
  content?: Flow;
}

const initialState: FlowState = { }

@Injectable()
export class FlowStore extends ComponentStore<FlowState> {
  constructor() {
    super(initialState);
  }

  readonly setContent = this.updater(
    (state, content: Flow | undefined) => {
      return { ...state, content}
    })

  getState(): Observable<Flow | undefined> {
    return this.select((state) => state.content)
  }
}
