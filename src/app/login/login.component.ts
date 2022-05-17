import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentials } from 'models/user-credentials';
import { AbcBankService } from '../service/abc-bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userCredentialModel = new UserCredentials();
  oneTimePassword:number = 0;
  captcha:string = "";
  array:any = [];
  public customerId:any;


  constructor(private _abcBankService:AbcBankService, private _route:Router) { }

  ngOnInit(): void {
    this.generateCaptcha();
  }
  public validateUser():void {

    if(this.oneTimePassword == parseInt(this.captcha)){
      this._abcBankService.validateUser(this.userCredentialModel).subscribe((result)=>{
        console.log(result);
        this.array = JSON.parse(JSON.stringify(result));
        if(this.array['status']=="success"){
          localStorage.removeItem("customerId");
          var id = this.array['customerid'];
          localStorage.setItem("customerId",id);
          this.customerId = localStorage.getItem("customerId")
          this._route.navigate(['billPaymentRegistration'])
        }else{
          console.log(result);
        }
      })
    }else{
      confirm("not valid otp")
      this.captcha = "";
    }

  }
  public toHomePage():void {
    this._route.navigate(['']);
  }
  public generateCaptcha():void {
    this.captcha = "";
    this.oneTimePassword = Math.round(Math.random() * 1000000);
    if((Math.log10(this.oneTimePassword) + 1) < 6){
      this.generateCaptcha();
    }
  }

}
