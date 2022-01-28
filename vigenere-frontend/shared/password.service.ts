import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Password } from './password.model';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
    constructor(
      private http: HttpClient,
    ) {
    }

    encode(password: Password) {
      const body = {
        password: 'password',
        text: 'encoded text'
      }
      this.http.post('http://localhost:8000/encode', body).subscribe(password => {
        console.log(password);
      })
    }

    decode(password: Password) {
      const body = {
        password: 'password',
        text: 'decoded text'
      }
      this.http.post('http://localhost:8000/decode', body).subscribe(password => {
        console.log(password);
      })
    }
}
