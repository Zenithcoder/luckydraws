import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Angular4PaystackModule } from 'angular4-paystack';
import { AbokiGuard } from "./mai-guard/aboki.guard";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
// Component Below

import { HeaderComponent } from './partial/header/header.component';
import { FooterComponent } from './partial/footer/footer.component';
import { LoginComponent } from './partial/login/login.component';
import { SignupComponent } from './partial/signup/signup.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AllTransactionsComponent } from './transactions/all-transactions/all-transactions.component';
import { NewTransactionsComponent } from './transactions/new-transactions/new-transactions.component';
import { TransactionDetailsComponent } from './transactions/transaction-details/transaction-details.component';
import { UsersComponent } from './users/users.component';
import { LogoutComponent } from './users/logout/logout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { LotteryComponent } from './pages/lottery/lottery.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { TermsOfServicesComponent } from './pages/terms-of-services/terms-of-services.component';
import { WinnersComponent } from './pages/winners/winners.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AllTransactionsComponent,
    NewTransactionsComponent,
    TransactionDetailsComponent,
    UsersComponent,
    LogoutComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    CompetitionComponent,
    LotteryComponent,
    AccountComponent,
    CartComponent,
    HowItWorksComponent,
    TermsConditionsComponent,
    TermsOfServicesComponent,
    WinnersComponent,
    ForgotPasswordComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgxSpinnerModule,
    Angular4PaystackModule.forRoot('pk_test_62e65601e9e5df85272c1585f6a67479ded1eb17'),
    BrowserAnimationsModule, ToastrModule.forRoot(), HttpClientModule, ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [AbokiGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
