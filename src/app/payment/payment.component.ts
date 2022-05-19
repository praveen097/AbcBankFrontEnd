import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'models/customer';
import { AbcBankService } from '../service/abc-bank.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  public customer = new Customer();
  public array: any = [];
  public accountSelected: any;
  public billerSelected: any;
  public accountDetails: any;
  public accountBalance: any;
  public biller: any;
  public dueAmount: any;
  public payingAmount: any;
  public paymentDueDate: any;
  public payingNow: any;
  public billPaymentStatus: string = 'due';
  public makePaymentOfBiller: any;
  public billerId: any;
  constructor(
    private _abcBankService: AbcBankService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.customer = new Customer(
      JSON.parse(localStorage.getItem('customerId')!)
    );
    this._abcBankService
      .getAccountsOfCustomer(this.customer)
      .subscribe((result) => {
        this.array = JSON.parse(JSON.stringify(result));
        this.accountDetails = result;
      });
    this._abcBankService
      .fetchAllBillerByAccountNumber(
        JSON.parse(localStorage.getItem('accountNumber')!)
      )
      .subscribe((result) => {
        this.biller = result;
      });
  }

  public getBalance(): void {
    this._abcBankService
      .fetchAccountBalanceByAccountNumber(this.accountSelected)
      .subscribe((result) => {
        if (result != null) {
          this.array = JSON.parse(JSON.stringify(result));
          this.accountBalance = this.array['accountBalance'];
          localStorage.removeItem('accountBalance');
          localStorage.setItem('accountBalance', this.accountBalance);
        }
      });
  }
  public getDueAmount(): void {
    for (var i = 0; i < this.biller.length; i++) {
      if (this.biller[i].billerId == this.billerSelected) {
        this.dueAmount = this.biller[i].fixedAmount;
        this.billerId = this.biller[i].billerId;
      }
    }
    console.log(this.billerId);

    console.log(this.dueAmount);
  }

  public checkPayNow(): void {
    if (this.payingAmount > this.accountBalance) {
      alert('Paying amount cannot be greater than the available balance');
      this.payingNow = '';
    }
    if (this.payingAmount > this.dueAmount) {
      alert('Paying amount cannot be greater than the due amount');
      this.payingNow = '';
    }
  }
  public makePayment(): void {
    if (this.payingAmount == this.dueAmount) {
      this.billPaymentStatus = 'paid';
    }
    this.makePaymentOfBiller = {
      paymentDate: '2023-12-20',
      payingAmount: this.payingAmount,
      billPaymentStatus: this.billPaymentStatus,
      biller: {
        billerId: this.billerId,
      },
    };

    this._abcBankService
      .makePayment(this.makePaymentOfBiller)
      .subscribe((result) => {
        console.log(result);
        this.array = JSON.parse(JSON.stringify(result));
        if (this.array['status'] == 'success') {
          this._route.navigate(['/paymentHistory']);
        } else {
          alert('Failed to make payment, please try again!');
        }
      });
  }
}
