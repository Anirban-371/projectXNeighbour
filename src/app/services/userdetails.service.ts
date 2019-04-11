import { Injectable } from '@angular/core';
import { Customer } from '../pojo/customer';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  customer : Customer;
  constructor() { }

  public getCustomerData(){
    if(this.customer == null){
      return JSON.parse(sessionStorage.getItem("userDetails"));
    }
    return this.customer;
  }
  public setCustomerData(customerData){
    this.customer=customerData;
  }
}
