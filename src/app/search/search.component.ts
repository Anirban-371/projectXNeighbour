import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { SearchServiceService} from './service/search-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';

import 'jquery';

declare var $ : any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: String[]= [];
  filteredService: any[]= [];  
  count: number=0;
  searchQuery: any;

  @ViewChild('search') public searchElement : ElementRef;
  constructor(private searchService: SearchServiceService,
              private router: Router,
              private mapsAPILoader: MapsAPILoader,
              private ngZone : NgZone
            ) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(
      ()=>{
        let autocomplete = new window['google'].maps.places.Autocomplete(this.searchElement.nativeElement, {types: ["address"],componentRestrictions: {country: 'in'}});
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
    this.products=["Plumbing","Carpentry","Designing","Construction","Pet Cleaning","Home Cleaning","Pest Control","Movers & Packers","Photographer"]
    this.filteredService=null;
  }

  searchData(event) { // should be called when minimum no of character are 5 in the text field.
   
    if(event.keyCode == 13) {
      this.router.navigate(['/providerList']);
      return;
    }else{
      this.filteredService=[];
      let _item = event.target.value;
      console.log(_item);
      console.log(this.count);
      if(_item.length >3){
        let self=this;
        this.searchService.searchProduct(_item).subscribe((service:any)=>{
          console.log(service['serviceList']);
          if(service['serviceList'] && service['serviceList'].length>0){
            this.filteredService = service['serviceList'];
            console.log(self.products);
          }
        });  
      }else{
        this.filteredService=null;
        $('.product_dropdown li').remove();
      }
    }
  }
  gotoDetailsPage(service){
    this.searchQuery = service;
    this.filteredService=null;
    this.router.navigate(['/providerList'],{ queryParams: {"service": service}});
  }

}
