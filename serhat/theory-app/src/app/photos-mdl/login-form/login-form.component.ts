import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: string = 'serhat';
  pw: string = 'xyz';
  isValidUser: boolean = false;
  isValidPw: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkLogin(inputUser: string, inputPw: string) {
    console.log('inputUser :>> ', inputUser);
    console.log('inputPw :>> ', inputPw);

    this.isValidUser = this.user === inputUser ? true : false;
    this.isValidPw = this.pw === inputPw ? true : false;

    console.log('this.isValidUser :>> ', this.isValidUser);
    console.log('this.isValidPw :>> ', this.isValidPw);
  }
}
