import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  windowType;
  @HostListener('window:resize') onResize() {
    var ww = document.body.clientWidth;
    if(ww <= 767){
      this.windowType = "mobile";
    }else{
      this.windowType = "device";
    }
  }
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(_=>{
      var ww = document.body.clientWidth;
      if(ww <= 767){
        this.windowType = "mobile";
      }else{
        this.windowType = "device";
      }
    })
  }

}
