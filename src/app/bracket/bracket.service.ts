import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBracket } from './bracket.model';
import { delay } from 'rxjs/operators';

const BRACKET: IBracket = {
  id: 1,
  name: 'Test Bracket 1',
  date: new Date('9/26/2036'),
  rounds: [{
    id: 1,
    name: 'test',
    date: new Date('9/26/2036'),
    matchups: [
      {id: 1, user1: {id: 1, name: 'User'}, user2: {id: 1, name: 'User'}},
      {id: 1, user1: {id: 1, name: 'User'}, user2: {id: 1, name: 'User'}}]
  },
  {
    id: 2,
    name: 'test',
    date: new Date('9/26/2036'),
    matchups: [
      {id: 1, user1: {id: 1, name: 'User'}, user2: {id: 1, name: 'User'}},
      {id: 1, user1: {id: 1, name: 'User'}, user2: {id: 1, name: 'User'}}]
  },
  {
    id: 3,
    name: 'test',
    date: new Date('9/26/2036'),
    matchups: [
      {id: 1, user1: {id: 1, name: 'User'}, user2: {id: 1, name: 'User'}},
      {id: 1, user1: {id: 1, name: 'User'}, user2: {id: 1, name: 'User'}}]
  }]
};

@Injectable()
export class BracketService {
  getBracket(): Observable<IBracket> {
    return of(BRACKET).pipe(delay(1000));
  }
}



