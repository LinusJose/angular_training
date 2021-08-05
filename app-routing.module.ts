import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PercentageComponent } from './percentage/percentage.component';
import { StudentdataComponent } from './studentdata/studentdata.component';

import { StudenttableComponent } from './studenttable/studenttable.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'studenttable', component:StudenttableComponent  },
  { path: 'studentdata', component:StudentdataComponent  },
  { path: 'percentage', component:PercentageComponent },



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
