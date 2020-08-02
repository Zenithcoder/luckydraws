import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './partial/login/login.component';
import { SignupComponent } from './partial/signup/signup.component';
import { UsersComponent } from './users/users.component';
import { GuardianGuard } from './mai-guard/guardian.guard';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LotteryComponent } from './pages/lottery/lottery.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { LogoutComponent } from './users/logout/logout.component';
import { NewTransactionsComponent } from './transactions/new-transactions/new-transactions.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { TermsOfServicesComponent } from './pages/terms-of-services/terms-of-services.component';
import { WinnersComponent } from './pages/winners/winners.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'privacy-policy', component: TermsConditionsComponent },
  { path: 'winners', component: WinnersComponent },
  { path: 'terms-services', component: TermsOfServicesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lottery/:id', component: LotteryComponent},
  { path: 'cart', component: CartComponent, canActivate: [GuardianGuard] },
  { path: 'competitions', component: CompetitionComponent },
  { path: 'my-account', component: AccountComponent, canActivate: [GuardianGuard] },
  { path: 'wallet', component: NewTransactionsComponent, canActivate: [GuardianGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [GuardianGuard] },
  { path: 'login', component: UsersComponent, children: [{ path: '', component: LoginComponent }] },
  { path: 'xlogin', component: LoginComponent },
  { path: 'register', component: UsersComponent, children: [{ path: '', component: SignupComponent }] },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
