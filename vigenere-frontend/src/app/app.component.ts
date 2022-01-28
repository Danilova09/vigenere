import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordService } from '../../shared/password.service';
import { Password } from '../../shared/password.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('f') form!: NgForm;

  constructor(
    private passwordService: PasswordService,
  ) {
  }

  encodePassword() {
    const encodedMessage =  this.form.controls['encode'].value;
    const password = this.form.controls['password'].value;
    const encode = new Password(
      password,
      encodedMessage,
    );

    this.passwordService.encode(encode);
  }

  decodePassword() {
    const decodedMessage =  this.form.controls['encode'].value;
    const password = this.form.controls['password'].value;
    const decode = new Password(
      password,
      decodedMessage,
    );
    this.passwordService.decode(decode);
  }
}
