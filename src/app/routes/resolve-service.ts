import {Injectable} from '@angular/core';
import {Observable } from 'rxjs/Observable';
import {RouterStateSnapshot,ActivatedRouteSnapshot,Resolve} from '@angular/router';
import {CriketerDropDownService} from './../services/cricketer-drop-down.service';

@Injectable()
export class ResolveService implements Resolve<any>{

constructor(private _service:CriketerDropDownService)
{}
resolve(route:ActivatedRouteSnapshot){
    return this._service.getPlayerType();
}


}