import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginemitterService } from '../utility/loginemitter.service';
@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {

  page;
  constructor(private loginemitter : LoginemitterService,
              private router : Router) {
    this.loginemitter.hirePageChangeEvent$.subscribe(page =>{
      this.page = page;
    });

   }

  ngOnInit() {
    this.page = "location";
  }

}
