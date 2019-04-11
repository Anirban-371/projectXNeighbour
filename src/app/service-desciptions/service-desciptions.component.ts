import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-desciptions',
  templateUrl: './service-desciptions.component.html',
  styleUrls: ['./service-desciptions.component.css']
})
export class ServiceDesciptionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoDetailsPage(service){
    this.router.navigate(['/providerList'],{ queryParams: {"service": service}});
  }

}
