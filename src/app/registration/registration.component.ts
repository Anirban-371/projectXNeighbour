import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjaxService } from '../services/ajax.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private _ajaxService: AjaxService) { }
  projectType = false;
  areaCateories = false;
  fixtureCateories = false;
  installationCateories = false;
  wallaccess = false;
  gasAccess = false;
  registrationForm = false;
  timeCheck = false;
  estimate = false;
  city;
  state;
  registrationData = {};
  zipCodeError: boolean = false;
  projectTypeError: boolean = false;
  incorrectPincode: boolean = false;
  selectedProjectArea = [];
  projectArea={ 
                "bathroom": "Bathroom",
                "living": "Living, Family, or Dining rooms",
                "bedroom": "Bedroom(s)",
                "laundry": "Laundry or utility room",
                "garage" : "Garage or Basement",
                "office" : "Office",
                "kitchen": "Kitchen",
                "outdoors": "Patio or outdoors"
              };
  projectAreaError: boolean =false;

  zipcodeForm = this._formBuilder.group({
    "zipcode": ['', Validators.required]
  });
  projectTypeForm = this._formBuilder.group({
    "projectType": ['', Validators.required]
  });
  areaCateoriesForm = this._formBuilder.group({
    "area1": ['', Validators.required],
    "area2": ['', Validators.required],
    "area3": ['', Validators.required],
    "area4": ['', Validators.required],
    "area5": ['', Validators.required],
    "area6": ['', Validators.required],
    "area7": ['', Validators.required],
    "area8": ['', Validators.required]
  });
  fixtureCateoriesForm = this._formBuilder.group({
    "area1": ['', Validators.required],
    "area2": ['', Validators.required],
    "area3": ['', Validators.required],
    "area4": ['', Validators.required],
    "area5": ['', Validators.required],
    "area6": ['', Validators.required],
    "area7": ['', Validators.required],
    "area8": ['', Validators.required]
  });
  installationCateoriesForm = this._formBuilder.group({
    "area1": ['', Validators.required],
    "area2": ['', Validators.required],
    "area3": ['', Validators.required],
    "area4": ['', Validators.required],
    "area5": ['', Validators.required],
    "area6": ['', Validators.required],
    "area7": ['', Validators.required],
    "area8": ['', Validators.required]
  });
  wallaccessForm = this._formBuilder.group({
    "accessType": ['', Validators.required]
  });
  gasAccessForm = this._formBuilder.group({
    "gasAvailability": ['', Validators.required]
  });
  timeForm = this._formBuilder.group({
    "time": ['', Validators.required]
  });
  registrationFormGroup = this._formBuilder.group({
    "firstName": ['', Validators.required],
    "lastName": ['', Validators.required],
    "email": ['', Validators.required],
    "contactNumber": ['', Validators.required]
  });


  ngOnInit() {
    //Initialize tooltips

  }
  zipCodeSave() {
    if (!this.zipcodeForm.valid) {
      this.registrationData["pincode"] =  this.zipcodeForm.controls['zipcode'].value;
      this.projectType = true;
      this.scroll();
    } else {
      this.zipCodeError = true;
      setTimeout(() => {
        this.zipCodeError = false;
      }, 2000);
    }

  }
  projectTypeSave() {
    console.log(this.projectTypeForm.controls['projectType'].value);
    if(this.projectTypeForm.controls['projectType'].value != '' && this.projectTypeForm.controls['projectType'].value ){
      this.registrationData["projectType"] = this.projectTypeForm.controls['projectType'].value;
      this.areaCateories = true;
      this.scroll();
    }else{
      this.projectTypeError= true;
      setTimeout(() => {
        this.projectTypeError = false;
      }, 2000);
    }
  
  }
  areaChecksSave() {
    if(this.selectedProjectArea.length >1){
      this.registrationData["projectArea"] = this.selectedProjectArea;
      this.fixtureCateories = true;
      this.scroll();
    }else{
      this.projectAreaError= true;
      setTimeout(() => {
        this.projectAreaError = false;
      }, 2000);
    }
  }
  fixtureChecksSave() {
    this.installationCateories = true;
    this.scroll();
  }
  installationChecksSave() {
    this.wallaccess = true;
    this.scroll();
  }
  accessTypeSave() {
    this.timeCheck = true;

    this.scroll();
  }
  timeFix() {
    this.gasAccess = true;
    this.scroll();
  }
  gasAvailabilitySave() {
    this.registrationForm = true;
    this.scroll();
  }
  getEstimates() {
    this.estimate = true;
  }
  scroll() {
    let scroll = setTimeout(
      function () {
        window.scrollBy(0, 700);
        console.log('start');
      }, 1000);
  }
  getCityFromZipcode(zipcode) {
    if (zipcode.target.value.length == 5) {
      this._ajaxService.getCityFromZipcode(zipcode.target.value).subscribe(location => {
        if (location['city'] || location['state']) {
          this.city = location['city'];
          this.state = location['state'];
        } else {
          this.incorrectPincode = true;
          setTimeout(() => {
            this.incorrectPincode = false;
          }, 2000);
        }
      });
    }
  }
  change(e, type){
    console.log(e.checked);
    console.log(type);
    if(e.currentTarget.checked){
      this.selectedProjectArea.push(type);
    }else{
      let updateItem = this.selectedProjectArea.find(this.findIndexToUpdate, type);
      let index = this.selectedProjectArea.indexOf(updateItem);
      this.selectedProjectArea.splice(index, 1);
    }
  }
  findIndexToUpdate(type) { 
    return type === this;
  }
}
