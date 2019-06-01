import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import {ApiService} from '../services';
import {User} from '../models';


@Injectable()
export class UsersResolver implements Resolve<Observable<User[]>> {
  constructor(private readonly service: ApiService) {}

  resolve(): Observable<User[]> {
    return this.service.getUsersList();
  }
}
