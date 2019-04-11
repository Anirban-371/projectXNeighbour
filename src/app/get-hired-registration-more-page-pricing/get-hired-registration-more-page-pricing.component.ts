import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-get-hired-registration-more-page-pricing',
  templateUrl: './get-hired-registration-more-page-pricing.component.html',
  styleUrls: ['./get-hired-registration-more-page-pricing.component.css']
})
export class GetHiredRegistrationMorePagePricingComponent implements OnInit {

  @Output() public pricingRegisterComplete =new EventEmitter(); 
  constructor(private _formBuilder: FormBuilder) { }
 

  formPricing = this._formBuilder.group({
    'hourlyRate': ['', [Validators.required]]
  });
  ngOnInit() {
  }
  submit(){
    let pricingDetails={"name": "anirban"};
    //remove this
    this.pricingRegisterComplete.next(pricingDetails);
    if(this.formPricing.valid){
      //this.registrationEmmiter.next(skillDetails);
    }
  }

}
