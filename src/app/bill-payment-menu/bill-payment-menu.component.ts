import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbcBankService } from '../service/abc-bank.service';

@Component({
  selector: 'app-bill-payment-menu',
  templateUrl: './bill-payment-menu.component.html',
  styleUrls: ['./bill-payment-menu.component.scss']
})
export class BillPaymentMenuComponent implements OnInit {

  constructor(private _abcBankService:AbcBankService, private _route:Router) { }

  ngOnInit(): void {
  }
  public logOut() {
    this._abcBankService.setLogInStatus(false);
    this._route.navigate(['/login'])
  }

}
