import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReciepeComponent } from './reciepe/reciepe.component';

const routes: Routes = [
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  
  { path: 'main', component: MainpageComponent },
  { path: '0', component: ReciepeComponent },
  { path: '1', component: ReciepeComponent },
  { path: '2', component: ReciepeComponent },
  { path: '3', component: ReciepeComponent },
  { path: '4', component: ReciepeComponent },
  { path: '5', component: ReciepeComponent },
  { path: '6', component: ReciepeComponent },
  { path: '7', component: ReciepeComponent },
  { path: '8', component: ReciepeComponent },
  { path: '9', component: ReciepeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
