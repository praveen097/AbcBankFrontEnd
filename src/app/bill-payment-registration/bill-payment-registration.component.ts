import { Component, OnInit } from '@angular/core';
import { Customer } from 'models/customer';
import { AbcBankService } from '../service/abc-bank.service';

@Component({
  selector: 'app-bill-payment-registration',
  templateUrl: './bill-payment-registration.component.html',
  styleUrls: ['./bill-payment-registration.component.scss']
})
export class BillPaymentRegistrationComponent implements OnInit {
  public customer = new Customer()

  constructor(private _abcBankService:AbcBankService) { }
  public customerId:any;
  public accountDetails:any;

  ngOnInit(): void {
   this.customer = new Customer(JSON.parse(localStorage.getItem("customerId")!))

    this.customerId = localStorage.getItem("customerId")
    console.log(this.customerId);

    this._abcBankService.getAccountsOfCustomer(this.customer).subscribe((result) => {
      console.log(result)
      this.accountDetails = result;
    })
  }

}
