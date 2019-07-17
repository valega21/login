import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  test: any;
  email:string;
  phone:string;
  nombre: string;
  apellido: string; 
  facebook: string;
  twitter: string;
  google: string;
  linkedin: string;    
  job: string;   
  
  constructor() { }

  ngOnInit() {
    this.test = localStorage.getItem("app_token");
    this.email = this.test.data.email;
    this.phone = this.test.data.phone;
    this.nombre = this.test.data.name;
    this.apellido = this.test.data.last_name;

    this.facebook = this.test.data.facebook;
    this.twitter = this.test.data.twitter;
    this.google = this.test.data.google;
    this.linkedin = this.test.data.linkedin;
    this.job = this.test.data.job_title;

  }
  

}
