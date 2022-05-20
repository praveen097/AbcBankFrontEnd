import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Biller } from 'models/biller';
import { AbcBankService } from '../service/abc-bank.service';

@Component({
  selector: 'app-add-biller',
  templateUrl: './add-biller.component.html',
  styleUrls: ['./add-biller.component.scss']
})
export class AddBillerComponent implements OnInit {
  public billerModel = new Biller();
  public categories:string[] = ["Telecom","Finance","Entertainment","Food","Health","Travel","Accessories","Education"];
  billerModel1:any;
  array:any = [];

  constructor(private _abcBankService:AbcBankService, private _route:Router) { }

  ngOnInit(): void {
  }
  public insertBiller() {
    this.billerModel1 = {
      "billerName":this.billerModel.billerName,
      "billerAddress":this.billerModel.billerAddress,
      "city":this.billerModel.city,
      "pinCode":this.billerModel.pinCode,
      "billerCategory":this.billerModel.billerCategory,
      "billerStatus":"active",
      "fixedBillAmount":Math.round(Math.random() * 10000),
      "account":{
        "accountNumber": localStorage.getItem("accountNumber")
      },
    }

    this._abcBankService.insertBiller(this.billerModel1).subscribe((result) =>{
      console.log(result);
      this.array = JSON.parse(JSON.stringify(result))
      if(this.array["status"]=="success"){
        alert("Biller added successfully")
        this._route.navigate(['/manageBiller'])
      }else{
        prompt("Error updating the biller details")
      }
    })
  }

}
