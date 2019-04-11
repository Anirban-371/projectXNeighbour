import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoginemitterService {
  
  private loginEvent = new BehaviorSubject<Boolean>(false);
  loginEvent$= this.loginEvent.asObservable();
  private logoutEvent = new BehaviorSubject<Boolean>(false);
  logoutEvent$= this.logoutEvent.asObservable();

  private navFootHideEvent = new BehaviorSubject<Boolean>(false);
  navFootHideEvent$ = this.navFootHideEvent.asObservable();

  private hirePageChangeEvent = new BehaviorSubject<String>("location");
  hirePageChangeEvent$ = this.hirePageChangeEvent.asObservable();

  constructor() { }

  broadcastLoginEvent(bool: boolean){
    this.loginEvent.next(bool);  
  }
  broadcastLogoutEvent(bool: boolean){
    this.logoutEvent.next(bool);  
  }
  broadcastNavFootHideEvent(bool: boolean){
    this.navFootHideEvent.next(bool);
  }
  broadcastHirePageChangeEvent(page: String){
    this.hirePageChangeEvent.next(page);
  }

}
