import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Biller } from 'models/biller';
import { UserCredentials } from 'models/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class AbcBankService {

  constructor(private _http:HttpClient) { }

  public validateUser(data:UserCredentials){
    return this._http.post("http://localhost:6715/validateUser",data);
  }

  public getAccountsOfCustomer(data:any) {
    return this._http.post("http://localhost:6715/getAccountsOfCustomer",data)
  }

  public getBillersByAccountNumber(accountNumber:number) {
    return this._http.get("http://localhost:6715/fetchBillersByAccountNumber/" + accountNumber);
  }

  public getBillerById(billerId:number){
    return this._http.get("http://localhost:6715/getBillerById/" + billerId)
  }

  public updateBillerById(data:Biller){
    return this._http.put("http://localhost:6715/updateBiller",data);
  }

  public insertBiller(data:Biller){
    return this._http.post("http://localhost:6715/insertBiller",data);
  }
  public fetchAllBillerByAccountNumber(accountNumber:number){
    return this._http.get("http://localhost:6715/fetchAllBillersByAccountNumber/"+accountNumber);
  }
  public fetchAccountBalanceByAccountNumber(accountNumber:number){
    return this._http.get("http://localhost:6715/getAccountBalance/"+accountNumber)
  }
  public makePayment(data:any){
    return this._http.post("http://localhost:6715/makePayment",data)
  }
  public fetchAllPayment(data:any){
    console.log(data);
    console.log("called all payements");
    return this._http.post("http://localhost:6715/fetchAllPaymentsByAccountNumber",data)
  }
  public fetchPaymentByCategory(data:any){
    console.log(data);
    console.log("called  payments with categories");
    return this._http.post("http://localhost:6715/fetchAllPaymentsByCategory",data)
  }
  public fetchPaymentByCategoryAndStatus(data:any){
    console.log(data);
    console.log("called  payments with categories and status");
    return this._http.post("http://localhost:6715/fetchAllPaymentsByCategoryAndStatus",data)
  }
  public updateDueDateByBillerId(data:any){
    console.log(data);
    return this._http.put("http://localhost:6715/updateDueDateByBillerId",data);
  }
}
