import { Component, Input, OnInit } from '@angular/core';
import { IRound } from './bracket.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'rounds',
  template: `
    <div *ngFor="let round of rounds" style="margin: auto; width: 95%;">
    <div class="round-details">Round {{round.id}}: ({{round.name}})<br/><span class="date">{{round.date | date:'shortDate'}}</span></div>
        <h1></h1>
    </div>
  `,
  styleUrls: ['./rounds.component.css']
})

export class RoundsComponent implements OnInit {
  @Input() rounds: IRound[];

  ngOnInit() {
    console.log(this.rounds);
  }
}
