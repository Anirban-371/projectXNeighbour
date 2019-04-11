import { Component, OnInit } from '@angular/core';
import { AdminService } from './service/admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  service: String;
  services :String[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getService().subscribe(services => {
        for(let service in services.serviceList){
          this.services.push(services.serviceList[service]['name']);
        }
    });
  }


  addService(){
    if(this.service){
      let services = {
        "name" : this.service.toLowerCase(),
        "tags" : [this.service.toLowerCase()]
      }
      let serviceObj=
      {
        "services" : services
      }
      if(serviceObj){
        this.adminService.saveService(serviceObj).subscribe(service => {
          if(service == true){
            this.services.push(serviceObj['services'].name);
          }
        });
      }
    }

  }
}
