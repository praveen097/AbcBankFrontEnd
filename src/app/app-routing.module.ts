import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationScreenComponent } from './activation-screen/activation-screen.component';
import { BillPaymentRegistrationComponent } from './bill-payment-registration/bill-payment-registration.component';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path:"", component:WelcomeComponent },
  { path:"information", component:InformationComponent },
  { path:"login", component:LoginComponent },
  { path:"billPaymentRegistration", component:BillPaymentRegistrationComponent},
  { path:"activation", component:ActivationScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
