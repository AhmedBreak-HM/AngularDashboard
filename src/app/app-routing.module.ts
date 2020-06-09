import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Dashboard' , component: DashboardComponent}
  ]
}, {
  path: '',
  component: FullwidthComponent,
  children: [
    { path: 'Login', component: LoginComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
