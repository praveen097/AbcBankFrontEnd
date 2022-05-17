import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
