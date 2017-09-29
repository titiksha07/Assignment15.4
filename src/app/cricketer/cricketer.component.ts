import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ICricketList } from './../interface/cricketer-list';
import { CricketerService } from './../services/cricketer.service';
import { IPlayerType } from './../interface/player-type';
import { CriketerDropDownService } from './../services/cricketer-drop-down.service';
import { CommonFunction } from './../common';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";

declare const alertify: any;

@Component({
  selector: 'app-cricketer',
  templateUrl: './cricketer.component.html',
  styleUrls: ['./cricketer.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class CricketerComponent implements OnInit {

  /**Public variable */
  cricketersArray: ICricketList[] = [];
  playerType: Observable<IPlayerType[]>;
  title: string = '';
  private searchData: string;
  cricketerModel: ICricketList;
  cricketerDetail: ICricketList;

  /** Using constructor, call the cricketService.
     this shorthand syntax automatically creates and
    initializes a new private member in the class */
  constructor(private route: ActivatedRoute,
    private _cricketService: CricketerService, private _cricketerDropDown: CriketerDropDownService, private _router: Router) { }

  ngOnInit() {
    this.cricketModel();
    this.route.data.forEach((data: any) => {
      this.title = data.message;
      this.playerType = data.playerType;
    });
  }

  cricketModel() {
    /**Define default values */
    return this.cricketerModel = {
      firstName: '',
      lastName: '',
      favShot: '',
      playerType: '',
      yearlyIncome: null,
      dob: new CommonFunction().getCurrentDate()
    };
  };

  /**Add a cricket */
  addCriketer(values) {

    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      playerType: values.playerType,
      yearlyIncome: values.yearlyIncome,
      dob: values.dob
    };

    debugger;
    /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail).subscribe(data => {
      /**Using 3rd party library to show message. */
      alertify.notify('Cricketer Added Successfully', 'success', 2);
      /**Redirecting page to cricketersList */
      this._router.navigate(['/cricketersList']);
    },
      error => console.log(error));
  };

  
  

}
