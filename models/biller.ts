export class Biller {
  constructor(
    public billerId?:number,
    public billerName?:string,
    public billerAddress?:string,
    public city?:string,
    public pinCode?:number,
    public billerCategory?:string,
    public billerStatus?:string,
    public account?:Account[],
  ){}
}


export class Account {
  constructor(
    public accountNumber?:number,
  ){}
}

