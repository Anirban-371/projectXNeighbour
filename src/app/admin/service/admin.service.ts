import { Injectable } from '@angular/core';
import { AjaxService } from '../../services/ajax.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private ajaxService : AjaxService) { }

  saveService(service):Observable<any>{
    return this.ajaxService.saveService(service);
  }
  getService():Observable<any>{
    return this.ajaxService.getService();
  }
}
