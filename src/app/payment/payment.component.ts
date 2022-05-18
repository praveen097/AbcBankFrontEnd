import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'models/customer';
import { AbcBankService } from '../service/abc-bank.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public customer = new Customer()
  public array:any = [];
  public accountSelected:any;
  public billerSelected:any;
  public accountDetails:any;
  public accountBalance:any;
  public biller:any;

  constructor(private _abcBankService:AbcBankService, private _route:Router) { }

  ngOnInit(): void {
    this.customer = new Customer(JSON.parse(localStorage.getItem("customerId")!))
    this._abcBankService.getAccountsOfCustomer(this.customer).subscribe((result) => {
      this.array = JSON.parse(JSON.stringify(result));
      this.accountDetails = result;
    })
    this._abcBankService
      .getBillersByAccountNumber(
        JSON.parse(localStorage.getItem('accountNumber')!)
      )
      .subscribe((result) => {
        this.biller = result;
      });
  }

  public getBalance() {
    this._abcBankService.fetchAccountBalanceByAccountNumber(this.accountSelected).subscribe((result)=>{
      if(result != null){
        this.array = JSON.parse(JSON.stringify(result));
        this.accountBalance = this.array["accountBalance"];
      }
    })
  }

}
