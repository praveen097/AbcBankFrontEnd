import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationScreenComponent } from './activation-screen/activation-screen.component';
import { AddBillerComponent } from './add-biller/add-biller.component';
import { AuthGuard } from './auth.guard';
import { BillPaymentMenuComponent } from './bill-payment-menu/bill-payment-menu.component';
import { BillPaymentRegistrationComponent } from './bill-payment-registration/bill-payment-registration.component';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { ManageBillersComponent } from './manage-billers/manage-billers.component';
import { ModifyBillerComponent } from './modify-biller/modify-biller.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PaymentInstructionComponent } from './payment-instruction/payment-instruction.component';
import { PaymentComponent } from './payment/payment.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'information', component: InformationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'billPaymentRegistration', canActivate:[AuthGuard],
    component: BillPaymentRegistrationComponent,
  },
  { path: 'activation', component: ActivationScreenComponent },
  { path: 'paymentMenu', component: BillPaymentMenuComponent },
  { path: 'manageBiller', component: ManageBillersComponent },
  { path: 'makePayment', component: PaymentComponent },
  { path: 'paymentHistory', component: PaymentHistoryComponent },
  { path: 'addBiller', component: AddBillerComponent },
  { path: 'modifyBiller', component: ModifyBillerComponent },
  { path: 'paymentInstruction', component: PaymentInstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
