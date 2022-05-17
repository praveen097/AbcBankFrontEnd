import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }
  public toInfoLogin():void {
    this._route.navigate(["/login"]);
  }

}
