import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

@Injectable()
export class ApiService {
  constructor(protected http: HttpClient) { }

  saveUser(data: User) {
    return this.http.post<User>('http://localhost:3000/users', data);
  }

  getUsersList() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
}
