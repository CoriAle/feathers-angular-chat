import { Injectable } from '@angular/core';
import { FeathersService } from './service.index';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private feathers: FeathersService) { }

  messages$(){
  	//Retornando un observable que hará una consulta al servidor en cada susbripción
  	//Usando un mecanismo de cache sería más inteligente en situaciones más completas

  	return (this.feathers
  		.service('messages'))
  		.watch()
  		.find({
  			query:{
  				$sort: {createdAt: -1},
  				$limit: 25
  			}
  		});

  }

  users$(){
  	return (<any>this.feathers
  		.service('users'))
  		.watch()
  		.find();
  }

  sendMessage(message: string){
  	if(message === ''){
  		return;
  	}

  	//feather-reactive observables are hoy by default
  	//Aspu que no necesitamos suscribirnos para hacer un create
  	this.feathers
  	.service('messages')
  	.create({
  		text: message
  	});
  }
}
