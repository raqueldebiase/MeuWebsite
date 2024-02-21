import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

//Criando o controlador de gerenciamento de estado do formulário
export class FormularioComponent implements OnInit{

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  //inicializando o formulário
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      interest: [''],
      message:['']
    });
  };
  
  public onSubmit() {
    console.log(this.form.value);
  }
}
