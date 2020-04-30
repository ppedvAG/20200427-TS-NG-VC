import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  loginCorrect: number = 0 ;
  password:string;

  logInData = new Map();

  /* //Get entries
  nameAgeMapping.get("John");     //40

  //Check entry is present or not
  nameAgeMapping.has("Lokesh");       //true
 */
  constructor() { }

  ngOnInit(): void {
    //Set entries
    this.logInData.set('Peter', 'Marian');
    this.logInData.set('Joseph', 'Maria');
  }

  Login( user: string, pwd: string ) {
    console.log('user: pwd :>> ', user, pwd);

    if (this.logInData.has(user)) {
      this.password = this.logInData.get(user);
      if (this.password === pwd ) {
        console.log('login correct :>> ');
        this.loginCorrect = 1;
      } else {
        console.log('login ioncorrect :>> ');
        this.loginCorrect = 2;
      }
    } else {
      this.loginCorrect = 3;
    }




/*     if ((this.username === user) && (this.password === pwd) ) {
        console.log('login correct :>> ');
        this.loginCorrect = 1;
    } else {
      console.log('login ioncorrect :>> ');
      this.loginCorrect = 2;
   } */
  }
}
