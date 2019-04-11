import { Injectable } from '@angular/core';
import { AjaxService } from '../../services/ajax.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHiredService {
  country;
  state={};
  city={};
  constructor(private _ajaxService : AjaxService) { }

   
  getCountry():Observable<any>{
    return this._ajaxService.getCountry();
  }

  getStates(country): Observable<any>{
    country? this.country = country : this.country ='';
    return this._ajaxService.getStates(country);
  }
  getCity(state): Observable<any>{
    if(this.country){
      state? this.state =state : this.state= null;
      return this._ajaxService.getCity(this.country,state.code);
    }else{
      return null;
    }
  }
  getPincode(city): Observable<any>{
    if(this.state){
      city? this.city =city : this.city= null;
      return this._ajaxService.getPincode(this.state,city.code);
    }else{
      return null;
    }
  }
  //this has to be chnaged to hired registration 
  registration(customerDetails):Observable<any> {
    return this._ajaxService.addCustomer(customerDetails);
  }
  updateProfileImage(data){
    let formData:FormData = new FormData();
		formData.append('file', data);
  
    return this._ajaxService.psPost('/ajax/profile/uploadProfilePicture?fileType=profilePic',formData);
  }
  getProfileImage(){
    return this._ajaxService.psPost('/ajax/profile/getProfilePicture',"");
  }
}
