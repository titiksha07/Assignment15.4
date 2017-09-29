import { Injectable } from '@angular/core';
import { ICricketList } from 'app/interface/cricketer-list';
import { IPlayerType } from 'app/interface/player-type';
import { CommonFunction } from "app/common";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CricketerService {

  private url: string = "http://localhost:3000/api/";

  constructor(private _http: Http) { }

  /** Add cricketer in the array List. */
  addCricketer(cricketerDetail: ICricketList) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http.post(`${this.url}addPlayers`, { cricketerDetail }, options)
      .map(this.extractData)
      
  };

  /**Get the cricket list from the array. */
  getCricketerList(): Observable<ICricketList[]> {
    return this._http.get(`${this.url}getPlayers`)
      .map(this.extractData)
      
  }

  deleteCricketer(crickId:string){
    return this._http.delete(`${this.url}deletePlayers/${crickId}`)
    .map(this.extractData)
    .catch(this.errorHandler);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  };
private errorHandler(resErr:Response){
    return Observable.throw(resErr);
  }
  
}
