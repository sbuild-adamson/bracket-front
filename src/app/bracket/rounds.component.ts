import { Component, Input, OnInit } from '@angular/core';
import { IRound } from './bracket.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'rounds',
  template: `
    <div *ngFor="let round of rounds; let i = index" style="margin: auto; width: 95%; max-width: 300px; display:inline-block;">
      <div style="padding: 5px 5px 5px 5px;">
      <div class="round-details" [ngClass]="{'current': isCurrent(i)}">Round {{round.id}}: ({{round.name}})<br/><span class="date">{{round.date | date:'shortDate'}}</span></div>
        <div *ngFor="let matchup of round.matchups" >
          <matchup [matchup]="matchup" [current]="isCurrent(i)"></matchup>
        </div>
        </div>
    </div>
  `,
  styleUrls: ['./rounds.component.css']
})

export class RoundsComponent implements OnInit {
  @Input() rounds: IRound[];

  ngOnInit() {
    console.log(this.rounds);
  }

  isCurrent(index): Boolean {
    return index === this.rounds.length - 1;
  }
}
