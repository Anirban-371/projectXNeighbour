import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-hired-registration-more-page-hireyoureason',
  templateUrl: './get-hired-registration-more-page-hireyoureason.component.html',
  styleUrls: ['./get-hired-registration-more-page-hireyoureason.component.css']
})
export class GetHiredRegistrationMorePageHireyoureasonComponent implements OnInit {

  @Output() public hireReasonRegisterComplete =new EventEmitter();
  constructor(private _formBuilder: FormBuilder) { }

  hiringFormGroup = this._formBuilder.group({
    'hireReason': ['', [Validators.required]],
    'introduction': ['', [Validators.required]],
    'customer1': ['', [Validators.required]],
    'customer2': ['', [Validators.required]],
    'customer3': ['', [Validators.required]],
    'customer4': ['', [Validators.required]],
  });

  ngOnInit() {
  }

  submit(){
    let hiringDetails={"name": "anirban"};
    //remove this
    this.hireReasonRegisterComplete.next(hiringDetails);
    if(this.hiringFormGroup.valid){
      //this.registrationEmmiter.next(skillDetails);
    }
  }

}
