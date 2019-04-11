import { Component, OnInit ,NgZone,ViewChild, ElementRef} from '@angular/core';
import { LoginemitterService } from '../utility/loginemitter.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
@Component({
  selector: 'app-hire-location',
  templateUrl: './hire-location.component.html',
  styleUrls: ['./hire-location.component.css']
})
export class HireLocationComponent implements OnInit {

  @ViewChild('search') public searchElement : ElementRef;
  constructor(private loginemitter : LoginemitterService,
              private router : Router,
              private mapsAPILoader: MapsAPILoader,
              private ngZone : NgZone) {
   
   }NgZone

  ngOnInit() {
    
  }
  next(){
    this.loginemitter.broadcastHirePageChangeEvent("service");
  }
  getlocation(event: any){
    console.log(event.target.value);
    this.mapsAPILoader.load().then(
      ()=>{
        var defaultBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(17.42618249854373, 78.3835205452707),
          new google.maps.LatLng(17.444148804226124, 78.40235203335021));
        let autocomplete = new window['google'].maps.places.Autocomplete(this.searchElement.nativeElement, {
          types: ['address'],
          bounds: defaultBounds,
          componentRestrictions: {country: 'in'} 
        });
        autocomplete.addListener("place_changed",()=>{
          this.ngZone.run(()=>{
            let place : google.maps.places.PlaceResult = autocomplete.getPlace();
            if(place.geometry == undefined || place.geometry == null){
              return;
            }
          });
        }); 
      }
    );
  }

}
