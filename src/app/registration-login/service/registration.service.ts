import { Injectable } from '@angular/core';
import { AjaxService } from '../../services/ajax.service';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
//import {UserdetailsService} from '../../services/userdetails.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  customerStatus
  constructor(private _ajaxService : AjaxService) { }

  registration(customer): Observable<any> {
    return this._ajaxService.addCustomer(customer);
    // return this._ajaxService.addCustomer(customerDetails).pipe(map((customerStatus) => {
    //   console.log(customerStatus);
    //   console.log("Customer Status::"+ customerStatus);
    // }));
    // Promise.resolve(this._ajaxService.addCustomer(customerDetails))
    // .then(customerStatus => {
    //   console.log("Customer Status::"+ customerStatus);
    // },
    //   SystemError => {
    // });
  }
}
