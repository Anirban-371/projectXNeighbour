import { Injectable } from '@angular/core';
import { URLSearchParams } from "@angular/http";
import {Http,Headers} from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  header;

  constructor(
    private http: Http,
    private router:Router) {
      this.header = new Headers({ "content-type": "application/json", "accept": "application/json, text/plain, */*"});
  }

  psPost(url,params){
    let headers = new Headers({ "content-type": "application/json",
    "accept": "application/json"});
    return this.http.post(environment.apiUrl+url,params,{withCredentials: true}).pipe(map((res: any) => JSON.parse(res["_body"])));
  }
  psGet(url,searchParams): Observable<any>{
    return this.http.get(environment.apiUrl+url,{withCredentials: true,search:searchParams}).pipe(map((res: any) => JSON.parse(res["_body"])));
  }
  postForm(url, body) {
    let headers = new Headers({  "content-type": "application/x-www-form-urlencoded"});
    return this.http.post(environment.apiUrl+url, body ,{withCredentials: false,headers: headers }).pipe(map((res: any) => JSON.parse(res["_body"])));
  }
  
  public addCustomer(customer){
    //return this.psPost("productname?itemname="+"abc",null);
    return this.psPost("customer", customer);
    //this.psPost("customer",customer);
  }
  public loginCustomer(customerDetails: any){
    return this.postForm("login",customerDetails);
  }
  public getCustomerDetails(customerDetails: any){
    return this.psGet("getCustomerDetails",customerDetails);
  }
  // public searchService(item:String){
  //   return this.psPost("productname?itemname="+item,null);
  // }
  public saveService(serviceObj): Observable<any>{
    return this.psPost("saveservice",serviceObj);
  }
  public getService(): Observable<any>{
    return this.psGet("getservice",null);
  }
  public getsearchservice(serviceName): Observable<any>{
    return this.psPost("getsearchservice?serviceName="+serviceName,null);
  }
  public getQuote(quote): Observable<any>{
    return this.psPost("getQuote",quote);
  }
  // public registerProduct(product : any){
  //   return this.psPost("addproduct",product);
  // }
  // public searchProductList(item : String){
  //   return this.psPost("allproducts",null);
  // }
  // public getOwnerIds(){
  //   return this.psGet("getallowners",null);
  // }
  // public getProductOfOwner(ownerID: String){
  //   return this.psGet("getownerproducts",{"ownerID": ownerID});
  // }
  // public addasset(admin: any){
  //   return this.psPost("saveassets",admin);
  // }
  // public getasset(){
  //   return this.psGet("getassets",null);
  // }
  // public deleteAsset(id){
  //   return this.psPost("deleteasset?assetID="+id,null);
  // }
  // public getBanner(zoneId : String){
  //   return this.psGet("getbanner",{"zoneId": zoneId});
  // }
  // public getPromotion(zoneId : String){
  //   return this.psGet("getpromotion",{"zoneId": zoneId});
  // }
  // public getCorousel(zoneId : String){
  //   return this.psGet("getcorousel",{"zoneId": zoneId});
  // }
  // public getProductDetails(productId : String){
  //   return this.psGet("/product",{"id": productId});
  // }
  // public deleteProduct(productId : any[]){
  //   return this.psPost("/product",{"idList": productId});
  // }
  public getCountry(): Observable<any>{
    //return this.http.get('http://localhost:4200/assets/country.json');   
    return this.http.get('https://ezcmd.com/apps/api_ezhigh/get_countries/9b7a9934aa0ae7f195c1ba2c91a1bbe1/371').pipe(map((res: any) => JSON.parse(res["_body"])));
  }
  public getStates(country): Observable<any>{
    // let headers = new Headers({ "Authorization": "dGJqamdrZjktYnJuZC1jNGgyOjhucmUteHR0aWh4cTY2dXB4"});
    // return this.http.get('https://api.printful.com/countries',{withCredentials: true,headers: headers });   
   // return this.http.get('http://localhost:4200/assets/countryState.json');  
   return this.http.get('https://ezcmd.com/apps/api_ezhigh/get_hierarchy/9b7a9934aa0ae7f195c1ba2c91a1bbe1/371?country_code='+country+'&level=1').pipe(map((res: any) => JSON.parse(res["_body"])));
  }
  public getCity(country,state): Observable<any>{
   return this.http.get('https://ezcmd.com/apps/api_ezhigh/get_hierarchy/9b7a9934aa0ae7f195c1ba2c91a1bbe1/371?country_code='+country+'&level=2&parent_id='+state).pipe(map((res: any) => JSON.parse(res["_body"])));
  }
  public getPincode(state,city): Observable<any>{
    return this.http.get('https://www.zipcodeapi.com/rest/VlvxdCrFSOxXxR1SoIu5Xyc52KLlkO4Tf7lKx3B6PhbZBpiO3Gqn9OZ0qBPuu5Im/city-zips.json/'+city+'/'+state);
  }
  public getCityFromZipcode(zipCode): Observable<any>{
    return this.http.get('https://www.zipcodeapi.com/rest/js-ePIl9YVzyZNkmN5n2JaU0ajgqUZ8Ou54rxFPAES5qjXTh60RXR3GlgKKoeNSCi6m/info.json/'+zipCode+'/radians').pipe(map((res: any) => JSON.parse(res["_body"])));
  }
  
}


