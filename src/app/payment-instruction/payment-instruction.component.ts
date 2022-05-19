import { Component, OnInit } from '@angular/core';
import { AbcBankService } from '../service/abc-bank.service';

@Component({
  selector: 'app-payment-instruction',
  templateUrl: './payment-instruction.component.html',
  styleUrls: ['./payment-instruction.component.scss'],
})
export class PaymentInstructionComponent implements OnInit {
  public paymentId: number = 0;
  public billerName: any;
  public accountNumber: any;
  public accountBalance: any;
  public paymentStatus: any;
  public array: any;
  public billAmount: any;
  public paymentDueDate: any;
  public saveRecord: boolean = false;
  public deleteRecord: boolean = false;
  public updatedData: any;
  public billerId:any;
  public deleteData:any;
  constructor(private _abcBankService: AbcBankService) {}

  ngOnInit(): void {
    this.paymentId = JSON.parse(localStorage.getItem('paymentId')!);
    this.billerName = localStorage.getItem('billerName');
    this.accountNumber = localStorage.getItem('accountNumber');
    this.paymentStatus = localStorage.getItem('paymentStatus');
    this.billerId = localStorage.getItem("billerId");
    this._abcBankService
      .fetchAccountBalanceByAccountNumber(this.accountNumber)
      .subscribe((result) => {
        this.array = JSON.parse(JSON.stringify(result));
        this.accountBalance = this.array['accountBalance'];
      });
    if (this.paymentStatus == 'paid') {
      this.deleteRecord = false;
      this.saveRecord = true;
    } else {
      this.deleteRecord = true;
      this.saveRecord = false;
    }
  }
  public updateDueDate() {
    this.updatedData = {
      "dueDate": this.paymentDueDate,
      "paymentId": this.paymentId,
      "biller": {
        "billerId": this.billerId,
      },
    };

    this._abcBankService.updateDueDateByBillerId(this.updatedData).subscribe((result)=>{
      console.log(result);
      alert("successfull")
    })
  }
  public deletePayment() {
    this.deleteData = {
      "paymentId":this.paymentId
    }

    this._abcBankService.deletePaymentByPaymentId(this.paymentId).subscribe((result)=>{
      console.log(result);
    })
  }
}
