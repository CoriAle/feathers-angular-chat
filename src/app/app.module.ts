import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*RUTAS*/
import { AppRoutingModule } from './app.routes';

/**IMPORTANTO MÓDULOS*/
import { ServiceModule } from './services/service.module';

//Componentes
import { LoginComponent } from './login/login.component';
//import { ChatComponent } from './pages/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
