import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AjaxService } from '../../services/ajax.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  constructor(private ajaxService : AjaxService) { }

  getQuote(quote): Observable<any>{
    return this.ajaxService.getQuote(quote);
  }
}
