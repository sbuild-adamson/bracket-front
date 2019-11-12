import { Component, OnInit } from '@angular/core';
import { IBracket } from './bracket.model';
import { ActivatedRoute } from '@angular/router';

@Component( {
  // tslint:disable-next-line: component-selector
  selector: 'bracket-component',
  template: `
    <div class='bracket-body'>
      <rounds [rounds]="bracket.rounds"></rounds>
    </div>
  `,
  styles: [`
    .bracket-body {
      font-family: 'Istok Web', 
      sans-serif;
      background-color: #555555;
      background-size: cover;
      min-height: 100%;
      margin: 0;
      margin: auto;
      width: 99%;
      max-width: 1100px;
    }
  `]
})

export class BracketComponent implements OnInit {
  private bracket: IBracket;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.bracket = this.route.snapshot.data['bracket'];
    console.log(this.bracket)
  }
}
