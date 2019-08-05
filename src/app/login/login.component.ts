import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeathersService } from '../services/service.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  messages: string[] = [];
  constructor(private feathers: FeathersService, private router: Router) { }

  ngOnInit() {
  }

  login(email:string, password: string){
  	if(!email || !password){
  		this.messages.push('¡Credenciales incompletas!')
  	}
    //Autenticación con feathers
    this.feathers.authenticate({
      strategy: 'local',
      email,
      password
    })
      .then(()=>{
        this.router.navigate(['/']);
      })
      .catch((err)=>{
        this.messages.unshift('Credenciales incorrectas');
      })
  }

  signup(email: string, password: string){
    this.feathers.service('users')
      .create({email, password})
      .then(()=> this.messages.push("Usuario creado"))
      .catch(err=> this.messages.push('No se pudo crear un usuario'))
  }



}
