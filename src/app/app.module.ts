import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainbarComponent,
    Form1Component,
    Form2Component,
    ButtonComponent,
    HeaderComponent,
    Form3Component,
    Form4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
