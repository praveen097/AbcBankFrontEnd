import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'models/customer';
import { AbcBankService } from '../service/abc-bank.service';

@Component({
  selector: 'app-bill-payment-registration',
  templateUrl: './bill-payment-registration.component.html',
  styleUrls: ['./bill-payment-registration.component.scss']
})
export class BillPaymentRegistrationComponent implements OnInit {
  public customer = new Customer()
  public customerId:any;
  public accountDetails:any;
  public array:any = [];
  public account1:string="";
  public account2:string = "";

  constructor(private _abcBankService:AbcBankService, private _route:Router) { }
  ngOnInit(): void {
   this.customer = new Customer(JSON.parse(localStorage.getItem("customerId")!))

    this.customerId = localStorage.getItem("customerId")
    console.log(this.customerId);

    this._abcBankService.getAccountsOfCustomer(this.customer).subscribe((result) => {
      this.array = JSON.parse(JSON.stringify(result));
      localStorage.setItem("accountNumber",this.array[0].accountNumber)
      this.accountDetails = result;
    })
  }

  public toActivationPage() {
    if(this.account1 ==""){
      alert("Please select atleast one account number to activate")
    }else if(this.account1 == this.account2){
      alert("Both accounts cannot be same");
    }else{
      this._route.navigate(['/activation'])
    }
  }

}
