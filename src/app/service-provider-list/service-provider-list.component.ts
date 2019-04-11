import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.css']
})
export class ServiceProviderListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  service;
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.service = queryParams.get("service")?  queryParams.get("service") : "Professionals";
    })

  }
  submit(){
    console.log("submitted");
  }

}
