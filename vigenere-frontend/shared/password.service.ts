import { Injectable } from '@angular/core';
import { environment } from '../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Password } from './password.model';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
    constructor(
      private http: HttpClient,
    ) {}

    encode(password: Password) {
      const body = {
        password: password.password,
        message: password.message,
      }
      return  this.http.post(environment.apiUrl + '/encode', body);
    }

    decode(password: Password) {
      const body = {
        password: password.password,
        message: password.message,
      }
      return this.http.post(environment.apiUrl + '/decode', body);
    }
}
