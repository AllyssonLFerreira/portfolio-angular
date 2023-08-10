import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

  @Input() title!: string;
  @Input() simpleRows!:{ description: string; value: any }[];
  @Input() rowWithProgress!: { description: string; value: number}[];
}
