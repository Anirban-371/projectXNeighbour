import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-hired-registration-more',
  templateUrl: './get-hired-registration-more.component.html',
  styleUrls: ['./get-hired-registration-more.component.css']
})
export class GetHiredRegistrationMoreComponent implements OnInit {
  showSkill = false;
  showNotification = false;
  showCompany = false;
  showHireReason = false;
  showPricing =false;

  constructor(private router : Router) { }

  ngOnInit() {
    this.showSkill =true;
  }


  processSkillRegister(skillRegister){
    console.log(skillRegister);
    this.showSkill = false;
    this.showNotification = true;
  }
  processNotificationRegister(notificationRegister){
    console.log(notificationRegister);
    this.showNotification = false;
    this.showCompany = true;
  }
  processCompanyRegister(companyRegister){
    console.log(companyRegister);
    this.showCompany = false;
    this.showHireReason = true;
  }
  processHireReasonRegister(hireReasonRegister){
    console.log(hireReasonRegister);
    this.showHireReason = false;
    this.showPricing = true;
  }
  processPricingRegister(pricingRegister){
    console.log(pricingRegister);
    this.showPricing = false;
    setTimeout(() => {
      this.router.navigate(['/estimation']);
    }, 6000);
  }
}
