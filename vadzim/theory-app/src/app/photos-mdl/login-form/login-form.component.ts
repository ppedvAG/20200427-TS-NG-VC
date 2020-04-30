import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
loginData: [string, string] = ['ng', '123'];
userName: string;
userPW: string;
isCorrect: boolean = false;
message: string;

  constructor() { }

  ngOnInit(): void {
  }

  checkLogForm() {
    console.log('this.userName :>> ', this.userName);
    console.log('this.userPW :>> ', this.userPW);
    if (this.userName == this.loginData[0] && this.userPW == this.loginData[1]) {
      this.isCorrect = true;
      this.message = 'Passt';
    }
    else {
      this.message = 'passt nicht';
    }
;
  }

}
