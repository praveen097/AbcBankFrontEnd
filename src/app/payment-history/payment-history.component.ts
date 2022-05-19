import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbcBankService} from '../service/abc-bank.service';

@Component({selector: 'app-payment-history', templateUrl: './payment-history.component.html', styleUrls: ['./payment-history.component.scss']})
export class PaymentHistoryComponent implements OnInit {
    public categories : string[] = ['Telecom', 'Finance'];
    public status : string[] = ['due', 'paid'];
    public categorySelected : string = '';
    public statusSelected : string = '';
    public accountNumber : number = 0;
    public paymentHistoryWithCategoryAndStatus : any;
    public paymentHistoryWithAccountNumber:any;
    public paymentHistoryWithCategory:any;
    public payementHistory : any;

    constructor(private _abcBankService : AbcBankService, private _route : Router) {}

    ngOnInit(): void {
        this.accountNumber = JSON.parse(localStorage.getItem('accountNumber')!);
        console.log(this.accountNumber);
    }
    public editPayment(paymentId:number,billerName:string,status:string){
      localStorage.removeItem("paymentId");
      localStorage.setItem("paymentId",paymentId.toString())
      localStorage.removeItem("billerName");
      localStorage.setItem("billerName",billerName.toString())
      localStorage.removeItem("paymentStatus");
      localStorage.setItem("paymentStatus",status.toString())
      this._route.navigate(["/paymentInstruction"])
    }
    public getPaymentHistory() {
        if (this.categorySelected == '' && this.statusSelected == '') {
          console.log("No category or status selected");
            this.paymentHistoryWithAccountNumber = {
              "biller":{
                "account":{
                    "accountNumber":this.accountNumber
                }
            }
            };
            this._abcBankService.fetchAllPayment(this.paymentHistoryWithAccountNumber).subscribe((result) => {
                console.log(result);
                this.payementHistory = result;
            });
        } else if (this.categorySelected != '' && this.statusSelected == '') {
          console.log("Category  selected");

            this.paymentHistoryWithCategory = {
              "biller":{
                "account":{
                    "accountNumber":1234787890
                },
                "billerCategory":this.categorySelected
            }
            };
            this._abcBankService.fetchPaymentByCategory(this.paymentHistoryWithCategory).subscribe((result) => {
                console.log(result);
                this.payementHistory = result;
            });
        } else {
          console.log("both  selected");

            this.paymentHistoryWithCategoryAndStatus = {
                biller: {
                    account: {
                        accountNumber: localStorage.getItem('accountNumber')
                    },
                    billerCategory: this.categorySelected
                },
                billPaymentStatus: this.statusSelected
            };
            this._abcBankService.fetchPaymentByCategoryAndStatus(this.paymentHistoryWithCategoryAndStatus).subscribe((result) => {
                console.log(result);
                this.payementHistory = result;
            });
        }
    }
}
