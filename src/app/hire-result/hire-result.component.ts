import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-result',
  templateUrl: './hire-result.component.html',
  styleUrls: ['./hire-result.component.css']
})
export class HireResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit(){
    console.log("submit");
  }

}
