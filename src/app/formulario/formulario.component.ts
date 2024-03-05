import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormServiceService } from '../service/form-service.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

//Criando o controlador de gerenciamento de estado do formulário
export class FormularioComponent implements OnInit{

  public form!: FormGroup;

  mostrarMensagem: boolean = false;

  constructor(private formBuilder: FormBuilder, private service:FormServiceService) {}

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
      this.service.setName(this.form.controls['name'].value);
      this.service.setEmail(this.form.controls['email'].value);
      this.service.setInterest(this.form.controls['interest'].value);
      this.service.setMessage(this.form.controls['message'].value);
      this.mostrarMensagem = true;
    }
  }
}
