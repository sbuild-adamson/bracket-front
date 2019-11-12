import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BracketService } from './bracket.service';


@Injectable()
export class BracketResolver implements Resolve<any> {

  constructor(private bracketService: BracketService) {
  }

  resolve() {
    return this.bracketService.getBracket();
  }
}