import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-hired-registration-more-page-company',
  templateUrl: './get-hired-registration-more-page-company.component.html',
  styleUrls: ['./get-hired-registration-more-page-company.component.css']
})
export class GetHiredRegistrationMorePageCompanyComponent implements OnInit {

  @Output() public companyRegisterComplete =new EventEmitter();
  constructor(private _formBuilder: FormBuilder) { }

  companyFormGroup = this._formBuilder.group({
    'companyName': ['', [Validators.required]],
    'yearFounded': ['', [Validators.required]],
    'employees': ['', [Validators.required]],
    'address': ['', [Validators.required]]
  });

  ngOnInit() {
  }
  submit(){
    let notificationDetails={"name": "anirban"};
    //remove this
    this.companyRegisterComplete.next(notificationDetails);
    if(this.companyFormGroup.valid){
      //this.registrationEmmiter.next(skillDetails);
    }
  }

}
