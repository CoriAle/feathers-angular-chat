import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	AuthService,
	FeathersService,
	DataService
} from './service.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
  	  AuthService,
	  FeathersService,
	  DataService
  ]
})
export class ServiceModule { }
