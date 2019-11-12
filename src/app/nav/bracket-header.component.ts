import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bracket-header',
  styles: [`
  .hero {position:relative; text-align: center; overflow: hidden; color: #fcfcfc; }
  .hero h1 {
    font-family: 'Holtwood One SC', serif;
    font-weight: normal;
    font-size: 5.4em;
    margin:0 0 20px;
    text-shadow:0 0 12px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing:-1px;
  }
  .hero p {
    font-family: 'Abel', sans-serif;
    text-transform: uppercase;
    color: #5CCA87;
    letter-spacing: 6px;
    text-shadow:0 0 12px rgba(0, 0, 0, 0.5);
    font-size: 1.2em;
  }
  .hero-wrap {padding: 3.5em 10px;}
  .hero p.intro {font-family: 'Holtwood One SC', serif;text-transform: uppercase;letter-spacing: 1px;font-size: 3em;margin-bottom:-40px;}
  .hero p.year {color: #fff; letter-spacing: 20px; font-size: 34px; margin: -25px 0 25px;}
  .hero p.year i {font-size: 14px;vertical-align: middle;}
  `],
  template: `
  <div class="hero">
    <div class="hero-wrap">
      <p class="intro" id="intro">{{title}}</p>
          <h1 id="headline">Heading</h1>
          <p class="year"><i class="fa fa-star"></i> {{year}} <i class="fa fa-star"></i></p>
      <p>{{tagline}}</p>
    </div>
  </div>
  `
})

export class BracketHeaderComponent {
  @Input() title: string;
  @Input() tagline: string;
  @Input() year: string;

}
