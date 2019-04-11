import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetHiredService } from '../get-hired-registration/service/get-hired.service';
import 'jquery';

declare var $: any;
@Component({
  selector: 'app-get-hired-registration-more-page1',
  templateUrl: './get-hired-registration-more-page1.component.html',
  styleUrls: ['./get-hired-registration-more-page1.component.scss']
})
export class GetHiredRegistrationMorePage1Component implements OnInit {

  showLicense = false;
  @Output() public skillRegisterComplete = new EventEmitter();
  constructor(private _formBuilder: FormBuilder,
              private getHiredService : GetHiredService) { }

  skillFormGroup = this._formBuilder.group({
    'serviceProviderType': ['', [Validators.required]],
    'license': ['', [Validators.required]],
    'skillLevel': ['', [Validators.required]]
  });

  ngOnInit() {
  }
  setSkill(skill) {
    if (['IL', 'P'].includes(skill)) {
      this.showLicense = true;
    } else {
      this.showLicense = false;
    }
  }
  submit() {
    let skillDetails = { "name": "anirban" };
    //remove this
    this.skillRegisterComplete.next(skillDetails);
    if (this.skillFormGroup.valid) {
      //this.registrationEmmiter.next(skillDetails);
    }
  }
}
