import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="header-body">
      <bracket-header title="test" tagline="test tagline" year="2019"></bracket-header>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./bracket-app.component.css']
})
export class BracketAppComponent {
}
