import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formulario } from '../interfaces/formulario';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { 
    
  }

  public insert (form: formulario){
    return this.http.post('http://localhost:5079/Formulario/Insert', form);
  }

}
