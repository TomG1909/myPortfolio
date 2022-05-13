import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SuccessfulSendComponent } from './successful-send/successful-send.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'submitted', component: SuccessfulSendComponent },
  { path: '', component: HomeSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
