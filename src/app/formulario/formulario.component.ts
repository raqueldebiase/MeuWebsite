import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formulario } from '../interfaces/formulario';
import { HttpService } from '../services/http.service';

// Importe apenas os módulos necessários do Firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public form!: FormGroup;
  mostrarMensagem: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      interest: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      const form: formulario = {
        name: this.form.controls['name'].value,
        email: this.form.controls['email'].value,
        interest: this.form.controls['interest'].value,
        message: this.form.controls['message'].value,
      };

      // this.http.insert(form).subscribe(x => {
      //   console.log(x);
      // });

      this.mostrarMensagem = true;

      // Enviar dados para o Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyBAwiIez1R14P1aCc7DowMLrzT52Kv8pyQ",
        authDomain: "formulario-de-contato-21184.firebaseapp.com",
        projectId: "formulario-de-contato-21184",
        storageBucket: "formulario-de-contato-21184.appspot.com",
        messagingSenderId: "565842643351",
        appId: "1:565842643351:web:013235b21df1b7571a5cd2",
        measurementId: "G-T11DEGMCDT",
        //databaseURL: "https://formulario-de-contato.firebaseio.com",
      };

      

      // Inicialize o aplicativo Firebase
      const firebaseApp = initializeApp(firebaseConfig);

      // Obtenha uma referência ao banco de dados
      const database = getDatabase(firebaseApp);

      // Caminho no banco de dados
      const caminhoNoBancoDeDados = 'formulario-portfolio/QNHteGpjHD8hd5DaCWLO';

      // Enviar dados para o Firebase
      push(ref(database, caminhoNoBancoDeDados), form);
    }
  }
}
