import { Injectable } from '@angular/core';
import { AjaxService } from '../../services/ajax.service';
import {LoginemitterService} from '../../utility/loginemitter.service';
import {UserdetailsService} from '../../services/userdetails.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    loginStatus: boolean=false;
    constructor(private _ajaxService : AjaxService,
                private loginEmitterService : LoginemitterService,
                private userdetailsService : UserdetailsService ) { }
  
    
    login(customerDetails): Observable<any> {
      return this._ajaxService.loginCustomer(customerDetails); 
    }
    getCustomerDetails(customerDetails): Observable<any>{
      return this._ajaxService.getCustomerDetails(customerDetails);
    }
}
