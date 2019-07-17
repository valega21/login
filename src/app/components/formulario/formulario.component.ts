import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  loginForm: FormGroup;
  title = 'App';
  error: {};
  apiKey: string = 'Nueva123456789';
  constructor(private router:Router, private fb: FormBuilder,private loginService: LoginService) { }


  ngOnInit() {
    this.init();
  }

  init(){
    this.loginForm = this.fb.group({
      email: ['examen@central.zone', Validators.required],
      password: ['123456789', Validators.required],
      apiKey:  [this.apiKey, Validators.required]
    });
  }

  loginUser(){
    const loginRequest = {
      'API-KEY': this.loginForm.value.apiKey,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
      
    };
    this.loginService.loginUser(loginRequest).subscribe(data => {
        console.log('data->', data);
        localStorage.setItem('app_token', JSON.stringify(data));
        this.loginForm.reset();
        this.router.navigate(['/perfil']);
    }, error => {
        this.error = JSON.parse(error.error).error;
      });
  }

}
