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
  ) {}

  setValueOfDecodedMessage(value: string) {
    setTimeout(() => {
      this.form.controls['decode'].setValue(value);
    });
  }

  setValueOfEncodedMessage(value: string) {
    setTimeout(() => {
      this.form.controls['encode'].setValue(value);
    });
  }

  encodePassword() {
    const decodedMessage = this.form.controls['decode'].value;
    const password = this.form.controls['password'].value;
    const decode = new Password(
      password,
      decodedMessage,
    );
    this.passwordService.encode(decode).subscribe((encodedMessage: {[key: string]: any}) => {
      this.setValueOfEncodedMessage(encodedMessage['encoded']);
    });
  }

  decodePassword() {
    const encodedMessage = this.form.controls['encode'].value;
    const password = this.form.controls['password'].value;
    const encode = new Password(
      password,
      encodedMessage,
    );
    this.passwordService.decode(encode).subscribe((decodedMessage: {[key: string]: any}) => {
      this.setValueOfDecodedMessage(decodedMessage['decoded']);
    });
  }
}
