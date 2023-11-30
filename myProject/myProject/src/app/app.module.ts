import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe} from '@angular/common';

//components


import { ImgComponent } from './Components/img/img.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { FilesBarComponent } from './Components/files-bar/files-bar.component';
 
//matirial
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        ImgComponent,
        FilesBarComponent


    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DatePipe,
       
        //MATRIAL
        MatSlideToggleModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatDividerModule
    ]
})
export class AppModule { }
