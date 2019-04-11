import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { QuoteServiceService } from './service/quote-service.service';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.css']
})
export class QuoteRequestComponent implements OnInit {

  constructor(private quoteService : QuoteServiceService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){

    console.log(JSON.stringify( form.value));
    let quote= form.value;
    this.quoteService.getQuote(quote).subscribe((res:any)=>{
      console.log("Quote Status::"+ res);
      if(res.status == true){
        alert("Our Customer service will contact you asap");
      }
    });
  }
}
