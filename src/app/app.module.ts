import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ExamcellComponent } from './examcell/examcell.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { CivComponent } from './civ/civ.component';
import { EeeComponent } from './eee/eee.component';
import { MecComponent } from './mec/mec.component';
import { EceComponent } from './ece/ece.component';
import { CseComponent } from './cse/cse.component';
import { CstComponent } from './cst/cst.component';
import { CsbsComponent } from './csbs/csbs.component';
import { CsmComponent } from './csm/csm.component';
import { CsdComponent } from './csd/csd.component';
import { HbsComponent } from './hbs/hbs.component';
import { FooterComponent } from './footer/footer.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PayingComponent } from './paying/paying.component';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from './environment';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutusComponent,
    AdmissionsComponent,
    DepartmentsComponent,
    ExamcellComponent,
    PaymentComponent,
    LoginComponent,
    CivComponent,
    EeeComponent,
    MecComponent,
    EceComponent,
    CseComponent,
    CstComponent,
    CsbsComponent,
    CsmComponent,
    CsdComponent,
    HbsComponent,
    FooterComponent,
    ChatbotComponent,
    PayingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    NgxStripeModule.forRoot(environment.stripe.publicKey)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
