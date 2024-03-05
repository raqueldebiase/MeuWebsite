import { Component, OnInit } from '@angular/core';
import { FormServiceService } from './service/form-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'portfolio';
  name = '';
  email = '';
  interest = '';
  message= '';

  constructor(private service: FormServiceService){

  }

  ngOnInit(): void {
    this.service.name.subscribe(x=>{
      this.name=x;
    });
    this.service.email.subscribe(x=>{
      this.email=x;
    });
    this.service.interest.subscribe(x=>{
      this.interest=x;
    });
    this.service.message.subscribe(x=>{
      this.message=x;
    });
  }

}
