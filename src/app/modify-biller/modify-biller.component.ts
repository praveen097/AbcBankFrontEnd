import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Biller } from 'models/biller';
import { AbcBankService } from '../service/abc-bank.service';

@Component({
  selector: 'app-modify-biller',
  templateUrl: './modify-biller.component.html',
  styleUrls: ['./modify-biller.component.scss']
})
export class ModifyBillerComponent implements OnInit {
  public billerModel = new Biller();
  public billerModel1:any;
  public billerId:any;
  public categories:string[] = ["Telecom","Finance",];
  public array:any;
  constructor(private _abcBankService:AbcBankService, private _route:Router) { }

  ngOnInit(): void {
    this.billerId = localStorage.getItem("billerId");
    this._abcBankService.getBillerById(this.billerId).subscribe((result) => {
      this.billerModel = result;
    })
  }
  public updateBiller() {
    this.billerModel1 = {
      "billerId":this.billerModel.billerId,
      "billerName":this.billerModel.billerName,
      "billerAddress":this.billerModel.billerAddress,
      "city":this.billerModel.city,
      "pinCode":this.billerModel.pinCode,
      "billerCategory":this.billerModel.billerCategory,
      "billerStatus":this.billerModel.billerStatus,
      "account":{
        "accountNumber": localStorage.getItem("accountNumber")
      },
    }

    this._abcBankService.updateBillerById(this.billerModel1).subscribe((result) =>{
      console.log(result);
      this.array = JSON.parse(JSON.stringify(result))
      if(this.array["status"]=="success"){
        this._route.navigate(['/manageBiller'])
      }else{
        prompt("Error updating the biller details")
      }
    })
  }

}
