import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ExamcellComponent } from './examcell/examcell.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { CivComponent } from './civ/civ.component';
import { EeeComponent } from './eee/eee.component';
import { MecComponent } from './mec/mec.component';
import { CseComponent } from './cse/cse.component';
import { CstComponent } from './cst/cst.component';
import { CsbsComponent } from './csbs/csbs.component';
import { CsmComponent } from './csm/csm.component';
import { CsdComponent } from './csd/csd.component';
import { HbsComponent } from './hbs/hbs.component';
import { PayingComponent } from './paying/paying.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'admissions', component: AdmissionsComponent},
  {path:'departments', component: DepartmentsComponent},
  {path:'examcell', component: ExamcellComponent},
  {path:'payment', component: PaymentComponent},
  {path:'login', component: LoginComponent},
  {path:'civ', component: CivComponent},
  {path:'eee', component: EeeComponent},
  {path:'mec', component: MecComponent},
  {path:'ece', component: EeeComponent},
  {path:'cse', component: CseComponent},
  {path:'cst', component: CstComponent},
  {path:'csbs', component: CsbsComponent},
  {path:'csm', component: CsmComponent},
  {path:'csd', component: CsdComponent},
  {path:'hbs', component: HbsComponent},
  {path:'paying', component: PayingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
