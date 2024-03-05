import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  public name: Subject<string> = new Subject<string>();
  public email: Subject<string> = new Subject<string>();
  public interest: Subject<string> = new Subject<string>();
  public message: Subject<string> = new Subject<string>();
  
  setName(name:string){
    this.name.next(name);
  }
  setEmail(email:string){
    this.email.next(email);
  }
  setInterest(interest:string){
    this.interest.next(interest);
  }
  setMessage(message:string){
    this.message.next(message);
  }
}
