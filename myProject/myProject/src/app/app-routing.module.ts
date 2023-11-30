import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [

   {path:'',redirectTo:"homePage",pathMatch:"full"},


   {path:'homePage',component:HomePageComponent},

 


  
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
