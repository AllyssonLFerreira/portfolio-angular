import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Flow } from 'src/app/core/integration/interfaces/flow.interface';
import { FlowStore } from 'src/app/core/store/flow.store';
import { SkillsStore } from 'src/app/core/store/skills.store';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {

  subs!: Subscription;
  state$: Observable<Flow | undefined>;
  showMore: number = 1;

  constructor(private _SKILLS: SkillsStore,
              private _FLOW: FlowStore) {
    this.state$ = this._FLOW.getState()
  }

  ngOnInit(): void {
    this.subs = this._SKILLS.fetchState()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  loadMore(): void {
    this.showMore += 2;
  }
}
