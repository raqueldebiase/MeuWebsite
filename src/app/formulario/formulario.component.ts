import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

//Criando o controlador de gerenciamento de estado do formulário
export class FormularioComponent implements OnInit{

  public form!: FormGroup;

  public name: Subject<string> = new Subject<string>();
  public email: Subject<string> = new Subject<string>();
  public interest: Subject<string> = new Subject<string>();
  public message: Subject<string> = new Subject<string>();


  
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
    if (this.form.valid) {
      this.name.next(this.form.controls['message'].toString());


      this.mostrarMensagem = true;
    }
  }
}
