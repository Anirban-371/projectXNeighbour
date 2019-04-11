import { Component, OnInit } from '@angular/core';
import { LoginemitterService } from '../utility/loginemitter.service';
import '../../assets/js/jquery-ui.min.js';
import * as $ from 'jquery';
declare let $: any;
@Component({
  selector: 'app-hire-time',
  templateUrl: './hire-time.component.html',
  styleUrls: ['./hire-time.component.css']
})
export class HireTimeComponent implements OnInit {

  months: String[] = [];
  days: Number[] =[];
  constructor(private loginemitter : LoginemitterService) { }

  ngOnInit() {
    this.getSlider();
    this.calculatemonth(["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"]);
  }

  calculatemonth(monthArr){
    let now = new Date();
    let month = now.getMonth();
    let count = 0;
    while(count<6){
      this.months.push(monthArr[month]);
      if(month==11){
        month = 0;
      }else{
        month ++;
      }
      count ++;
    }
  }

  getdays(monthName){
    this.days=[];
    let monthNum= ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"].indexOf(monthName);
    let now = new Date();
    let month =now.getMonth();
    let year = now.getFullYear();
    if(monthNum < month){
      year++;
    }
    let monthdays=new Date(year, monthNum+1, 0).getDate();
    let starDate=0;
    if(monthNum == month){
      starDate = now.getDate();
    }else{
      starDate = 1;
    }
    for(let i= starDate;i<=monthdays;i++){
      this.days.push(i);
    }
  }

  getSlider() {
    $("#slider-range").slider({
      range: false,
      min: 0,
      max: 1440,
      step: 15,
      values: [540],
      slide: function (e, ui) {
        let hours1 = (Math.floor(ui.values[0] / 60)).toString();
        let minutes1 = (ui.values[0] - (parseInt(hours1) * 60)).toString();
        if (hours1.length == 1) 
          hours1 = '0' + hours1;
        if (minutes1.length == 1) 
          minutes1 = '0' + minutes1;
        if (parseInt(minutes1) == 0) 
          minutes1 = '00';
        if (parseInt(hours1) >= 12) {
          if (parseInt(hours1) == 12) {
            hours1 = hours1;
            minutes1 = minutes1 + " PM";
          } else {
            hours1 = (parseInt(hours1) - 12).toString();
            minutes1 = minutes1 + " PM";
          }
        } else {
          hours1 = hours1;
          minutes1 = minutes1 + " AM";
        }
        if (parseInt(hours1) == 0) {
          hours1 = '12';
          minutes1 = minutes1;
        }
        $('.slider-time').html(hours1 + ':' + minutes1);
      }
    });
  }
  next(){
    this.loginemitter.broadcastHirePageChangeEvent("book");
  }
  

}
