import { Injectable } from '@angular/core';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import feathers from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import feathersAuthClient from '@feathersjs/authentication-client';

@Injectable({
  providedIn: 'root'
})
export class FeathersService {
  private _feathers = feathers(); //Inicializando feathers
  private _socket = io('http://localhost:3030'); //Inicializando Socket IO

  constructor() {
  	this._feathers
  		.configure(feathersSocketIOClient(this._socket)) //Agregando el plugin de socket io
  		.configure(feathersAuthClient({			//Agregando plugin de auth
  			storage: window.localStorage
  		}))
  		.configure(feathersRx({					//Agregando plugin reactiv feathers
  			idField: '_id'
  		}));
   }

   //Exponiendo el servicio

   public service(name: string){
   		return this._feathers.service(name);
   }

   //Exponiendos autenticación
   public authenticate(credentials?): Promise<any>{
   		return this._feathers.authenticate(credentials);
   }

   //Exponiendo el logout

   public logout(){
   	return this._feathers.logout();
   }

}
