import { Component, Input } from '@angular/core';
import { IMatchup } from './bracket.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'matchup',
  template: `
  <div style="margin: auto; width: 95%; " [ngClass]="{'current': current}">
    <ul class="matchup">
      <li class="team team-top">{{matchup.user1.name}}<span class="score">76</span></li>
      <li class="team team-bottom">{{matchup.user2.name}}<span class="score">82</span></li>
    </ul>
  </div>
  `,
  styles: [`
    li.team {
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      opacity: 0.5;
      padding: 0 5px;
      margin: 3px 3px;
      height: 25px;
      line-height: 25px;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
    }
    ul.matchup {
      list-style-type: disc;
      background-color: #aaaaaa;


      padding: 5px 5px 5px 5px;
      height:60px;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }
    .current li.team {

      opacity: 1;
      
    }
    .score {font-size: 11px;text-transform: uppercase;float: right;color: #2C7399;font-weight: bold;font-family: 'Roboto Condensed', sans-serif;position: absolute;right: 5px;}
    @-webkit-keyframes pulse {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    @keyframes pulse {
      0% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
      }
      100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    }
  `]
})

export class MatchupComponent {
  @Input() matchup: IMatchup;
  @Input() current: Boolean;

}