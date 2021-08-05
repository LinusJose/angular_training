import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudenttableComponent } from './studenttable/studenttable.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { PercentageComponent } from './percentage/percentage.component';


@NgModule({
  declarations: [
    AppComponent,
    
    StudenttableComponent,
    LoginComponent,
    StudentdataComponent,
    PercentageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
