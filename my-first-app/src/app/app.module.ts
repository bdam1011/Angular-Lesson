// tell us which module belong to our app
import { NgModule } from '@angular/core';
// FormsModule is Required for Two-Way-Binding
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DataBinding } from './dataBinding/dataBinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent, //可用 ng generate component (ng g c) + 新component的名稱，產生新 component
    DataBinding
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }