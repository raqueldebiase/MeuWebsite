import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { formulario } from '../interfaces/formulario';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

//Criando o controlador de gerenciamento de estado do formulário
export class FormularioComponent implements OnInit{

  public form!: FormGroup;

  mostrarMensagem: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpService) {}

  //inicializando o formulário

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      interest: ['', Validators.required],
      message:['', Validators.required]
    });
  };
  
  public onSubmit() {
    if (this.form.valid) {
      const form: formulario = {
        name: this.form.controls['name'].value,
        email: this.form.controls['email'].value,
        interest: this.form.controls['interest'].value,
        message: this.form.controls['message'].value,
      }
      this.http.insert(form).subscribe(x=>{
        console.log(x);
      })
      this.mostrarMensagem = true;
    }
  }
}
