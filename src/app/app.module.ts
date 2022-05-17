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
