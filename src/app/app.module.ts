import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BillPaymentRegistrationComponent } from './bill-payment-registration/bill-payment-registration.component';
import { ActivationScreenComponent } from './activation-screen/activation-screen.component';
import { BillPaymentMenuComponent } from './bill-payment-menu/bill-payment-menu.component';
import { ManageBillersComponent } from './manage-billers/manage-billers.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AddBillerComponent } from './add-biller/add-biller.component';
import { ModifyBillerComponent } from './modify-biller/modify-biller.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InformationComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BillPaymentRegistrationComponent,
    ActivationScreenComponent,
    BillPaymentMenuComponent,
    ManageBillersComponent,
    PaymentComponent,
    PaymentHistoryComponent,
    AddBillerComponent,
    ModifyBillerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
