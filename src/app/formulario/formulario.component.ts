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
  mostrarMensagem: boolean = false;

  constructor(private formBuilder: FormBuilder) {}
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
    console.log(this.form.value);
    this.mostrarMensagem = true;
  }
}
