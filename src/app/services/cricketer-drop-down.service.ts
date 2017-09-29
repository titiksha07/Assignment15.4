import { Injectable } from '@angular/core';
import { IPlayerType } from './../interface/player-type';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class CriketerDropDownService {
private url :string="http://localhost:3000/api";
constructor(private _http:Http){}
getPlayerType(): Observable<IPlayerType[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http.get(`${this.url}getPlayerType`, options)
      .map(this.extractData)
      .catch(this.errorHandler);
      
  };

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  };
  private errorHandler(resErr:Response){
    return Observable.throw(resErr);
  }
}
 

