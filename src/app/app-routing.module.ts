import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';




const routes: Routes = [
  { path: 'vatandas', component: Form1Component },
  { path: 'basvur', component: Form2Component },
  { path: 'ekle', component: Form3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
