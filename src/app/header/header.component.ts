import { Component, OnInit, HostListener } from '@angular/core';
import {LoginemitterService} from '../utility/loginemitter.service';
import { Customer } from '../pojo/customer';
import { UserdetailsService} from '../services/userdetails.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  customer: Customer;
  windowType;

  @HostListener('window:resize') onResize() {
    var ww = document.body.clientWidth;
    if(ww <= 900){
      this.windowType = "mobile";
    }else{
      this.windowType = "device";
    }
  }
  constructor(private loginemitter: LoginemitterService,
              private userdetailsService : UserdetailsService) {

    this.loginemitter.loginEvent$.subscribe(loginStatus=>{
      if(loginStatus){
        this.customer =this.userdetailsService.getCustomerData();
      }
    });
    this.loginemitter.logoutEvent$.subscribe(logoutStatus=>{
      if(logoutStatus){
        this.customer =null;
      }
    });

   }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('customer'));
  }
  ngAfterViewInit() {
    setTimeout(_=>{
      var ww = document.body.clientWidth;
      if(ww <= 900){
        this.windowType = "mobile";
      }else{
        this.windowType = "device";
      }
    })
  }

}
