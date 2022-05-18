import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Biller } from 'models/biller';
import { AbcBankService } from '../service/abc-bank.service';

@Component({
  selector: 'app-manage-billers',
  templateUrl: './manage-billers.component.html',
  styleUrls: ['./manage-billers.component.scss'],
})
export class ManageBillersComponent implements OnInit {
  public biller:any;
  constructor(private _abcBankService: AbcBankService, private _route:Router) {}

  ngOnInit(): void {
    this._abcBankService
      .getBillersByAccountNumber(
        JSON.parse(localStorage.getItem('accountNumber')!)
      )
      .subscribe((result) => {
        this.biller = result;
      });

  }
  public editBiller(id:number){
    localStorage.removeItem("billerId");
    localStorage.setItem("billerId",id.toString())
    this._route.navigate(['/modifyBiller'])
  }
}
