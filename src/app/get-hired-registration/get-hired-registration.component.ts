import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GetHiredService } from './service/get-hired.service';
import { Utility } from '../utility/utility';
import { } from '@types/googlemaps';
import * as $ from 'jquery';
window['$'] = window['jQuery'] = $;
declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-get-hired-registration',
  templateUrl: './get-hired-registration.component.html',
  styleUrls: ['./get-hired-registration.component.css',
    '../../assets/css/login.css']
})
export class GetHiredRegistrationComponent implements OnInit {
  isLinear = false;
  userDetails;
  submitted: boolean = false;
  form: FormBuilder;
  category;
  activeForm;
  myForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities: any[] = [];
  pincodes: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: any = {};
  countries: any[] = [];
  states: any[] = [];
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  form1Complete= false;

  firstFormGroup = this._formBuilder.group({
    "skill": ['', Validators.required],
    "name": ['', Validators.required],
    "email": ['', [Validators.required, Validators.email]],
    "password": ['', Validators.required]
  });
  registrationFormGroup = this._formBuilder.group({
    "address": ['', Validators.required],
    "country": ['', Validators.required],
    "state": ['', Validators.required],
    "city": ['', Validators.required],
    "pincode": ['', Validators.required],
    "contact": ['', Validators.required] 
  });
  formLogin = this._formBuilder.group({
    'emailFormControl': ['', [Validators.required, Validators.email]],
    'passwordFormControl': ['', [Validators.required]]
  });
  
  constructor(private _formBuilder: FormBuilder,
    private utils: Utility,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private getHiredService: GetHiredService
  ) {
    // (function(d, s, id){
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {return;}
    //   js = d.createElement(s); js.id = id;
    //   js.src = '//connect.facebook.net/en_US/sdk.js';
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));


    // window.fbAsyncInit = () => {
    //     console.log("fbasyncinit")

    //     FB.init({
    //         appId            : '236517903785922',
    //         autoLogAppEvents : true,
    //         xfbml            : true,
    //         version          : 'v2.10'
    //     });
    //     FB.AppEvents.logPageView();
    //     // This is where we do most of our code dealing with the FB variable like adding an observer to check when the user signs in

    //     // ** ADD CODE TO NEXT STEP HERE **
    //     FB.Event.subscribe('auth.statusChange', (response => {
    //       if (response.status === 'connected') {
    //         console.log(response);
    //         console.log(response.authResponse);
    //         // use the response variable to get any information about the user and to see the tokens about the users session
    //         console.log('Welcome!  Fetching your information.... ');
    //         FB.api(
    //           "/" + response.authResponse.userID + '?fields=id,name,first_name,email,gender,picture,age_range,friends',
    //           (result) => {
    //               console.log("result===", result);
    //               this.userDetails = result;
    //               customer.setName(result.first_name);
    //               customer.setId(result.id);
    //               customer.setImage(result.picture.data.url);
    //               if(result.first_name !=null && 
    //                 result.id != null){
    //               let details={
    //                 "id" : result.id,
    //                 "name" : result.first_name,
    //                 "email" : result.email!=null? result.email: "",
    //                 "loginMedium" : "facebook"
    //               }
    //               var loginDetails={
    //                 "customerDetails" : details
    //               }
    //               this._loginService.login(loginDetails);
    //             }else{
    //               //throw error that you cannot login through facebook , you need help.Serious Help.
    //             }
    //               if (result && !result.error) {
    //               }
    //         });
    //       }
    //     }));
    // };

  }


  ngOnInit() {
    var navListItems = $('div.setup-panel div a'),
      allContent = $('.setup-content'),
      allNextBtn = $('.nextBtn');

    allContent.hide();

    navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
        $item = $(this);

      if (!$item.hasClass('disabled')) {
        navListItems.removeClass('btn-success').addClass('btn-default');
        $item.addClass('btn-success');
        allContent.hide();
        $target.show();
        $target.find('input:eq(0)').focus();
      }
    });
    let self = this;
    allNextBtn.click(function () {
      var curStep = $(this).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        curInputs = curStep.find("input[type='text'],input[type='url'],input[type='password'],input[type='email']"),
        isValid = true;

      $(".field-wrap").removeClass("has-error");
      for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
          isValid = false;
          $(curInputs[i]).closest(".field-wrap").addClass("has-error");
        }
      }
      if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });
    $('div.setup-panel div a.btn-success').trigger('click');
    this.activeForm = this.firstFormGroup;
    this.loadScript();
    this.getCountry();
    this.paintMap(0,0);
    /* check for city geocoding*/
    $("#btn").click(function(){
      var geocoder =  new google.maps.Geocoder();
      geocoder.geocode( { 'address': 'texas, us'}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
        } else {
          alert("Something got wrong " + status);
        }
      });
    });
  }
  formgroupValidator(form: any) {
    this.utils.validateAllFormFields(form);
    //this.activeForm.valid && //add this
    if( form == this.firstFormGroup){
      this.form1Complete=true;
    };
  }

  register() {
    //.log(this.docuploadpath.data);
    this.activeForm = this.registrationFormGroup;
    //remove this later
    this.router.navigate(['/getHired-More']);
    if (this.activeForm.invalid) {
      return;
    }

    //let imagepath= (this.docuploadpath ==null || this.docuploadpath.data==null || this.docuploadpath.data.Location ==null) ? "": this.docuploadpath.data.Location;
    let customer = {
      "category": this.category,
      "name": this.firstFormGroup.controls["name"].value,
      "email": this.firstFormGroup.controls["email"].value,
      "password": this.firstFormGroup.controls["password"].value,
      "address": this.activeForm.controls["address"].value,
      "state" : this.activeForm.controls["state"].value,
      "city" : this.activeForm.controls["city"].value,
      "pincode": this.activeForm.controls["pincode"].value,
      "contact": this.activeForm.controls["contact"].value
      //"image" : imagepath
    }
    let register = {
      "customerDetails": customer
    }

    console.log(register);
    
    if(this.activeForm.valid){
      
      this.getHiredService.registration(register).subscribe((customerStatus:any)=>{
        console.log("Customer Status::"+ customerStatus);
        if(customerStatus){
          this.router.navigate(['/getHired-More']);
        }
      });
    }else{

    }

  }
  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = ["../../assets/js/login.js"];
      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
  }
  login() {
    // let customer={
    //   "username" : this.formLogin.controls["emailFormControl"].value,
    //   "password" : this.formLogin.controls["passwordFormControl"].value
    // }
    // var loginDetails={
    //   "customerDetails" : customer
    // }
    let customer = "username=" + this.formLogin.controls["emailFormControl"].value +
      "&password=" + this.formLogin.controls["passwordFormControl"].value;
    // if(this.formLogin.valid){
    //   var loginStatus = this._loginService.login(customer);
    // }
  }

  shouldShowErrors(fieldName, formName) {
    return this.utils.shouldShowErrors(fieldName, formName);
  }
  getErrorMessage(fieldName, formName) {
    return this.utils.getErrorMessage(fieldName, formName);
  }
  selectNextForm(event) {
    this.category = this.firstFormGroup.controls["categoryChoice"].value;
  }
  routeTo(path: String) {
    this.router.navigate(['/' + path]);
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
  }
  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
    }
  }
  getCountry() {
    this.getHiredService.getCountry().subscribe(countries => {
      this.countries = countries;
    });
  }
  getState(country: any) {
    this.getHiredService.getStates(country).subscribe(states => {
      this.states = states;
    });
  }
  getCity(state: any) {
    let selectedState = {};
    let stateTemp = this.states[state];
    if (stateTemp) {
      selectedState['name'] = stateTemp.label;
      selectedState['code'] = stateTemp.value;
      this.paintMap(stateTemp.lat,stateTemp.lon);

      this.getHiredService.getCity(selectedState).subscribe(cities => {
        this.cities = cities;
      });
    }
  }
  // this.getHiredService.getCountryStates(country).subscribe(countries=>{
  //  console.log(JSON.parse(countries._body));
  //  let selectedCountry =  JSON.parse(countries._body);
  //  selectedCountry=selectedCountry.result;
  //  for(let i =0;i<selectedCountry.length; i++){
  //    if(selectedCountry[i].code == country){
  //      if(selectedCountry[i].states){
  //        this.states = selectedCountry[i].states;
  //        console.log(this.states);
  //        break;
  //      }
  //    }
  //  }
  // });
  getPincode(city){
    let selectedCity = {};
    let cityTemp = this.states[city];
    if (cityTemp) {
      selectedCity['name'] = cityTemp.label;
      selectedCity['code'] = cityTemp.value;
      this.paintMap(cityTemp.lat, cityTemp.lng);

      this.getHiredService.getPincode(selectedCity).subscribe(cities => {
        this.cities = cities;
      });
    }
  }
  paintMap(latitude =37.0902, longitude=95.7129) {
    if(!latitude){
      latitude =37.0902;
      longitude=95.7129;
    }
    var mapProp = {
      center: new google.maps.LatLng(latitude,longitude),
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    latitude =0;
    longitude=0;
  }   
  
}

