import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const USERS: IUser[] = [];

@Injectable()
export class UserService {
  getUsers(): Observable<IUser[]> {
    return of(USERS).pipe(delay(1000));
  }
}