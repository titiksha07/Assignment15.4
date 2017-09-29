import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
    sessionStorage.setItem('accessToken','true');
    this._router.navigate['/cricketer'];
  }


}
